# 🎧 Audible Debug - audible debugging of browser-based JavaScript applications

## Usage

```javascript
import { emitSoundsWhenMutated } from "audible-debug";

emitSoundsWhenMutated(document);
// 🎧 Then put on your headphones and play with whatever you're building.
// You should hear some audible chirps as the DOM is mutated

// Stop the observer
const stop = emitSoundsWhenMutated(document);

// ... some time later ...
stop();
```

## What do the sounds mean?

In short, something changed inside your chosen element.

The more things that change, the
higher the pitch. This means you can get a feel for the amount of work the DOM is doing
and when just by listening to your apps.

## Motivation

When we're building interactive apps, sometimes it's useful to know when something has
changed in the DOM. You might find that you've got a runaway timer, or you're making more
changes to the DOM than necessary which could cause performance issues.

By listening to our apps, we can put our ears to use as a spare information stream for our
debugging.
