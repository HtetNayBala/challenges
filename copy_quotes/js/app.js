let quotes = document.querySelector('.quote');
let writer = document.querySelector('#writer');
let qCon = document.querySelector('#quote-container');


let storeQuotes;
let no = 0;

function getData(){

    let myQuotes = [...data.data].map(el=>el.quoteText);
    let myAuthor = [...data.data].map(el=>el.quoteAuthor);

    showQuotes(myQuotes[no]);
    writer.innerHTML = myAuthor[no];
    storeQuotes = [...myQuotes];

    $('#refresh').on('click',_=>{
        if(no<15){
            no = no+1;
            showQuotes(myQuotes[no]);
            writer.innerHTML = myAuthor[no];
        }else{
            no = 0;
        }

    });


}

getData();

function showQuotes(text){
    qCon.innerHTML = `<p class="quote mb-0 animate__animated animate__fadeIn">${text}</p>`;
}

let song = document.getElementById('song');



$('#play').on('click',_=>{song.play();$('#play').removeClass('animate__infinite')});
$('#pause').on('click',_=>{song.pause()});
$('#plus').on('click',_=>{
    if(song.volume<1){
        song.volume += 0.1;
    }else{
        alert('This is the Highest Volume!')
    }
});
$('#minus').on('click',_=>{
    if(song.volume>0) {
        song.volume = song.volume.toFixed(1)-0.1;
        console.log(song.volume)
    }else{
        alert('This is the Lowest Volume!')
    }
});

setTimeout(function (){
    console.log('Click Modal Btn')
    if($('#play').hasClass('animate__infinite')){
        document.getElementById('modal-btn').click();
    };
},5000);

$('#play-background').on('click',function (){
    $('#play').click();
    setTimeout(_=>{$('#close').click()},500)
})
