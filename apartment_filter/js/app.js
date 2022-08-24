let header = document.getElementById('my-header');
let btnGroup = document.querySelector('#btn-group')
let dropdownItems = document.querySelectorAll('.dropdown-item');

function showApart(arr){
    $('.cards-container').empty();
    arr.forEach(function (el){
        $('.cards-container').append(`<div class="mb-4">
                                <div class="card border-0">
                                    <div class="card-body p-0">
                                        <img src="${el.img}" class="card-img-top" height="200" alt="">
                                        <div class="d-flex align-items-center justify-content-between mb-2 mt-1">
                                            <p class="text-black-50 mb-0">${el.some}</p>
                                            <article>
                                                <i class="bi bi-star-fill text-danger"></i>
                                                <span>${el.rate}</span>
                                            </article>
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center">
                                             <h6 class="mb-0">${el.description}</h6>
                                             <p class="mb-0 city text-uppercase fw-bold">${el.city}</p>
                                        </div>
                                    </div>
                               </div>
                            </div>`)


    });
};

showApart(data);

$('#all').on('click',()=>{
    showApart(data);
    header.style.display = 'block';

    btnGroup.style.width = 'auto';

    dropPeople.style.marginRight = '10px';

    $('#btn-group-con').removeClass('width-100');

    $('#search-btn').css('border-left','1px solid black');

    dropPeople.classList.remove('width-45');
    dropCon.classList.remove('width-45')

})

dropdownItems.forEach((di)=>{
    di.addEventListener('click',function (val){
        $('#over-people').html('');
        let valCity = val.target.innerHTML.toLowerCase();

        let equalCard = data.filter(function (el){
            let cities = el.city.toLowerCase();

            if(valCity.includes(cities)){
                return el;
            }
        });

        showApart(equalCard)
    })
});

let toFilter = document.getElementById('to-filter');
let toSearch = document.getElementById('to-search-city');
let dropPeople = document.querySelector('#dropdown-people');
let dropCon = document.querySelector('#dropdown-con');

toSearch.addEventListener('focus',function (){
    forSearch();
});

toSearch.addEventListener('click',function (){
    dropdown.show();
    toSearch.style.background = 'gray';
    toSearch.style.color = 'white'
})

toFilter.addEventListener('focus',function (){
    forSearch();
});

toFilter.addEventListener('click',function (){
    peopleDrop.show();
    toFilter.setAttribute('disabled','disabled')
});

let numberArray = [];
data.forEach(el=>{
     numberArray.push(el.number);
})


let searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click',()=>{
    peopleDrop.hide();
    toFilter.removeAttribute('disabled',)
    let totalNumberOfPeople = Number($('#child-no').html())+Number($('#adult-no').html());
    let cardsByNumber = data.filter((el)=>{

        let biggestNumber = Math.max(...numberArray);

        if(el.number>=totalNumberOfPeople){
            $('#over-people').html('');
            return el;
        }
        else if(totalNumberOfPeople>biggestNumber){
            $('#over-people').html(totalNumberOfPeople + ' people is more than that people can stay in these apartments.')
        }
    });
    showApart(cardsByNumber);
    $('#child-no').html(0);
    $('#adult-no').html(0);
});


//dropdown family

let aa = document.querySelector('.dropdown-city');
let peopleMenu = document.querySelector('#dropdown-people-menu');

let dropdown = new bootstrap.Dropdown(aa,function (){
    return aa;
})

let peopleDrop = new bootstrap.Dropdown(peopleMenu,function (){
    return peopleMenu;
})

aa.addEventListener('hide.bs.dropdown',function (){
    toSearch.style.background = 'white';
    toSearch.style.color = 'black'
});

function forSearch(){
    header.style.display = 'none';

    $('#btn-group-con').addClass('width-100');

    btnGroup.style.width = '100%';

    dropPeople.style.marginRight = '0px';

    dropPeople.classList.add('width-45');
    dropCon.classList.add('width-45')

    $('#search-btn').css('border-left',0)

    document.querySelector('#search-icon').style.fontSize = '18px'
}


$('#adult-minus').on('click',()=> {
    let adm = Number($('#adult-no').html());

    if(adm !== 0){
        adm = adm-1;
        Number($('#adult-no').html(adm))
    }
});

$('#adult-plus').on('click',()=> {
    let adm = Number($('#adult-no').html());

    adm = adm + 1;
    Number($('#adult-no').html(adm))
});


$('#child-minus').on('click',()=> {
    let cn = Number($('#child-no').html());

    if(cn !== 0){
        cn = cn-1;
        Number($('#child-no').html(cn))
    }
});

$('#child-plus').on('click',()=> {
    let cn = Number($('#child-no').html());

    cn = cn + 1;
    Number($('#child-no').html(cn))
})


