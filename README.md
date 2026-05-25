# Hacklet

Hacklet is a fun JavaScript bookmarklet project from Hack Club.

Website: https://hacklet.hackclub.com/

## What it does

When you run the bookmarklet on a page, it asks for a season and then:

- Replaces visible text with season-themed emojis
- Replaces all `<img>` elements with a season-themed image
- Shows a short themed alert

Supported seasons:

- `summer`
- `winter`
- `fall`
- `spring`

Any other input triggers an error-style theme.

## How to use

1. Open `main.js` and copy the full contents.
2. Create a new browser bookmark.
3. Paste the copied code into the bookmark URL/location field.
4. Visit any webpage and click the bookmark.
5. Enter a season when prompted.

## Development

This repository is intentionally simple and currently contains a single script:

- `main.js` — the bookmarklet source
