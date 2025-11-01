window.addEventListener('DOMContentLoaded', () => {
    const promo__sum = document.querySelector('.promo__sum'),
          promo__outputSum = document.querySelector('.promo__outputSum'),
          promo__day = document.querySelector('.promo__day'),
          promo__outputDay = document.querySelector('.promo__outputDay');
          

    const onRangeInputSum = () => {
        const value = promo__sum.value;
        promo__outputSum.value = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    };

    const onRangeInputDay = () => {
        const value = promo__day.value;
        promo__outputDay.value = value;
    };


    onRangeInputSum();
    onRangeInputDay();

    promo__sum.addEventListener('input',onRangeInputSum);
    promo__day.addEventListener('input',onRangeInputDay);

});