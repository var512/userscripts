# File type detection
`<link rel="image_src" href="https://i.imgur.com/${ID}.${EXT}"/>`

# Exclude
- `https://imgur.com/about`
- `https://imgur.com/privacy`
- `https://imgur.com/search?q=${S}`
- `https://imgur.com/upload`
- `https://imgur.com/t/${S}`
- HTTP 404

# Redirection map

Link
---
- `https://imgur.com/${ID}`
    - `https://i.imgur.com/${ID}.${EXT}`

Album
---
- `https://imgur.com/a/${ID}`
    - `https://imgur.com/a/${ID}/zip`

Gallery
---
- `https://imgur.com/gallery/${ID}`
    - `https://imgur.com/a/${ID}/zip`
