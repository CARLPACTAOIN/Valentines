
window.onload = function() {
    // Hide the loading screen
    document.getElementById("loading-screen").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 500); // Smooth fade-out
};

let clicked = 0;
function nextbtn(){
    clicked++;
    const sec1 = document.getElementById("sec1");
    const sec2 = document.getElementById("sec2");
    const sec3 = document.getElementById("sec3");
    const sec4 = document.getElementById("sec4");
    sec1.style.transform = `translateX(-${clicked*100}%)`;
    sec2.style.transform = `translateX(-${clicked*100}%)`;
    sec3.style.transform = `translateX(-${clicked*100}%)`;
    sec4.style.transform = `translateX(-${clicked*100}%)`;
    
    
}
function prevbtn(){
    clicked--;
    const sec1 = document.getElementById("sec1");
    const sec2 = document.getElementById("sec2");
    const sec3 = document.getElementById("sec3");
    sec1.style.transform = `translateX(${clicked*(-100)}%)`;
    sec2.style.transform = `translateX(${clicked*(-100)}%)`;
    sec3.style.transform = `translateX(${clicked*(-100)}%)`;
    sec4.style.transform = `translateX(${clicked*(-100)}%)`;
}

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length;i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i>=0;i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;

    }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

function zoom(){
    var zoomIn = document.getElementById("canvas");
    var back = document.getElementById('backBtn');
    var background = document.getElementById('sec3');
    zoomIn.style.height = '100vh';
    zoomIn.style.width = '60vw';
    zoomIn.style.marginTop = '0';
    back.style.display = 'block';
   

}
function unZoom(){
    var zoomOut = document.getElementById("canvas");
    var back = document.getElementById('backBtn');
    back.style.display = 'none';
    zoomOut.style.height = '560px';
    zoomOut.style.width = '400px';
    zoomOut.style.marginTop = '8vh';
    
}

const button2 = document.getElementById("tricky-button-no");
let clicked1 = false; // Track if the button has been clicked

button2.addEventListener("click", () => {
    moveButton();
    clicked1 = true; // After first click, enable hover movement
});

button2.addEventListener("mouseenter", () => {
    if (clicked1) moveButton(); // Only move on hover if it has been clicked before
});

function moveButton() {
    const newX = Math.random() * (window.innerWidth - button2.clientWidth);
    const newY = Math.random() * (window.innerHeight - button2.clientHeight);

    button2.style.left = `${newX}px`;
    button2.style.bottom = `${newY}px`;
}

const celeb = document.querySelector('#tricky-button-yes');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

celeb.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['💕', '❤️', '🌹', '✨', '💫', '🌸'],
     }) .then(() => jsConfetti.addConfetti({
        emojis: ['💕', '❤️', '🌹', '✨', '💫', '🌸'],
     })) .then(() => alert("YEYYYYY💕, Thank you. See youuu. Mwuaaa"))
     .then(() => jsConfetti.addConfetti({
        emojis: ['💕', '❤️', '🌹', '✨', '💫', '🌸'],
     }))
     .then(() => jsConfetti.addConfetti({
        emojis: ['💕', '❤️', '🌹', '✨', '💫', '🌸'],
     }))
     .then(() => jsConfetti.addConfetti({
        emojis: ['💕', '❤️', '🌹', '✨', '💫', '🌸'],
     })).then(() => alert("Mao ra to HAHA, you can refresh the page or mag back kung gusto nimo balikan tong pics or letter"))
} )

const clickSound = new Audio("music/yey.mp3"); // Change this to your actual file
        clickSound.volume = 1;
        // Play sound on button click
        document.getElementById("tricky-button-yes").addEventListener("click", () => {
            clickSound.play();
        });

   
window.onload = function() {
    document.getElementById("loading-screen").style.display = "none"; // Hide loading
    document.getElementById("content").style.display = "block"; // Show content

    // Now, ask for autoplay permission
    document.addEventListener("click", () => {
        audio.play();
    }, { once: true });
};
