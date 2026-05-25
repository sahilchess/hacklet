# Hacklet

Hacklet is a seasonal page chaos bookmarklet built for Hack Club.

Website: https://hacklet.hackclub.com/

## What it does

When run, Hacklet asks for a season (`summer`, `winter`, `fall`, or `spring`) and then:

- Replaces page text with season-themed emojis
- Replaces all images on the page with a matching seasonal image
- Shows a season-themed alert message

If the input is invalid, it switches to an error mode with warning emojis and alerts.

## Usage

1. Copy the JavaScript from [`main.js`](./main.js).
2. Create a new browser bookmark.
3. Paste the script as the bookmark URL.
4. Open any webpage and click the bookmark.
5. Enter a season when prompted.

## Project structure

- `main.js` — the bookmarklet source code
