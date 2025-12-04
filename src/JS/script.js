window.addEventListener('DOMContentLoaded', () => {

///////////// расчет суммы возврата///////////
    const form__sum = document.querySelectorAll('.form__sum'),
          form__outputSum = document.querySelectorAll('.form__outputSum'),
          form__day = document.querySelectorAll('.form__day'),
          form__outputDay = document.querySelectorAll('.form__outputDay'),
          form__infoCredit = document.querySelector('.form__infoCredit'),
          form__infoDate = document.querySelectorAll('.form__infoDate'),
          form__infoBack = document.querySelectorAll('.form__infoBack');


    function getZero (num){ // проверяет и добавляет ноль дате если дата меньше 10
        if (num > 0 && num < 10){
            return `0${num}`;
        } else{
            return num;
        }
    }
    function getDateBack(valueDay){ //получаем дату возврата
        const arrMonth = ["января","февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        const time = new Date();
        time.setDate(time.getDate() + valueDay);
        const days = time.getDate(),
                month = arrMonth[time.getMonth()],
                year = time.getFullYear();
        return{
            'days': days,
            'month': month,
            'year': year
        }
    }
    function onRangeInput(i){ //выводим значения в output
        const percent = 0.0066;
        let valueSum = parseInt(form__sum[i].value);
        form__outputSum[i].value = valueSum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
        let valueDay = parseInt(form__day[i].value);
        form__outputDay[i].value= valueDay;
        form__infoCredit.innerHTML = `${valueSum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}<span>руб.</span>`;
        const t = getDateBack(valueDay);
        form__infoDate[i].innerHTML = `${getZero(t.days)} ${t.month}, ${t.year}`;
        let moneyBack = Math.floor(valueSum + (valueSum*(valueDay*percent)));
        form__infoBack[i].innerHTML = `${moneyBack.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}<span>руб.</span>`;
    }   
    form__sum.forEach((item, i) => { //вешаем обработчик событий
        onRangeInput(i);
        item.addEventListener('input', () => {
            onRangeInput(i);
        });
    });
    form__day.forEach((item, i) => {//вешаем обработчик событий
        onRangeInput(i);
        item.addEventListener('input', () => {
            onRangeInput(i);
        });
    });

///////работа с модальными окнами//////
    const overlay = document.querySelector('.overlay'),
          btn = document.querySelector('.header__button'),
          close = document.querySelector('.login__close');

    btn.addEventListener('click', () => {
        overlay.style.display = "block";
    });
    close.addEventListener('click', () => {
        overlay.style.display = "none";
    });
});