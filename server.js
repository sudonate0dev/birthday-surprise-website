const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


const birthdayData = {
  herName: "Abimbola Grace",
  yourName: "Oladayo Collins",
  birthdayDate: "November 1",
  nicknames: {
  her: "Grace Nate",
  yours: "Collins Nate",
  together: "Grace & Collins"
},
  heroLine: "Today is all about celebrating the beautiful person you are.",
  introMessage:
    "Happy birthday, my favorite person. I hope this little corner of the internet reminds you how loved, appreciated and special you are.",
  letter: [
    "I honestly don't know where to start, but I just want you to know how special you are to me. Having you in my life is something I'll always be grateful for.",
    " You're more than just a friend; you're someone I cherish, someone I can laugh with, and someone whose presence makes life a little better.",
    "There are people who make ordinary days feel a little brighter. You are one of those people.",
    "Thank you for the smiles, the memories, the random conversations, and all the little moments that became special simply because you were there.",
    "Today, I hope you remember that you deserve happiness, peace, laughter and every beautiful thing life has to offer.",
    "I pray this new chapter brings you endless happiness, genuine love, peace of mind, success, and everything your heart desires.",
    "May God continue to guide you, protect you, and bless you beyond your expectations.",
    "Never stop being the beautiful, amazing person you are. You deserve all the good things life has to offer.",
    "I love you, bestie. Keep shining, keep smiling, and never forget how special you are to me. ❤️🥂",
    "Happy birthday. This is just a small digital surprise, but the feelings behind it are very real."
  ],

  bestieMessage: {
  title: "My favorite human.",
  subtitle: "My bestie. My chaos partner. My forever friend.",
  text: "Some people come into your life and somehow become family. That's you."
  },

  
  memories: [
  {
    date: "Memory 01",
    title: "The moment we met",
    text: "Two people who gradually became close, fell in love, and started a relationship despite the suspicious and challenges around them.",

    story: [
      "The moment we met… well, technically, we didn't really notice each other back then, so I can't exactly say that was when our story began. Let me put it this way: the moment we got to know each other.",
      "We started talking, gradually became closer, and somewhere along the way, we fell in love. Neither of us was willing to admit it at first, but eventually, we came to terms with our feelings.",
      "Before we knew it, we were chatting nonstop, almost as though we couldn't get enough of each other. Until one day, things nearly took a different turn. Uncle Shittu called us into his office, one after the other, and interrogated us. 😅",
      "People began to suspect something was going on between us, and even some teachers started making unnecessary comments. But honestly, that was their business, not ours. Thankfully, we managed to get through it without being exposed.",
      "And despite all the suspicions and close calls, nothing stopped us. We eventually made things official and started dating. 🥰",
      "Unfortunately, life had other plans. I was transferred to another school, and just like that, the distance began to take its toll on what we had built. Our relationship was disrupted, and things became increasingly complicated.",
      "Then trouble started brewing at your school, and gradually, our communication began to fade. The conversations became less frequent, the connection slowly weakened, and before we even realised it, we were drifting apart.",
      "And just like that, something that once felt inseparable slowly became a distant memory.",
    ],

    images: [
      "/media/photos/grace-2.jpg",
      "/media/photos/grace-4.jpg"
    ],

    icon: "♡"
  },
  {
    date: "Memory 02",
    title: "The Moment Our Paths Crossed Again…",
    text: "After drifting apart, life broughtv us together again, rekindling an old connection and building an even stronger bond.",

    story: [
      "Fast-forward to last year, around December, if my memory serves me right. That's when our paths crossed again. I remember taking your number from our class group, and shortly afterwards, I finally reached out to you. It was the first time we had properly spoken in such a long time, and from that moment, we slowly began reconnecting.",
      "We started talking again, catching up on lost time and rebuilding the connection we once had. Then, sometime after my matriculation, things took an unexpected turn. My girlfriend at the time broke up with me, and naturally, I came to you. We talked about everything, and you listened. You comforted me, made me feel better, and somehow managed to put a smile back on my face when I needed it.",
      "I also vividly remember when you invited me to Glorious Inter-House Sports Competition. That was another memorable moment because I got to see you again, reconnect with many of my old friends, teachers, and juniors. We had so much fun, reminisced about old times, and caught up on everything we had missed.",
      "After that, I honestly can't remember every little detail of how things unfolded, but one thing I remember clearly is how we gradually became closer. Day by day, our bond grew stronger, and before we knew it, we had become a significant part of each other's daily lives.",
      "We started seeing each other almost every day, spending more time together, sharing moments, and creating new memories",
      "It was almost as though life had given us another opportunity to pick up where we left off, only this time, our connection seemed even stronger."
    ],

    images: [
      "/media/photos/grace-22.jpg",
      "/media/photos/grace-20.jpg"
    ],

    icon: "✦"
  },
  {
    date: "Memory 03",
    title: "That unforgettable day",
    text: "The Day We Almost Didn't Make It Out of the Exam Queue… 😭🤣",

    story: [
      "Now, how could I possibly tell our story without mentioning that unforgettable day at OAU (Oba Awon University)? I'm sure you remember it vividly: the day we went to write our GST examination and almost lost our lives trying to get into the examination hall. 😭",
      "Imagine having about 13,000 students gathered outside the examination hall, all struggling to get inside. The place was ridiculously crowded, the sun was scorching, and there was barely any room to breathe. I remember standing under that hot sun for almost six to seven hours!",
      "And then came the real chaos. We found ourselves trapped in the middle of the crowd. People were pushing from every direction, and we kept moving forward and backward, struggling to maintain our balance and avoid falling.",
      "Honestly, you could have fainted that day, but thankfully, I was holding on to you. We endured that madness together for over three hours, while people were fainting around us left and right.",
      "Eventually, we decided to step away from the crowd and catch our breath. We went up to my departmental floor, found a chair, and sat down to rest. I can still remember holding you in my arms as we tried to recover from all the stress and exhaustion.",
      "But apparently, that wasn't the end of our suffering. After resting for a while, we went back downstairs and joined the struggle all over again, all for an examination that was supposed to last just 30 minutes!",
      "And guess what? After all that suffering, all that standing under the sun, all that pushing and struggling, we were eventually told to go home because the examination had been postponed. 😭🤣",
      "Imagine going through all that just to end up writing absolutely nothing that day!",
      "That day was absolute madness. A whole survival experience disguised as a GST examination. 🤣❤️"

    ],

    images: [
      "/media/photos/grace-14.jpg",
      "/media/photos/grace-26.jpg"
    ],

    icon: "☾"
  }
],

gallery: [
  {
    type: "photo",
    src: "/media/photos/grace-21.jpg",
    caption: "Beautiful memories ♡"
  },
  {
    type: "photo",
    src: "/media/photos/grace-3.jpg",
    caption: "That beautiful smile"
  },
  {
    type: "photo",
    src: "/media/photos/grace-12.jpg",
    caption: "A moment to remember"
  },
  {
    type: "photo",
    src: "/media/photos/grace-15.jpg",
    caption: "Forever a special memory"
  },
  {
    type: "photo",
    src: "/media/photos/grace-24.jpg",
    caption: "Simply Grace ✨"
  },
   {
    type: "photo",
    src: "/media/photos/grace-25.jpg",
    caption: "my Girl ❤️😍"
  },
  {
    type: "video",
    src: "/media/videos/grace-vid1.mp4",
    poster: "/media/photos/g-vidbg1.jpg",
    caption: "A little moment on camera"
   
  },
  {
    type: "video",
    src: "/media/videos/grace-vid3.mp4",
    poster: "/media/photos/grace-bg3.jpg",
    caption: "One for the memories"
  },
  {
    type: "video",
    src: "/media/videos/grace-vid2.mp4",
    poster: "/media/photos/grace-bg2.jpg",
    caption: "Unforgettable moments"
  }
],

  
  gifts: [
    {
      id: "date",
      emoji: "🌹",
      title: "A Dream Date",
      description: "You choose the place, the food and the vibe. I handle the rest."
    },
    {
      id: "shopping",
      emoji: "🛍️",
      title: "A Shopping Day",
      description: "A day dedicated to spoiling you and letting you pick something you love."
    },
    {
      id: "surprise",
      emoji: "🎁",
      title: "The Mystery Gift",
      description: "No hints. No spoilers. Just trust me and prepare to be surprised."
    }
  ]
};



app.get("/", (req, res) => {
  res.render("index", { data: birthdayData });
});

app.post("/gift", (req, res) => {
  const selected = birthdayData.gifts.find((gift) => gift.id === req.body.giftId);

  if (!selected) {
    return res.status(400).json({
      success: false,
      message: "Please choose one of the available gifts."
    });
  }

  // This is intentionally simple. You can later save this choice
  // to PostgreSQL, MongoDB, an email service, etc.
  console.log(`Gift selected: ${selected.title}`);

  res.json({
    success: true,
    gift: selected,
    message: `Excellent choice! ${selected.title} is yours.`
  });
});

app.get("/memory/:id", (req, res) => {
  const memoryIndex = Number(req.params.id) - 1;

  if (
    !Number.isInteger(memoryIndex) ||
    memoryIndex < 0 ||
    memoryIndex >= birthdayData.memories.length
  ) {
    return res.redirect("/");
  }

  res.render("memory", {
    data: birthdayData,
    memoryIndex
  });
});

app.get("/magic", (req, res) => {
  res.render("magic", { birthdayData });
});


app.get("/surprise", (req, res) => {
  res.render("surprise", { data: birthdayData });
});

app.get("/games", (req, res) => {
  res.render("games", { birthdayData });
});

app.listen(PORT, () => {
  console.log(`Birthday website running at http://localhost:${PORT}`);
});