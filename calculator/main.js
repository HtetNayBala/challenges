import './style.scss'
import 'animate.css'

let moon = document.querySelector('#moon');
let darkWhite = document.querySelector('#dark-white');
let wholeBox = document.querySelector('#whole-box');
document.body.style.background = '#000000';

darkWhite.addEventListener('click',_=>{
    if(moon.classList.contains('bi-moon-fill')){
        moon.classList.remove('bi-moon-fill');
        moon.classList.add('bi-sun-fill');
        darkWhite.classList.add('text-end');
        document.body.style.background = '#ffffff';
        wholeBox.classList.add('bg-dark');
        sunAni();
    }else{
        moon.classList.add('bi-moon-fill');
        moon.classList.remove('bi-sun-fill');
        darkWhite.classList.remove('text-end');
        document.body.style.background = '#000000';
        wholeBox.classList.remove('bg-dark');
        moonAni();
    }
})

function sunAni(){
    let sun = document.querySelector('.bi-sun-fill');
    sun.classList.add('animate__fadeInLeft')
};

function moonAni(){
    let moon = document.querySelector('.bi-moon-fill');
    moon.classList.add('animate__fadeInRight')
}


let result = document.getElementById('result');
let keys = document.querySelectorAll('.key');
let calcKeys = document.querySelectorAll('.calc-keys');
let operators = ['+','-','*','/','%'];

let calcBtn = document.querySelector('#calc');
let resetBtn = document.querySelector('#reset');
let deleteBtn = document.querySelector('#del');
let fakeZero = document.getElementById('fake-zero');

keys.forEach(key=>{
    key.addEventListener('click',el=>{
        let keyHtml = el.target.innerHTML;
        console.log(result.innerHTML[result.innerHTML.length-1])
        if(keyHtml!='Del'){
            result.style.display = 'block';
            result.innerHTML += el.target.innerHTML;

            fakeZero.style.display = 'none';
        };

        calcKey();

    })
});

function calcKey(){
    calcKeys.forEach(el=>{
        if(operators.includes(result.innerHTML[result.innerHTML.length-1])){
            el.parentElement.style.pointerEvents = 'none';
        }else{
            el.parentElement.style.pointerEvents = 'auto';
        }
    })
};

function calc(){
    operators.forEach(operator=>{
        let rHtml = result.innerHTML;
        if(rHtml.includes(operator)){
            result.innerHTML = eval(result.innerHTML);
        }
    })
};

calcBtn.addEventListener('click',_=>calc());

resetBtn.addEventListener('click',_=>{
    result.innerHTML="";
    fakeZero.style.display = 'block';
    result.style.display = 'none';
});

deleteBtn.addEventListener('click',_=>{
    result.innerHTML = result.innerHTML.substring(result.innerHTML.length-1,0);
    calcKey();
    if(result.innerHTML.length==0){
        result.style.display = 'none';
        fakeZero.style.display = 'block';
    }
});




// let keyPad = document.querySelector(".keypad");
// let displayBox = document.querySelector('.display');
// let operators = ["+","-","*","/","%"];
//
// let filter = x => {
//     let current = displayBox.innerText;
//     let lastChar = current[current.length-1];
//
//     // 10လုံးထက်ကြော်မရိုက်စေချင်တာပါ
//     if(current.length >= 10){
//         return false;
//     }
//
//     if(current == "0" && x != "."){
//         clearLast()
//     }
//
//     if(operators.includes(x) && operators.includes(lastChar)){
//         return false;
//     }
//
//     return true;
// }
//
// let showInDisplay = x => {
//     if(filter(x)){
//         displayBox.innerText += x
//     }
// }
//
// let calc = _ => {
//     //နောက်ဆုံး char ဟာ operator ထည်းမက မဖြစ်မ တွက်မယ်လို့ စဥ်စားထားတာဖြစ်ပါတယ်
//     if(!operators.includes(displayBox.innerText[displayBox.innerText.length - 1])){
//         displayBox.innerText = eval(displayBox.innerText)
//     }
// }
//
// let clearAll = _ => displayBox.innerText = "";
//
// let clearLast = _ => displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length-1)
//
// // keypad သည် key များအားလုံးရဲ့ parent element ဖြစ်တဲ့အတွက် key တွေကိုနှိပ်တာဟာ keypad ကိုနှိပ်တာနဲ့ တူညီပါတယ်
// keyPad.addEventListener("click",_=>{
//     if(displayBox.innerText.length>10){
//         displayBox.style.fontSize = 30+"px";
//     }else if(displayBox.innerText.length>5){
//         displayBox.style.fontSize = 60+"px";
//     }
// })

// bugs to fixed
// 09 လို့ရိုက်ရင် 9 ပဲထွက်ရမယ်
// 0.5 လို့ ရိုက်လို့ရရမယ်
// 90++ လို့ ရိုက်ရင်နောက်ဆုံးက operator နှစ်ခါမလာသင့်ပါ

// Do yourself
// 9+ ဆိုပြီး calc ကိုခိုင်ရင် operator နဲ့ဆုံးနေတာဖြစ်တဲ့အတွက် မတွက်ပဲ console မှာ error တက်
// fontsize ကို ထိန်းရမယ်