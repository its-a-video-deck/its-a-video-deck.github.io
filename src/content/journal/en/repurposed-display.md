---
title: 'The feel of a picture tube'
description: 'I wanted a small colour CRT in the cassette window. The search led me to an OLED phone and the lenses from old slide viewers.'
date: 2026-10-09
locale: en
category: Design
entryType: design-note
perspective: experience
number: '02'
visual: display
---

In the cassette window, I pictured a small colour screen. It needed the presence of a picture tube: curved glass, a bright image, that particular crispness I associate with old televisions. I wanted it to belong among the buttons and VU meters, in a video deck that could have come from their era.

I had portable video equipment with small built-in screens in mind. To me, though, it looked more like technical equipment than living-room hi-fi. It gave me a reference for the idea, but I wanted to find another way to fit it in. The starting point still seemed obvious enough: find a real tube.

## Colour in a small window

I looked for CRTs to salvage from small devices, with a limit of around five to six inches to suit the space I had in mind for the cassette window. Most of the small screens I found were black and white. The colour models I came across were too deep.

One more compact option held my attention for a while, but it meant buying a collectible device costing several hundred euros. I had reached a familiar limit in the project: taking apart something sought after just to use one part of it did not fit either the budget or my idea of reuse.

I even looked at old video intercoms. They contained small tubes, but every one I found was black and white too. I considered accepting that. After all, my period televisions are already monochrome.

That was precisely what made me hold on to colour. The screen in the deck could offer something different. I would also like to include a switch between colour and black and white, keeping both possibilities. So I eventually stopped looking for a tube and changed the question: which flat screen could help me recover that feeling?

## A screen I already knew

Since the project used a Raspberry Pi, I began with the screens sold to accompany it. At the resolutions and quality I wanted, the prices seemed high. Above all, I wanted OLED: deep blacks without the impression of a lit background that bothered me on LCDs, and enough resolution for a fine image.

There was a whole supply of good screens inside devices that had become inexpensive: old smartphones. A phone could be past its useful life as an everyday device and still have a beautiful display. I also liked the way this brought the project back to an object I could reuse.

I remembered the second-generation Motorola Moto X I had owned. Its OLED screen was bright, and I liked the quality of its glass, which seemed to resist scratches well. But another detail mattered even more: the picture appeared to sit immediately behind the glass. I could barely perceive a distance between them.

I also tried a Samsung Galaxy S4 bought cheaply for parts. On that particular unit, the screen seemed dimmer, and I was more aware of the gap between the glass and the image. I noticed that small separation in use. The Moto X won me over through that closeness: even before trying to imitate a tube, it gave me a relationship between glass and picture that I liked.

## Keeping the whole phone

For a long time, I considered keeping only the OLED panel and connecting it directly to the Raspberry Pi. That would have removed the rest of the phone, its battery and its operating system. But as I looked into using the display’s ribbon connector, I could not find an accessible way to adapt it. The route called for more reverse engineering than I could see myself taking on for this project.

I chose to keep the Moto X whole. A USB connection to the Raspberry Pi could carry the video stream to it; I had already tested and validated that approach. I could leave the assembly intact, including the glass that had helped me choose it.

I still needed to give the flat screen the physical depth I had in mind.

## A detour through slide viewers

The idea came from small slide viewers, the boxes with a lamp inside that let you look at a magnified photograph. I could readily find them second-hand at modest prices. In the models I was looking at, several magnifying lenses were stacked a few millimetres apart. Some had a shape close to 4:3, which reminded me of a small television screen.

These pieces could bring something the phone alone did not provide. I settled on salvaging the lenses and placing them in front of its display. Combined with the OLED’s brightness and work on how the image is rendered, they offer a way to pursue the impression of curved glass and the particular crispness that first drew me towards a CRT.

This is the physical approach I have validated for the deck. The aim remains to get as close as I can to the feel of a picture tube. I like that it brings together two objects that were never intended to meet: an ageing phone and a slide viewer, each contributing a useful quality to the screen.

## Letting the smartphone disappear

Keeping the whole phone had another consequence: its habits came with it. A manufacturer’s logo, a startup animation, a vibration or a notification could be enough to reveal what was behind the glass. Even with the right physical appearance, those interruptions would break the experience.

Its origins needed to disappear. The procedures for turning it into a dedicated screen for the Raspberry Pi will have their own implementation article; they involve far more steps than I first imagined. Here, they serve a simple requirement: from startup to picture, the screen needs to feel like part of the deck.

That is what connects the whole search, from the first small tube I considered to the slide-viewer lenses. In the cassette window, I want a colour screen I can enjoy looking at as much as the equipment around it.
