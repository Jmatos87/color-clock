var selector = function (sel){
	return document.querySelector(sel)
}

var colorCode = document.querySelector('#colorCode')
var timeCode = document.querySelector('#time')
var backColor = document.querySelector('#container')
var newBar = selector('#theBar')
var dateObj = new Date()
var overlay = selector('#overlay')


//Time

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    timeSplit = t.split(' ')
	realTime= timeSplit[0]
	timeCode.innerHTML = realTime
}
var myVar = setInterval(myTimer, 1000);

//Color

overlay.style.background



var getRandomColor = function () {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    overlay.style.background=color
    colorCode.innerHTML = overlay.style.background
    return overlay.style.background
}

setInterval(getRandomColor,1000)

//Bar





