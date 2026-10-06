export const storyFigureIds = ['snow', 'shelf', 'path', 'chassis'] as const;

export type StoryFigureId = (typeof storyFigureIds)[number];

export interface StorySection {
  heading: string;
  html: string;
  figure?: StoryFigureId;
}

const figureLine = /^\{\{figure:([a-z]+)\}\}$/;

function isStoryFigureId(value: string): value is StoryFigureId {
  return (storyFigureIds as readonly string[]).includes(value);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function renderInline(value: string): string {
  const escaped = escapeHtml(value);
  return escaped
    .replaceAll(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      (_match, label: string, href: string) =>
        `<a href="${href.replaceAll('"', '&quot;')}">${label}</a>`,
    )
    .replaceAll(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replaceAll(/__([^_]+)__/g, '<strong>$1</strong>')
    .replaceAll(/\*([^*]+)\*/g, '<em>$1</em>')
    .replaceAll(/_([^_]+)_/g, '<em>$1</em>');
}

function blocksToHtml(lines: string[]): string {
  const html: string[] = [];
  let paragraph: string[] = [];
  let quote: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    html.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const flushQuote = () => {
    if (quote.length === 0) return;
    html.push(`<blockquote>${renderInline(quote.join(' '))}</blockquote>`);
    quote = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('>')) {
      flushParagraph();
      quote.push(trimmed.replace(/^>\s?/, ''));
      continue;
    }
    if (trimmed === '') {
      flushParagraph();
      flushQuote();
      continue;
    }
    flushQuote();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushQuote();
  return html.join('\n');
}

export function parseStoryMarkdown(markdown: string): StorySection[] {
  const sections: Array<{
    heading: string;
    lines: string[];
    figure?: StoryFigureId;
  }> = [];
  let current: (typeof sections)[number] | null = null;

  for (const line of markdown.replaceAll('\r\n', '\n').split('\n')) {
    if (line.startsWith('## ')) {
      const heading = line.slice(3).trim();
      if (!heading) throw new Error('Story markdown has an empty heading');
      current = { heading, lines: [] };
      sections.push(current);
      continue;
    }
    if (!current) continue;
    const match = line.trim().match(figureLine);
    if (match) {
      const id = match[1] ?? '';
      if (!isStoryFigureId(id)) {
        throw new Error(
          `Unknown story figure "${id}" in section "${current.heading}"`,
        );
      }
      if (current.figure) {
        throw new Error(
          `Section "${current.heading}" includes more than one figure`,
        );
      }
      current.figure = id;
      continue;
    }
    current.lines.push(line);
  }

  if (sections.length === 0) {
    throw new Error('Story markdown has no sections');
  }

  return sections.map((section) => ({
    heading: section.heading,
    html: blocksToHtml(section.lines),
    figure: section.figure,
  }));
}
