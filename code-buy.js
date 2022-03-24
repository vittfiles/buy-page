function gray(event){
    event.target.parentElement.style.border = "2px solid #828282";
    event.target.parentElement.getElementsByClassName("icon-orange")[0].style.display = "none";
    event.target.parentElement.getElementsByClassName("icon")[0].style.display = "inline-block";
}
function orange(event){
    event.target.parentElement.style.border = "2px solid var(--orange-button)";
    event.target.parentElement.getElementsByClassName("icon-orange")[0].style.display = "inline-block";
    event.target.parentElement.getElementsByClassName("icon")[0].style.display = "none";
}
function init(){
    let divs = document.getElementsByClassName("selected");
    let total = divs.length;
    for ( let i = 0; i < total ; i++){
        let div = divs[i];
        div.addEventListener("focusin",orange);
        div.addEventListener("focusout",gray);
    }
    console.log("hola mundo");
}
document.addEventListener("load",init());