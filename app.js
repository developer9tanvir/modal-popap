// get elementes

const button = document.getElementById('apply');
const modal = document.querySelector('.tanvir-modal');
const close = document.querySelector('.close');



button.addEventListener('click', function(e){
    e.preventDefault();

    modal.classList.add('active');
    
});

console.log(close);

close.addEventListener('click', function(){

    modal.classList.remove('active');
});


modal.addEventListener('click', function(e){


    if( e.target == this ){
        modal.classList.remove('active');
    }

    
});