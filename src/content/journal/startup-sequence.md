---
title: 'From power to picture'
description: 'Thinking through a startup sequence that feels like switching on an appliance.'
date: 2026-10-01
category: Software
number: '03'
visual: signal
---

The desired experience begins with one physical action: switch on the deck. Everything that follows should make sense without a keyboard, a desktop or a network connection.

Behind that simple interaction are several separate systems. The Raspberry Pi needs to start, the playback software needs to become ready, and the front-panel display needs to communicate what is happening.

## Think in states

A useful first model separates power, system readiness and playback readiness. A screen being lit does not necessarily mean that video playback is available.

```text
Power on
  → Start the control service
  → Check the player and display
  → Load the selected local playlist
  → Show the ready state
```

This is a proposed sequence, not an implemented boot specification. The actual order will depend on the hardware and the control interfaces selected for the build.

## Make waiting understandable

A restrained indicator can tell the user that the deck is starting. Once the player is ready, the interface should change clearly. A decorative animation should not imply readiness before the system can actually respond.

If a component fails, the display needs a useful state instead of an endless startup animation.

## Keep maintenance separate

Everyday playback is intended to remain local and self-contained. A service interface can provide access to playlists, media and diagnostics when maintenance is needed.

The website you are reading documents that idea; it is not the Deck Manager application and does not control any hardware.

## Next step

Measure startup behaviour on the selected hardware and record each transition. Those observations should guide the timing and feedback of the final interface.
