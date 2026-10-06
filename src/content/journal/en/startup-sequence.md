---
title: 'From power to picture'
description: 'The startup I want: one switch, then a picture, without a keyboard or a network.'
date: 2026-10-01
locale: en
category: Software
number: '03'
visual: signal
---

I want one physical action: switch the deck on. After that I should be able to tell what is happening without a keyboard, a desktop, or a network connection.

Several things have to come up. The Raspberry Pi has to start, playback has to become ready, and the front-panel display has to say which of those is true. A lit screen is not the same thing as a picture I can play.

The order I am aiming at is: power on, start the control service, check the player and the display, load the selected local playlist, then show that it is ready. While that is unfinished, the display should say the deck is starting, and it should change once playback can actually respond. If something fails, I want a state I can read, not an animation that keeps going.

Day-to-day playback should stay local. A separate service screen can hold playlists, media and diagnostics when I need to maintain the machine. This website is not that screen, and it does not control the deck.
