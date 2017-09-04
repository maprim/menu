'use strict'

let item = document.querySelectorAll('li');
let divs = document.querySelectorAll('div')

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function(event) {

    let target = event.target;	
    let remover = document.querySelector('.active');


    let Switcher = function(elem){
	    remover.classList.remove('active'); 
	    target.classList.add('active');
	    if(target.classList.contains('one')){
	    	document.querySelector('#one').classList.toggle('hide');
	    }


    }
    
    Switcher(remover);

    
})

};		

