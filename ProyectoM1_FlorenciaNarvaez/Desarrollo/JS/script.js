const toast = document.getElementById("toast");
const generateButton = document.getElementById("generate-btn");
const paletteContainer = document.getElementById("palette-container");
const paletteSize = document.getElementById("palette-size");

let lockedColors = [];

function generateHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomPosition = Math.floor(Math.random() * 16);
        color += letters[randomPosition];
    }

    return color;
}

function generatePalette() {
    paletteContainer.innerHTML = "";

    const size = Number(paletteSize.value);

    for (let i = 0; i < size; i++) {let color;

if (lockedColors[i]) {
    color = lockedColors[i];
} else {
    color = generateHexColor();
}


      

        const colorCard = document.createElement("div");

        colorCard.classList.add("color");

        colorCard.style.backgroundColor = color;

        colorCard.textContent = color;
        const lockButton = document.createElement("button");
lockButton.textContent = lockedColors[i] ? "🔒" : "🔓";
lockButton.classList.add("lock-btn");

lockButton.addEventListener("click", (event) => {
    event.stopPropagation();

    if (lockedColors[i]) {
        lockedColors[i] = null;
        lockButton.textContent = "🔓";
    } else {
        lockedColors[i] = color;
        lockButton.textContent = "🔒";
    }
});

colorCard.appendChild(lockButton);


        colorCard.addEventListener("click", () => {

    navigator.clipboard.writeText(color);

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

});

        paletteContainer.appendChild(colorCard);
    }
}

generateButton.addEventListener("click", generatePalette);



