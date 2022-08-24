let quotes = document.querySelector('.quote');
let writer = document.querySelector('#writer');
let qCon = document.querySelector('#quote-container');


let storeQuotes;

function getData(){
    let ranNum = Math.floor(Math.random()*16);

    let myQuotes = [...data.data].map(el=>el.quoteText);
    let myAuthor = [...data.data].map(el=>el.quoteAuthor);

    showQuotes(myQuotes[ranNum]);
    writer.innerHTML = myAuthor[ranNum];

    storeQuotes = [myQuotes[ranNum]];

    [...data.data].forEach(function (el){
        if(el.quoteAuthor==writer.innerHTML){

            writer.addEventListener('click',function (){
                if(storeQuotes.includes(el.quoteText)){
                    console.log('Par tal')
                }else{
                    showQuotes(el.quoteText);
                    storeQuotes.push(el.quoteText);
                }
            })
        }
    });
}

getData();

function showQuotes(text){
    let p = document.createElement('p');
    let textNode = document.createTextNode(text);

    p.classList.add('quote');
    p.append(textNode);

    qCon.append(p);
}

