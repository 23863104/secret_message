const messages = [
    "Hawwww firrr soch lo😱",
    "Dekho dekho firr nhi hatt rhe😒",
    "Hayeee main toh barbaad ho gya😫",
    "Dekhloo firr pkaa naa🙄",
    "Huhhhh zyada matt bno, you have no other option😏😂",
    "Sorry this button doesn't work anymore😚",
    "Hatt jaao abb tohhh😱",
    "Nhi hatt rhe mtlb lohh firr abb krte rho press😏",
    "I love you 1 ♥",
    "I love you 2 ♥",
    "I love you 3 ♥",
    "I love you 4 ♥",
    "I love you 5 ♥",
    "I love you 6 ♥",
    "I love you 7 ♥",
    "I love you 8 ♥",
    "I love you 9 ♥",
    "I love you 10 ♥",
    "I love you 11 ♥",
    "I love you 12 ♥",
    "I love you 13 ♥",
    "I love you 14 ♥",
    "I love you 15 ♥",
    "I love you 16 ♥",
    "I love you 17 ♥",
    "I love you 18 ♥",
    "I love you 19 ♥",
    "I love you 20 ♥",
    "I love you 21 ♥",
    "I love you 22 ♥",
    "I love you 23 ♥",
    "I love you 24 ♥",
    "I love you 25 ♥",
    "I love you 26 ♥",
    "I love you 27 ♥",
    "I love you 28 ♥",
    "I love you 29 ♥",
    "I love you 30 ♥",
    "I love you 31 ♥",
    "I love you 32 ♥",
    "I love you 33 ♥",
    "I love you 34 ♥",
    "I love you 35 ♥",
    "I love you 36 ♥",
    "I love you 37 ♥",
    "I love you 38 ♥",
    "I love you 39 ♥",
    "I love you 40 ♥",
    "I love you 41 ♥",
    "I love you 42 ♥",
    "I love you 43 ♥",
    "I love you 44 ♥",
    "I love you 45 ♥",
    "I love you 46 ♥",
    "I love you 47 ♥",
    "I love you 48 ♥",
    "I love you 49 ♥",
    "I love you 50 ♥",
    "I love you 51 ♥",
    "I love you 52 ♥",
    "I love you 53 ♥",
    "I love you 54 ♥",
    "I love you 55 ♥",
    "I love you 56 ♥",
    "I love you 57 ♥",
    "I love you 58 ♥",
    "I love you 59 ♥",
    "I love you 60 ♥",
    "I love you 61 ♥",
    "I love you 62 ♥",
    "I love you 63 ♥",
    "I love you 64 ♥",
    "I love you 65 ♥",
    "I love you 66 ♥",
    "I love you 67 ♥",
    "I love you 68 ♥",
    "I love you 69 ♥",
    "I love you 70 ♥",
    "I love you 71 ♥",
    "I love you 72 ♥",
    "I love you 73 ♥",
    "I love you 74 ♥",
    "I love you 75 ♥",
    "I love you 76 ♥",
    "I love you 77 ♥",
    "I love you 78 ♥",
    "I love you 79 ♥",
    "I love you 80 ♥",
    "I love you 81 ♥",
    "I love you 82 ♥",
    "I love you 83 ♥",
    "I love you 84 ♥",
    "I love you 85 ♥",
    "I love you 86 ♥",
    "I love you 87 ♥",
    "I love you 88 ♥",
    "I love you 89 ♥",
    "I love you 90 ♥",
    "I love you 91 ♥",
    "I love you 92 ♥",
    "I love you 93 ♥",
    "I love you 94 ♥",
    "I love you 95 ♥",
    "I love you 96 ♥",
    "I love you 97 ♥",
    "I love you 98 ♥",
    "I love you 99 ♥",
    "I love you 100 ♥",
    "Gonna go till infinity system can't handle that much so say YES chup chap🥹👉👈"
];

let currentMessageIndex = 0;

const messageElement = document.getElementById('message');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
    messageElement.textContent = "HEHE, I knew that😉💖";
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
    videoContainer.classList.remove('hidden');
});

noButton.addEventListener('click', () => {
    if (currentMessageIndex < messages.length) {
        messageElement.textContent = messages[currentMessageIndex];
        currentMessageIndex++;
    } else {
        currentMessageIndex = 0;
        messageElement.textContent = messages[currentMessageIndex];
    }
});
