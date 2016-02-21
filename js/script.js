var colorCode = document.querySelector('#colorCode')
var timeCode = document.querySelector('#time')
var backColor = document.querySelector('#container')

var dateObj = new Date()
var digits = dateObj.toTimeString()

timeSplit = digits.split(' ')
realTime= timeSplit[0]
timeCode.innerHTML = realTime

backColorNumber = backColor.style.background 
console.log(backColor.style.background)


// var colorShowing = false
// var change = function (){


// 	if (colorShowing=== false){
// 		colorCode.style.display = 'inline-block';
// 		timeCode.style.display = 'none'
// 		colorShowing = true
// 	}
// 	else {colorCode.style.display = 'none';
// 		  timeCode.style.display = 'inline-block'
// 		  colorShowing = false
// 	}	

// }

// timeCode.addEventListener('mouseover',change)
// colorCode.addEventListener('mouseout',change)


