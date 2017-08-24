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
 for (let i=0;i<characters.length;i++) {
 	let item = `<img class="select" src=${characters[i].images}>`;
 	
 	console.log(item);
 	if (i % 2 === 0 ) {
		$('#characters').append(item);
	} else {  
		$('#rightCharacters').append(item);
  }
}


let char  = function () {
	return characters[i].images; 
};






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
	alert('char 1!');
} else if ( vPos >= v.parent().width() ) {
	alert('char 2');
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

















});


