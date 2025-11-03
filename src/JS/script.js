window.addEventListener('DOMContentLoaded', () => {
    const form__sum = document.querySelector('.form__sum'),
          form__outputSum = document.querySelector('.form__outputSum'),
          form__day = document.querySelector('.form__day'),
          form__outputDay = document.querySelector('.form__outputDay');
          

    const onRangeInputSum = () => {

        const value = form__sum.value;
        form__outputSum.value = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    };

    const onRangeInputDay = () => {
        const value = form__day.value;
        form__outputDay.value = value;
    };


    onRangeInputSum();
    onRangeInputDay();

    form__sum.addEventListener('input',onRangeInputSum);
    form__day.addEventListener('input',onRangeInputDay);

});