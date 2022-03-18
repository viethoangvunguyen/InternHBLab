const btnWeekends = document.getElementById('btn__weekends');

var flag_weekends = false;

const daysSide = document.querySelector('.calendar__days')
const row1 = document.querySelector('#calendar__row1');
const row2 = document.querySelector('#calendar__row2');
const row3 = document.querySelector('#calendar__row3');
const row4 = document.querySelector('#calendar__row4');
const row5 = document.querySelector('#calendar__row5');

btnWeekends.onclick = function(){
    flag_weekends = !flag_weekends
    if (flag_weekends) {
        const saturday = document.createElement("li");
        saturday.innerHTML = 'Saturday'
        daysSide.appendChild(saturday);
    
        const sunday = document.createElement("li");
        sunday.innerHTML = 'Sunday'
        daysSide.appendChild(sunday);

        const five = document.createElement("li");
        five.innerHTML = '5';
        row1.appendChild(five);

        const six = document.createElement("li");
        six.innerHTML = '6';
        row1.appendChild(six);

        const muoihai = document.createElement("li");
        muoihai.innerHTML = '12';
        row2.appendChild(muoihai);

        const muoiba = document.createElement("li");
        muoiba.innerHTML = '13';
        row2.appendChild(muoiba);

        const muoichin = document.createElement("li");
        muoichin.innerHTML = '19';
        row3.appendChild(muoichin);

        const haimuoi = document.createElement("li");
        haimuoi.innerHTML = '20';
        row3.appendChild(haimuoi);

        const haisau = document.createElement("li");
        haisau.innerHTML = '26';
        row4.appendChild(haisau);

        const haibay = document.createElement("li");
        haibay.innerHTML = '27';
        row4.appendChild(haibay);

        const ba = document.createElement("li");
        ba.innerHTML = '3';
        row5.appendChild(ba);

        const bon = document.createElement("li");
        bon.innerHTML = '4';
        row5.appendChild(bon);

    }  else {
        if (daysSide) {
            daysSide.removeChild(daysSide.lastChild);
            daysSide.removeChild(daysSide.lastChild);
            row1.removeChild(row1.lastChild);
            row1.removeChild(row1.lastChild);
            row2.removeChild(row2.lastChild);
            row2.removeChild(row2.lastChild);
            row3.removeChild(row3.lastChild);
            row3.removeChild(row3.lastChild);
            row4.removeChild(row4.lastChild);
            row4.removeChild(row4.lastChild);
            row5.removeChild(row5.lastChild);
            row5.removeChild(row5.lastChild);
        }
    }
}

//button add tasks

const btnAddtask = document.getElementById('btn__addtask');
const add_task = document.querySelector('.add__task');

var flag_addtask = false;
btnAddtask.onclick = function(){
    flag_addtask = !flag_addtask;
    if(flag_addtask){
        add_task.style.display = 'block';
    }
    else {
        add_task.style.display = 'none';
    }
}

//get value date in popup

const date = document.querySelector("input[name ='trip-start']");
const arr = []

date.onchange = function(e){
    const side = document.querySelectorAll("li");
    date.value = e.target.value;
    let str  = date.value.split("-");
    for( var i = 0; i < side.length; i++){
        if(parseInt(side[i].innerHTML) == parseInt(str[2]) ){
            arr.push(str[2]);
            localStorage.setItem('arr', arr)
            side[i].innerHTML = side[i].innerHTML + '<p>Done</p>'
        }
    }
}

