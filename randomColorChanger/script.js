const button =document.getElementById("button");
const btn = () => {
    let val="0123456789ABCDEF";
    let map="#";

    for(let i = 0; i<6;i++){
        map+=val[Math.floor(Math.random()*16)];

    }return map;
};

console.log(btn());

function changeRandom(){
    document.body.style.backgroundColor=btn();
};

button.addEventListener("click", changeRandom);
