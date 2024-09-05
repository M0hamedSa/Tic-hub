function changeArrow(id) {
var y = document.getElementById(id);
if (y.className==='fa-solid fa-chevron-down fa-2xl chev-icon')
y.className="fa-solid fa-chevron-up fa-2xl chev-icon";
else{
y.className="fa-solid fa-chevron-down fa-2xl chev-icon"
}
}

function m(id){
m2(id);
}

function m2(id)
{
var x = document.getElementById(id).parentElement.id;

if (x.substring(0,2)==='ti')
{
collapseDiv(x);
}
else
{ 
m(x);
}
}

function collapseDiv(id){
    var y=document.getElementById(id)
    if (y.className==='ti hide-cont'){
        console.log(document.getElementById(id))
    document.getElementById(id).classList.remove('hide-cont');
    }
    else{
    document.getElementById(id).classList.add('hide-cont');
    }
    
    
    }
    

function changeIcon(id) {
var z=document.querySelector('.d-menu')
var x=document.querySelector('.navb-m-ol .d-menu')
var y = document.getElementById(id);
if (y.className==='fa-solid fa-caret-down fa-xl'){
    y.className="fa-solid fa-caret-up fa-xl";
    x.classList.add('d-menuShow');
    z.classList.add('d-menuShow');
}
    
else{
y.className="fa-solid fa-caret-down fa-xl";
x.classList.remove('d-menuShow');
z.classList.remove('d-menuShow');
}

}


function activeLi(id){
if(document.getElementById(id).classList.contains('activeli'))
{
document.getElementById(id).classList.remove('activeli')
}
else{
document.getElementById(id).classList.add('activeli')
}
}

function showNavbM(){
    document.querySelector('.navb-m-ol').classList.add('showNavb-m-ol');
}

function closeNavbM(){
    document.querySelector('.navb-m-ol').classList.remove('showNavb-m-ol');
}

function showBuyForm(){
document.querySelector('.buy-form').classList.add('showBuyForm');
document.querySelector('.overlay2').classList.add('showOverlay2');
}

function OP1(){
    console.log(document.querySelector('.sort1').classList.contains("op1"))
    if(document.querySelector('.sort1').classList.contains("op1"))
    document.querySelector('.sort1').classList.remove("op1")
    else{
        document.querySelector('.sort1').classList.add("op1")
    }
}

function activeBtn(b){
document.getElementById("b1").classList.remove('active');
document.getElementById("b2").classList.remove('active');
document.getElementById("b3").classList.remove('active');
document.getElementById("b4").classList.remove('active');
document.getElementById("b5").classList.remove('active');
document.getElementById(b).classList.add('active');
}


function showSellTicket(){
    document.querySelector('.sell-form').classList.remove('showSellform');
document.querySelector('.sell-ticket').classList.add('showSellTicket');
document.querySelector('.overlay2').classList.add('showOverlay2');
}

function showSellForm(){
document.querySelector('.sell-form').classList.add('showSellform');
document.querySelector('.overlay2').classList.add('showOverlay2');
}

function showModal(){
document.querySelector('.forget-form').classList.remove('showForget-form');
document.querySelector('.overlay').classList.add('showOverlay');
document.querySelector('.login-card').classList.add('showLogin-card');

}

function closeDiv(){
document.querySelector('.sell-form').classList.remove('showSellform');
document.querySelector('.overlay2').classList.remove('showOverlay2');
document.querySelector('.buy-form').classList.remove('showBuyForm');
document.querySelector('.sell-ticket').classList.remove('showSellTicket');

}

function overlay3(){
    {
document.querySelector('.changeP-form').classList.remove('showChangeForm');
document.querySelector('.delete-form').classList.remove('showDeleteForm');
document.querySelector('.overlay3').classList.remove('showOverlay3');
}
}

function overlay4(){
    document.querySelector('.check-form').classList.remove('showCheckForm');
    document.querySelector('.overlay').classList.remove('showOverlay');
    document.querySelector('.overlay4').classList.remove('showOverlay4');
}
function overlay6(){
    document.querySelector('.sell-conf').classList.remove('showSellConf');
    document.querySelector('.overlay6').classList.remove('showOverlay6');
}

function overlay5(){
    document.querySelector('.pass-reset').classList.remove('showPassReset');
    document.querySelector('.reset-conf').classList.remove('showResetConf');
    document.querySelector('.overlay5').classList.remove('showOverlay5');
    
}

function closeModal(){
document.querySelector('.login-card').classList.remove('showLogin-card');
document.querySelector('.overlay').classList.remove('showOverlay');
document.querySelector('.login-card').classList.remove('showLogin-card');
document.querySelector('.forget-form').classList.remove('showForget-form')
document.querySelector('.sell-form').classList.remove('showSell-form');

}

function showDeleteForm(){
document.querySelector('.delete-form').classList.add('showDeleteForm');
document.querySelector('.overlay3').classList.add('showOverlay3');
}
function showPassReset(){
document.querySelector('.pass-reset').classList.add('showPassReset');
document.querySelector('.overlay5').classList.add('showOverlay5');
}
function showSellConf(){
document.querySelector('.sell-ticket').classList.remove('showSellTicket');
document.querySelector('.overlay2').classList.remove('showOverlay2');
document.querySelector('.sell-conf').classList.add('showSellConf');
document.querySelector('.overlay6').classList.add('showOverlay6');
}
function showResetConf(){
document.querySelector('.pass-reset').classList.remove('showPassReset');
document.querySelector('.reset-conf').classList.add('showResetConf');
document.querySelector('.overlay5').classList.add('showOverlay5');
}

function showCheckForm(){
document.querySelector('.forget-form').classList.remove('showForget-form')
document.querySelector('.overlay').classList.remove('showOverlay')
document.querySelector('.check-form').classList.add('showCheckForm');
document.querySelector('.overlay4').classList.add('showOverlay4');
}
function showChangeForm(){
document.querySelector('.changeP-form').classList.add('showChangeForm');
document.querySelector('.overlay3').classList.add('showOverlay3');
}

function showblue(){
document.querySelector('.forget-form').classList.add('showForget-form');
document.querySelector('.login-card').classList.remove('showLogin-card');
}


function dB(b){
document.querySelector('.crds').classList.add('dbn');
document.querySelector('.crds2').classList.add('dbn');
document.querySelector('.crds3').classList.add('dbn');
document.querySelector('.crds4').classList.add('dbn');
document.querySelector('.crds5').classList.add('dbn');


document.querySelector(`.${b}`).classList.remove('dbn');
}
function dBlock(b){
    document.querySelector('.myTickets').classList.add('dbn');
    document.querySelector('.myTickets1').classList.add('dbn');

    
    document.querySelector(`.${b}`).classList.remove('dbn');
    }





function myFunction(id1,id2) {
        var x = document.getElementById(id1);
        var y = document.getElementById(id2);
        
        if (x.type === "password") {
        x.type = "text";
        y.className="fa-regular fa-eye-slash fa-xl";
        y.style="color:#D83F87"
        } else {
        x.type = "password";
        y.className="fa-regular fa-eye fa-xl";
        y.style="color:#9C9C9C"
        }
    }




var password = document.getElementById("pwd1")
, confirm_password = document.getElementById("pwd2");
function validatePassword(){
    if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
    confirm_password.setCustomValidity('');
    }
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
    }





var myInput = document.getElementById("pwd1");
// When the user starts to type something inside the password field
myInput.onkeyup = function() {
// Validate lowercase letters
var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {  
letter.classList.remove("invalid");
letter.classList.add("valid");
} else {
letter.classList.remove("valid");
letter.classList.add("invalid");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {  
capital.classList.remove("invalid");
capital.classList.add("valid");
} else {
capital.classList.remove("valid");
capital.classList.add("invalid");
}

// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {  
number.classList.remove("invalid");
number.classList.add("valid");
} else {
number.classList.remove("valid");
number.classList.add("invalid");
}

// Validate length
if(myInput.value.length >= 8) {
length.classList.remove("invalid");
length.classList.add("valid");
} else {
length.classList.remove("valid");
length.classList.add("invalid");
}
}
