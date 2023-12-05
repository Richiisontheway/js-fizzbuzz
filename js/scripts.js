const row = document.querySelector('.row');


for (let number = 1; number <= 100; number++) {
    
    const colonna = document.createElement('div');
    
    colonna.classList.add('col');

    row.append(colonna);

    const card = document.createElement('div');

    card.classList.add('d-flex','justify-content-center','width','align-items-center','bg-info');

    colonna.append(card);

    if (number % 3 == 0 && number % 5 == 0){

        card.append('fizzbuzz')
        card.classList.add('bg-warning')
        console.log('fizzbuzz')
        
    }   

    else if (number % 3 == 0){

        card.append('fizz')
        card.classList.add('bg-primary')
        console.log('fizz')

    }
        
    else if (number % 5 == 0){

        card.append('buzz')
        card.classList.add('bg-danger')
        console.log('buzz')
    }

    else {

        card.append(number)
        console.log(number)

    }
    
}
