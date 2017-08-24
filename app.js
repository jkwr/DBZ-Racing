$(document).ready(function () {


let characters = [
{
	'name': 'Boo',  		
	'images': 'imgs/boo.jpg',

},
{
	'name': 'Cell',
	'images': 'imgs/Cell.png', 

},
{
	'name': 'frieza',
	'images': 'imgs/frieza.png', 
},
{
	'name': 'Gohan',  		
	'images': 'imgs/Gohan.png',

},
{
	'name': 'Goku',
	'images': 'imgs/goku.png', 

},
{
	'name': 'Krillin',
	'images': 'imgs/krillin.png', 
},
{
	'name': 'Piccolo',
	'images': 'imgs/piccolo.png', 

},
{
	'name': 'Vegeta',
	'images': 'imgs/Vegeta.png', 
},
{
	'name': 'Master Roshi',
	'images': 'imgs/masterroshi.png', 
},
{
	'name': 'Trunks',
	'images': 'imgs/gotenks.png', 
},
];

let rnd1 , rnd2, dbz1, dbz2, item;
// My loop used for my characters object 
 for ( let i=0;i<characters.length;i++ ) {
	//gives us a random number  
	 rnd1 = Math.floor((Math.random()*i)+1);
	 rnd2 = Math.floor((Math.random()*i)+1);
	//this sets the varaible to the correct source to be random 
 	 dbz1 = `<div id="char1" src=${characters[rnd1].images}>`;	
 	 dbz2 = `<div id="char2" src=${characters[rnd2].images}>`;

 	$('#char1').attr('src', $(`${dbz1}`).attr('src'));
 	$('#char2').attr('src', $(`${dbz2}`).attr('src'));

 	 item = `<img class="select" src=${characters[i].images}>`;
 	console.log(item);
 	if (i % 2 === 0 ) {
		$('#characters').append(item);
	} else {  
		$('#rightCharacters').append(item);
  }
}



//Initial state for characters
let char1Turn  = false ;
let char2Turn  = false; 
let startBattle = false; 


$(document).keydown(function (e) {
let g = $('#char1');
let v = $('#char2');
let gPos = g.position().left + g.width();
let vPos = v.position().left + v.width();


// This is saying if a person has a length position + width is equal to total width if not allow to move right  
if (  gPos <= g.parent().width() && vPos <= v.parent().width() ) {
//Controlling which player moves 
switch (e.which) {
	case 81: // Will move Gohan
	$('#char1').finish().animate( {
		left: '+=10px'		 	
	});
	break;
	case 39: // Will move Vegeta
	$('#char2').finish().animate( {
		left: '+=10px'
	});
 }
} else if ( gPos >= g.parent().width() ) {
	$('#balls').animate({
		'width':'400px'
	});
	alert(characters[rnd1].name + " Won!");
} else if ( vPos >= v.parent().width() ) {
	$('#balls').animate({
		'width':'400px'
	});
	alert(characters[rnd2].images + " Won!");
 }
});

$('#char1Select').on('click', function () {
		char1Turn   = true;
		char2Turn   = false;
		startBattle = false;
});
$('#char2Select').on('click', function () {
		char1Turn   = false;
		char2Turn   = true;
		startBattle = false;
});
$('#startBattle').on('click', function () {
		char1Turn   = false;
		char2Turn   = false;
		startBattle = true;
});


$('.select').on('click', function () {
	if(char1Turn) {
		$('#char1').attr('src', $(this).attr('src'));
	} else if (char2Turn) {
		$('#char2').attr('src', $(this).attr('src'));
	}
	
	
});


// animation 


$(function() {

    let ball = $("#balls");
    rotate(4500);

        function rotate(degree) {    
  			ball.css({ 'transform': 'rotate(' + degree + 'deg)'});
        }

});


      // // For webkit browsers: e.g. Chrome
      //      $rot.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
      // // For Mozilla browser: e.g. Firefox
      //      $rot.css({ '-moz-transform': 'rotate(' + degree + 'deg)'} );




});


