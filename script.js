const heartContainer = document.getElementById("floating-hearts");
const surprise = document.getElementById("surprise");
const step1Button = document.getElementById("step1-btn");
const step2Container = document.getElementById("step2-container");
const step3Button = document.getElementById("step3-btn");
const gallery = document.getElementById("step4-gallery");
const finale = document.getElementById("step5-text");
const restartButton = document.getElementById("restart-btn");
const progressLabel = document.getElementById("progress-label");
const progressSteps = Array.from(document.querySelectorAll(".progress-step"));
const photoDialog = document.querySelector(".photo-dialog");
const dialogImage = document.querySelector(".dialog-image");
const dialogCaption = document.querySelector(".dialog-caption");
const dialogCloseButton = document.querySelector(".dialog-close");

const timers = new Set();
let currentStage = 1;

function schedule(callback, delay) {
    const timer = window.setTimeout(() => {
        timers.delete(timer);
        callback();
    }, delay);
    timers.add(timer);
}

function clearTimers() {
    timers.forEach(window.clearTimeout);
    timers.clear();
}

function show(element) {
    element.classList.remove("hidden");
    element.classList.add("visible");
}

function hide(element) {
    element.classList.remove("visible");
    element.classList.add("hidden");
}

function setStage(stage) {
    currentStage = stage;
    progressLabel.innerHTML = `${String(stage).padStart(2, "0")} <span>/</span> 05`;

    progressSteps.forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.toggle("is-complete", stepNumber < stage);
        step.classList.toggle("is-current", stepNumber === stage);

        if (stepNumber === stage) {
            step.setAttribute("aria-current", "step");
        } else {
            step.removeAttribute("aria-current");
        }
    });
}

function createFloatingHearts() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const heartCount = window.matchMedia("(max-width: 700px)").matches ? 10 : 18;
    const heartSVG = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    `;
    const hearts = document.createDocumentFragment();

    for (let index = 0; index < heartCount; index += 1) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = heartSVG;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.setProperty("--heart-duration", `${Math.random() * 12 + 12}s`);
        heart.style.setProperty("--heart-delay", `${Math.random() * -22}s`);
        heart.style.setProperty("--heart-size", `${Math.random() * 15 + 13}px`);
        heart.style.setProperty("--heart-drift", `${Math.random() * 70 - 35}px`);
        hearts.appendChild(heart);
    }

    heartContainer.appendChild(hearts);
}

function startSurprise() {
    if (currentStage !== 1) {
        return;
    }

    step1Button.disabled = true;
    hide(step1Button);
    schedule(() => {
        setStage(2);
        show(step2Container);

        schedule(() => {
            setStage(3);
            show(step3Button);
        }, 3000);
    }, 1200);
}

function showGallery() {
    if (currentStage !== 3) {
        return;
    }

    clearTimers();
    gallery.classList.remove("is-finale");
    hide(step2Container);
    schedule(() => {
        setStage(4);
        show(gallery);

        schedule(() => {
            setStage(5);
            schedule(() => {
                gallery.classList.add("is-finale");
                show(finale);
                show(restartButton);
            }, 5500);
        }, 1500);
    }, 1200);
}

function restartSurprise() {
    clearTimers();
    step1Button.disabled = false;
    hide(step2Container);
    hide(step3Button);
    hide(gallery);
    hide(finale);
    hide(restartButton);
    setStage(1);

    window.requestAnimationFrame(() => {
        show(step1Button);
        step1Button.focus();
    });
}

function openPhoto(card) {
    const image = card.querySelector("img");

    if (!image || !image.naturalWidth) {
        return;
    }

    dialogImage.src = image.currentSrc || image.src;
    dialogImage.alt = image.alt;
    dialogCaption.textContent = card.dataset.caption || "";
    photoDialog.showModal();
}

step1Button.addEventListener("click", startSurprise);
step3Button.addEventListener("click", showGallery);
restartButton.addEventListener("click", restartSurprise);

document.querySelectorAll(".photo-card").forEach((card) => {
    const image = card.querySelector("img");

    image.addEventListener("error", () => {
        card.classList.add("is-missing");
        card.disabled = true;
    });

    card.addEventListener("click", () => openPhoto(card));
});

dialogCloseButton.addEventListener("click", () => photoDialog.close());
photoDialog.addEventListener("click", (event) => {
    if (event.target === photoDialog) {
        photoDialog.close();
    }
});

document.querySelector(".wordmark").addEventListener("click", (event) => {
    event.preventDefault();
    restartSurprise();
});

createFloatingHearts();
