const row = document.querySelector('.row');


for (let number = 1; number <= 100; number++) {
    
    const colonna = document.createElement('div');
    colonna.classList.add('col');
    const card = document.createElement('div')
    card.classList.add('text-center','')
    if (number % 3 == 0 && number % 5 == 0)
        console.log('fizzbuzz')
        
    else if (number % 3 == 0)
        console.log('fizz')
        
    else if (number % 5 == 0)
        console.log('buzz')

    else (
        console.log(number)
    )
    
}
