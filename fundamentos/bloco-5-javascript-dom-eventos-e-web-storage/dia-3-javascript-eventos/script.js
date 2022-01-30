function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();


function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ul = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        const day = dezDaysList[i];
        const li = document.createElement('li');
        li.classList.add('day');

        if (day == 24 || day == 25 || day == 31) {
            li.classList.add('holiday')
        }
        switch (day) {
            case 14:
                li.classList.add('friday');
            case 11:
                li.classList.add('friday');
            case 18:
                li.classList.add('friday');
            case 25:
                li.classList.add('friday');
        }
        li.innerHTML = day;

        ul.appendChild(li);
    }
}

createDays();

function btnHoliday(Feriados) {
    const div = document.querySelector('.buttons-container');
    const btn = document.createElement('button');

    btn.classList.add('btn-holiday')
    btn.innerText = Feriados;

    div.appendChild(btn);

}

btnHoliday("Feriados");

//...................................................................//

function addColorHoliday() {
    const btnHoliday = document.querySelector('.btn-holiday');
    const holiday = document.querySelectorAll('.holiday');

    btnHoliday.addEventListener('click', function() {
        for(let i = 0; i < holiday.length; i++) {
            holiday[i].classList.toggle('holidayClass');
        }
    })

   

}

addColorHoliday()




//.............................................................//

function btnFryday(sextaFeira) {
    const div = document.querySelector('.buttons-container');
    const btn = document.createElement('button');

    btn.classList.add('btn-friday')
    btn.innerText = sextaFeira;

    div.appendChild(btn);

}

btnFryday("Sexta-feira")




function colorFryday() {

    const friday = document.querySelectorAll('.friday');
    const btnFryday = document.querySelector('.btn-friday');
  
    const textFriday = "Sexta-feira"
    for (let i = 0; i < friday.length; i++) {
        friday[i].innerText =  textFriday;
    }

}

function addColorFryday() {
    const btnFryday = document.querySelector('.btn-friday')

    btnFryday.addEventListener('click', colorFryday);
}

addColorFryday();

//.............................................//

function zoomDays() {
    const days = document.querySelectorAll('.day');

    for (let i = 0; i < days.length; i++) {
        days[i].addEventListener('mouseover', zoom);
        days[i].addEventListener('mouseout', zoomOut);
    }
}

function zoom(event) {
    event.target.style.transform = 'scale(1.8)';
}

function zoomOut(event) {
    event.target.style.transform = 'scale(1.0)';
}

zoomDays()

//.............................................//

function tasks(tarefa) {

    const text = document.createTextNode(tarefa)
    const span = document.createElement('span');
    const div = document.querySelector('.my-tasks')
    span.appendChild(text)
    div.appendChild(span)

}

tasks("Cozinhar")

//.........................................//

function divTalks(cor) {
    const divTalks = document.querySelector('.my-tasks');
    const div = document.createElement('div');
    div.classList.add('task')
    div.style.backgroundColor = cor;

    divTalks.appendChild(div)


}

divTalks("red")
divTalks("blue")


//........................................//

function setTalks() {
    const div = document.querySelectorAll('.task')
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('click', setTalksClass);
    }

}



function setTalksClass(event) {

    event.target.classList.toggle('selected');


}

setTalks();

//........................................//

function getColor() {
    const div = document.querySelectorAll('.task')
    const day = document.querySelectorAll('.day')

    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('click', function () {
            const color = div[i].style.backgroundColor;


            for (let j = 0; j < day.length; j++) {
                day[j].addEventListener('click', function () {
                    for (let k = 0; k < day.length; k++) {
                        if (day[k].style.color === color) {
                            day[k].addEventListener('click', function () {
                                day[k].style.color = 'rgb(119,119,119)'
                            })

                        }
                    }
                    day[j].style.color = color;
                })
            }
        });



    }

}

getColor();

//..........................................................//
function getInput() {
    const txt = document.querySelector('#task-input').value;
    const h3 = document.querySelector('.input-container h3')
    const p = document.createElement('p');

    p.innerHTML = txt;
    h3.appendChild(p)
    console.log(txt)
}

function setInput(){
    const btn = document.querySelector('#btn-add')
    const input = document.querySelector('#task-input')

    btn.addEventListener('click', getInput);
    input.addEventListener('keyup', function(e) {
        if(e.which == 13){
            if(input.value == ''){
                alert('campo vazio')
            }else{
                getInput();
            }
           
        }
    })
}

setInput();



const pixelBord = document.querySelector('#pixel-board');

let pixelImput = 5;
const pixelDefault = 5;

function bordSize(){
    const size = 40 * pixelImput;
    pixelBord.style.width = `${size}px`
    pixelBord.style.height = `${size}px`
    return
}

function createPixel(num){
    bordSize();
    let pixelN = num ** 2;
    console.log(pixelN);
    for(let i = 0; i < pixelN.length; i++){
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = "white";
        pixelBord.appendChild(pixel);
    } 
} 