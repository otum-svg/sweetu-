let yesSize = 1;
let clickCount = 0;

const phrases = [
    "No",
    "Are you sure? 🥺",
    "Wait... think about it!",
    "I'll give you chocolate! 🍫",
    "Really? Look how big the Yes is!",
    "Okay, you're just being mean now! 😂",
    "I'm gonna cry... 😭",
    "JUST CLICK YES ALREADY!",
    "The button is huge now, you can't miss it!"
];

const gifs = [
    "1.gif",
    "1.gif",
    "mochi-cat-mad-cat.gif",
    "cat-crying-cat-crying-meme.webp",
    "cute-cat.gif",
    "cute-cat.gif",
    "cute-cat.gif",
    "cute-cat.gif"
];

const lovingWishes = [
    "You are the light of my life! ✨",
    "Every moment with you is a treasure! 💎",
    "My heart beats only for you! 💓",
    "You make me the happiest person alive! 😊",
    "I love you more than words can say! 💕",
    "You're my everything! 🌟",
    "Forever and always yours! ♾️",
    "You complete me! 🧩",
    "My love for you grows stronger every day! 📈💖"
];

const themes = [
    { primary: '#ff85a1', soft: '#ffe5ec', deep: '#ff4d6d', emoji: '🌸' },
    { primary: '#87CEEB', soft: '#E0F6FF', deep: '#4682B4', emoji: '💙' },
    { primary: '#98FB98', soft: '#F0FFF0', deep: '#32CD32', emoji: '💚' },
    { primary: '#DDA0DD', soft: '#F8F0FF', deep: '#BA55D3', emoji: '💜' },
    { primary: '#FFD700', soft: '#FFFFE0', deep: '#FFA500', emoji: '💛' }
];

let themeIndex = 0;

function handleNo() {
    clickCount++;

    yesSize += 0.5;
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.style.transform = `scale(${yesSize})`;
    yesBtn.style.boxShadow = `0 0 ${clickCount * 10}px rgba(255, 77, 109, 0.5)`;

    if (clickCount >= 7) {
        yesBtn.style.position = 'fixed';
        yesBtn.style.top = '0';
        yesBtn.style.left = '0';
        yesBtn.style.width = '100vw';
        yesBtn.style.height = '100vh';
        yesBtn.style.zIndex = '9999';
        yesBtn.style.borderRadius = '0';
        yesBtn.style.fontSize = window.innerWidth < 600 ? '30px' : '50px';
        yesBtn.innerText = 'YES!';
        // Hide the no button
        const noBtn = document.getElementById('noBtn');
        noBtn.style.display = 'none';
    }

    const noBtn = document.getElementById('noBtn');
    noBtn.innerText = phrases[Math.min(clickCount, phrases.length - 1)];
    const newFontSize = Math.max(14, 18 - clickCount);
    noBtn.style.fontSize = `${newFontSize}px`;
    const basePaddingX = 30;
    const basePaddingY = 15;
    const extraPadding = clickCount * 5;
    noBtn.style.padding = `${basePaddingY + extraPadding}px ${basePaddingX + extraPadding * 2}px`;

    const gif = document.getElementById('display-gif');
    gif.src = gifs[clickCount % gifs.length];

    const x = (Math.random() * 40 - 20) + 10;
    const y = (Math.random() * 40 - 20) - 10;
    noBtn.style.transform += ` translate(${x}px, ${y}px)`;
}

function celebrate() {
    document.getElementById('ask-content').classList.add('hidden');
    document.getElementById('success-content').classList.remove('hidden');
    document.getElementById('card').style.borderColor = "#ff4d6d";

    for(let i=0; i<50; i++) {
        setTimeout(createHeart, i * 100);
    }

    const wishesContainer = document.getElementById('wishes-container');
    lovingWishes.forEach((wish, index) => {
        setTimeout(() => {
            const wishDiv = document.createElement('div');
            wishDiv.classList.add('wish-item');
            wishDiv.textContent = wish;
            wishesContainer.appendChild(wishDiv);
        }, index * 500);
    });

    let themeChangeCount = 0;
    const themeInterval = setInterval(() => {
        themeIndex = (themeIndex + 1) % themes.length;
        const theme = themes[themeIndex];
        document.documentElement.style.setProperty('--primary-pink', theme.primary);
        document.documentElement.style.setProperty('--soft-pink', theme.soft);
        document.documentElement.style.setProperty('--deep-rose', theme.deep);

        const hearts = document.querySelectorAll('.floating-heart');
        hearts.forEach(heart => heart.innerHTML = theme.emoji);

        const title = document.getElementById('success-title');
        title.innerHTML = title.textContent.replace('♡', theme.emoji);

        themeChangeCount++;
        if (themeChangeCount >= themes.length) {
            clearInterval(themeInterval);
        }
    }, 2000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '🌸';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.opacity = '1';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}

function showNext() {
    document.getElementById('success-content').classList.add('hidden');
    document.getElementById('next-content').classList.remove('hidden');
}