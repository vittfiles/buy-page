//style for the inputs
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
function update(){
    let total = 19;
    let product = document.getElementsByClassName("data-product");
    let totalPoduct = product.length;
    for ( let i = 0; i < totalPoduct ; i++){
        let input = product[i].getElementsByTagName("input")[0].value;
        let price = product[i].getElementsByClassName("price")[0].value;
        total += parseFloat(price) * parseInt(input);
    }
    document.getElementById("total-out").value = "$" + total.toFixed(2);
}
//automatically calculate the total to pay
function add(event){
    let total = event.target.parentElement.getElementsByTagName("input")[0].value;
    event.target.parentElement.getElementsByTagName("input")[0].value = parseInt(total) + 1;
    update();
}
function quit(event){
    let total = event.target.parentElement.getElementsByTagName("input")[0].value;
    let num = parseInt(total);
    if( total > 1){
        event.target.parentElement.getElementsByTagName("input")[0].value = num - 1;
    }
    update();
}
//save or not the info of the formulary
var saved = false;
function save_info(event){
    if(saved){
        saved = false;
        let divs = document.getElementById("form").getElementsByTagName("input");
        let total = divs.length;
        for ( let i = 0; i < total ; i++){
            let div = divs[i];
            div.setAttribute("autocomplete", "nope");
        }
        document.getElementById("form").setAttribute("autocomplete", "nope");
    }else{
        saved = true;
        let divs = document.getElementById("form").getElementsByTagName("input");
        let total = divs.length;
        for ( let i = 0; i < total ; i++){
            let div = divs[i];
            div.setAttribute("autocomplete", "on");
        }
        document.getElementById("form").setAttribute("autocomplete", "on");
    }
}
function form_validate(event){
    alert("success");
    event.preventDefault();
}
function init(){
    let divs = document.getElementsByClassName("selected");
    let total = divs.length;
    for ( let i = 0; i < total ; i++){
        let div = divs[i];
        div.addEventListener("focusin",orange);
        div.addEventListener("focusout",gray);
    }
    let plusBots = document.getElementsByClassName("plus");
    let totalplus = plusBots.length;
    for ( let i = 0; i < totalplus ; i++){
        let plus = plusBots[i];
        plus.addEventListener("click",add);
    }
    let minusBots = document.getElementsByClassName("minus");
    let totalminus = minusBots.length;
    for ( let i = 0; i < totalminus ; i++){
        let minus = minusBots[i];
        minus.addEventListener("click",quit);
    }
    let save = document.getElementById("save");
    save.addEventListener("click",save_info);
    document.getElementById("form").addEventListener("submit",form_validate);
}
document.addEventListener("DOMContentLoaded",init);