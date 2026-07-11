const knife = document.getElementById("knife");
const glove = document.getElementById("glove");
const weapon = document.getElementById("weapon");
const title = document.getElementById("title");
const preview = document.getElementById("preview");

const images = {
    "Karambit":"https://placehold.co/700x400/202020/ffffff?text=Karambit",
    "Butterfly Knife":"https://placehold.co/700x400/202020/ffffff?text=Butterfly",
    "M9 Bayonet":"https://placehold.co/700x400/202020/ffffff?text=M9+Bayonet",
    "Skeleton Knife":"https://placehold.co/700x400/202020/ffffff?text=Skeleton",
    "Talon Knife":"https://placehold.co/700x400/202020/ffffff?text=Talon",

    "Sport Gloves":"https://placehold.co/700x400/202020/ffffff?text=Sport+Gloves",
    "Driver Gloves":"https://placehold.co/700x400/202020/ffffff?text=Driver+Gloves",
    "Specialist Gloves":"https://placehold.co/700x400/202020/ffffff?text=Specialist+Gloves",
    "Moto Gloves":"https://placehold.co/700x400/202020/ffffff?text=Moto+Gloves",

    "AK-47":"https://placehold.co/700x400/202020/ffffff?text=AK-47",
    "M4A1-S":"https://placehold.co/700x400/202020/ffffff?text=M4A1-S",
    "AWP":"https://placehold.co/700x400/202020/ffffff?text=AWP",
    "Desert Eagle":"https://placehold.co/700x400/202020/ffffff?text=Desert+Eagle"
};

function updatePreview(value){
    title.textContent = value;
    preview.src = images[value];
}

knife.onchange = () => updatePreview(knife.value);
glove.onchange = () => updatePreview(glove.value);
weapon.onchange = () => updatePreview(weapon.value);

document.querySelector(".save").onclick = () => {
    alert("Skinler başarıyla kaydedildi!");
};
