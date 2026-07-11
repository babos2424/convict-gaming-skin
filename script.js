const knife = document.getElementById("knife");
const glove = document.getElementById("glove");
const weapon = document.getElementById("weapon");
const agent = document.getElementById("agent");

const skinImage = document.getElementById("skinImage");
const skinName = document.getElementById("skinName");

const knives = [
"Karambit",
"M9 Bayonet",
"Butterfly Knife",
"Skeleton Knife",
"Talon Knife",
"Bayonet",
"Flip Knife",
"Nomad Knife",
"Stiletto Knife"
];

const gloves = [
"Sport Gloves",
"Driver Gloves",
"Moto Gloves",
"Specialist Gloves",
"Hand Wraps"
];

const weapons = [
"AK-47",
"M4A1-S",
"AWP",
"USP-S",
"Glock-18",
"Desert Eagle"
];

const agents = [
"Phoenix",
"Seal Team 6",
"Sir Bloody Miami",
"Cmdr. Mae",
"Number K"
];

function fill(select,data){
    data.forEach(item=>{
        let option=document.createElement("option");
        option.value=item;
        option.textContent=item;
        select.appendChild(option);
    });
}

fill(knife,knives);
fill(glove,gloves);
fill(weapon,weapons);
fill(agent,agents);

function update(){

    let value=
    knife.value||
    glove.value||
    weapon.value||
    agent.value;

    if(value==""){

        skinName.innerHTML="Skin Seçilmedi";

        skinImage.src="https://placehold.co/900x600?text=Convict+Gaming";

        return;

    }

    skinName.innerHTML=value;

    skinImage.src="https://placehold.co/900x600?text="+encodeURIComponent(value);

}

knife.onchange=update;
glove.onchange=update;
weapon.onchange=update;
agent.onchange=update;

document.getElementById("saveButton").onclick=function(){

    alert("Bu özellik yakında Supabase + CS2 sunucusuna bağlanacak.");

}
