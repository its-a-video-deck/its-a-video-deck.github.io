---
title: 'Drawing the UHF scale'
description: 'Frequencies, channel numbers and station names: the markings on the band I explore with the tuning knob.'
date: 2026-10-03
locale: en
category: Design
entryType: design-note
perspective: experience
number: '01'
visual: scale
---

I want to bring back the gesture of looking for a channel across a band, following a pointer as I turn the knob. Frequency selection and channel simulation already work in the application. This note is about making them readable on the deck.

## Frequencies and names

The band carries UHF markings, frequencies in MHz and channel numbers. I am adding four-letter channel names, taking my cue from the AM stations named on old radio receivers. Those short names provide another way to recognise the programmes I have put together.

The deck’s channels are simulated: each is a playlist on which time keeps moving. Here, the scale is a way to navigate those programmes. It does not describe a set of frequencies actually transmitted by the unit. Connecting the analog converters is a separate subject for the implementation notes.

## A band to explore

Between channels, static and jumping-channel effects are part of the search. The pointer lets me follow my position as the picture changes. At the end of the band, the last channel is reserved for the Philips PM5544 test card and its tone.

I want the short names to remain legible without dominating the scale. The placement of the markings, their contrast and their fit within the front panel still need work. The drawing with this note is a graphic study: its numbers are not the deck’s frequency plan, and it does not yet include the channel names.

The programmes on those channels and the time passing on each are described in [Channels that keep going without me](/journal/channels-that-keep-going/).
