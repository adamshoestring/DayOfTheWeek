let carlos= new Date().getDay()
console.log(carlos) 

	switch(carlos){

	case 0:
			document.getElementById("dayOfTheWeek").innerHTML= "Hi there! Today is Sunday";
			break;
	case 1:
			document.getElementById("dayOfTheWeek").innerHTML= "Hi there! Today is Monday";
			break;
	case 2:
			document.getElementById("dayOfTheWeek").innerHtml= "Hi there! Today is Tuesday";
			break;
	case 3:
			document.getElementById("dayOfTheWeek").innerHTML+= "Hi there! Today is Wednesday";
			break;
	case 4:
			document.getElementById("dayOfTheWeek").innerHTML= "Hi there! Today is Thursday"
			break;
	case 5:

			document.getElementById("dayOfTheWeek").innerHTML= "Hi there! Today is Friday";
			break;
	case 6:

			document.getElementById("dayOfTheWeek").innerHTML= "Hi there! Today is Saturday";
			break;

}
