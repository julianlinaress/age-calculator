function isDateValid(dateStr){
    return !isNaN(new Date(dateStr));
}

function getTotalDays(date1, date2){
    const differenceMs = date2.getTime() - date1.getTime();
    return Math.ceil(differenceMs / (1000 * 3600 * 24));
}



function formValidation(){
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const inputs = document.querySelectorAll('input');
    const labels = document.querySelectorAll('label');

    const todayDate = new Date();
    const dateString = new Date(`${year}/${month}/${day}`);
    
    console.log(dateString);

    if (isDateValid(dateString)){
        inputs.forEach(input => {
            input.classList.remove('error-input')
        });
        labels.forEach(label => {
            label.classList.remove('error-text')
        });
        document.getElementById('error-text').innerHTML = ''

        const totalDays = getTotalDays(dateString, todayDate);
        
        const resultYear = Math.floor(totalDays / 365)
        document.getElementById('result-years').innerHTML = resultYear;

        const resultMonths = Math.floor((totalDays - (resultYear * 365))/ 30);
        document.getElementById('result-months').innerHTML = resultMonths;

        const resultDays = Math.floor(totalDays - (resultYear * 365) - (resultMonths * 30) );
        document.getElementById('result-days').innerHTML = resultDays;

    }
    else{
        document.getElementById('error-text').innerHTML = 'Must be a valid date'
        inputs.forEach(input => {
            input.classList.add('error-input')
            
        });
        labels.forEach(label => {
            label.classList.add('error-text')
        });
    }

}