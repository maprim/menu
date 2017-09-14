'use strict'

window.addEventListener('wheel', scroller);


function scroller(test){
 
 test = window.event;
 let itemActive = document.querySelector('li.active');

 let delta = test.deltaY;
 let next = itemActive.nextElementSibling;
 let prev = itemActive.previousElementSibling;

 if(next !== null && delta == 125){//check next elem exist

 	itemActive.classList.remove('active');
 	itemActive.nextElementSibling.classList.add('active');
 	let activeData = document.querySelector('li.active').dataset;
 	let showDiv = activeData.index;
 	document.querySelector('.show').classList.remove('show');
    document.getElementById(showDiv).classList.add('show');


 } 
 else if (delta == -125 && prev !== null){

	itemActive.classList.remove('active');
	itemActive.previousElementSibling.classList.add('active');
	let activeData = document.querySelector('li.active').dataset;
 	let showDiv = activeData.index;
 	document.querySelector('.show').classList.remove('show');
    document.getElementById(showDiv).classList.add('show');

 }

}
