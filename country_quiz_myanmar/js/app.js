
let no = 0;

function showCard(x){
    $('#new-capital').html(`<h5 class="card-title mb-4"> <p id="capital" class="fw-bold text-danger text-uppercase">${data[x].capital}</p> is the capital of </h5>`);
}

showCard(no);

$('.answer').on('click',function (e){
    e.target.parentElement.click();
});

let storeRightCountry = [];

$('.list-group-item').on('click',(e)=> {
    if(e.target.classList.contains('list-group-item')){
        e.target.classList.add('bg-dark');
        $('.list-group-item').addClass('disabled');
    }
    let currentCity = e.target.getAttribute('cap').toLowerCase();
    let shownCity = $('#capital').html().toLowerCase();
    no = no+1;
    $('#next').on('click',function (){
        if(no < 10){
            showCard(no);
            e.target.classList.remove('bg-dark');
            $('.list-group-item').removeClass('disabled');
        }else{
            $('#country-capital-con').addClass('d-none');
            $('#result-con').removeClass('d-none')};
    })
    if(currentCity == shownCity){
        storeRightCountry.push(currentCity);
        $('#point').html(storeRightCountry.length);
    }

});

$('#try-again-btn').on('click',function (){
    no = 0;
    $('#result-con').addClass('d-none');
    $('#country-capital-con').removeClass('d-none');
    showCard(no);
    $('.list-group-item').removeClass('bg-dark')
});