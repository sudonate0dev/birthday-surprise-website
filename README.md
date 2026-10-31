# Birthday Surprise Website ♡

A polished romantic birthday-surprise website built with Node.js, Express and EJS.

## Features

- Responsive mobile + desktop design
- Reusable EJS partials
- Romantic animated hero section
- Personal birthday letter
- Favorite memories section
- Photo + video gallery with lightbox
- Music toggle
- Interactive gift selection
- Celebration effects
- Final surprise reveal page
- Easy-to-edit personal data in one place

## 1. Requirements

Install:

- Node.js 18+ (Node.js 20+ recommended)
- npm

Check your installation:

```bash
node -v
npm -v
```

## 2. Install dependencies

Open a terminal inside this project folder:

```bash
npm install
```

## 3. Personalize the website

Open:

```text
server.js
```

Find:

```js
const birthdayData = {
```

Change:

- `herName`
- `yourName`
- `birthdayDate`
- `heroLine`
- `introMessage`
- `letter`
- `memories`
- `gallery`
- `gifts`

The comments in `server.js` show exactly where to edit.

## 4. Add photos

Put your pictures in:

```text
public/media/photos/
```

The default configuration expects:

```text
photo-1.jpg
photo-2.jpg
photo-3.jpg
video-poster.jpg
```

You can use your own filenames, but update the `gallery` array in `server.js`.

## 5. Add a video

Put your MP4 video in:

```text
public/media/videos/memory.mp4
```

If your video has another name, update `server.js`.

## 6. Add music

Put an MP3 file here:

```text
public/media/birthday-music.mp3
```

The Music button starts/stops it.

Modern browsers usually block automatic audio playback, so the site waits for the visitor to click the music button.

## 7. Run the website

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

For development with automatic Node restarts:

```bash
npm run dev
```

## Project structure

```text
birthday-surprise/
│
├── server.js
├── package.json
├── README.md
├── .gitignore
│
├── views/
│   ├── index.ejs
│   ├── surprise.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
└── public/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── media/
        ├── birthday-music.mp3
        ├── photos/
        │   └── README.txt
        └── videos/
            └── README.txt
```

## Optional: deploy it

This project can be deployed to services such as Render, Railway or another Node.js host.

Make sure your start command is:

```bash
npm start
```

The app uses:

```js
process.env.PORT || 3000
```

so hosting platforms can supply their own port.

## Important customization tip

For the strongest personal effect, change the placeholder text instead of leaving generic messages.

A good combination is:

1. A personal opening sentence.
2. Three real memories.
3. 3–6 meaningful photos.
4. A short video.
5. A song associated with both of you.
6. Three gifts she can genuinely choose from.
7. A final surprise that only makes sense to the two of you.
