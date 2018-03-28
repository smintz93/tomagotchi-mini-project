console.log("Linked")

let time = 50;

// This happens every refresh // 


// START OF GAME. TURNING OFF WHILE TESTING

// const enterName = function(name){

// 	const startName = window.prompt("What would you like to name your Dino?")

// 	const newH2 = $("<h2>")

// 	newH2.appendTo("header")
 
// 	newH2.text("Hello " + startName +"!")

// }

// enterName();



// window.alert("Click 'Ok' to get started")





class Tomogatochi {
	constructor(name, hunger, sleepiness, boredom, age) {
		this.name = name;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;

	}
	


};



const dino = () => {
	const img = $("<img>")
	img.appendTo($("body"))
	img.attr("src", "https://i.pinimg.com/originals/3f/6d/fb/3f6dfbd77eefe0287e2539f87430fc52.png")
}





const tomogatochiOne = new Tomogatochi("Sam", 7, 7, 7, 0, dino())
console.log(tomogatochiOne)
 
const updateList = function(){

	$("#hunger").text(" Hunger:" + tomogatochiOne.hunger);
	$("#sleepiness").text(" Sleepiness:" + tomogatochiOne.sleepiness);
	$("#boredom").text(" Boredom:" + tomogatochiOne.boredom);
	$("#age").text(" Age:" + tomogatochiOne.age);


}



$("#feed").on("click", (e) => {

	tomogatochiOne.hunger--

	// setTimer();
	updateList();
})



$("#sleep").on("click", (e) => {

	tomogatochiOne.sleepiness--

	// setTimer();
	updateList();

})

$("#play").on("click", (e) => {

	tomogatochiOne.boredom--
	// setTimer();
	updateList();
})



const setTimer = function() {
	
	const timer = setInterval(() => {
		time --

		if(time === 40) {
			tomogatochiOne.hunger++
			tomogatochiOne.sleepiness++
			tomogatochiOne.boredom++
			tomogatochiOne.age++;
			updateList();
		} 

		else if(time === 30) {
			tomogatochiOne.hunger++
			tomogatochiOne.sleepiness++
			tomogatochiOne.boredom++
			tomogatochiOne.age++;
			updateList();

		}	else if(time === 25) {
			tomogatochiOne.hunger++
			tomogatochiOne.sleepiness++
			tomogatochiOne.boredom++
			tomogatochiOne.age++;
			updateList();
		} else if(time === 15){
			tomogatochiOne.hunger++
			tomogatochiOne.sleepiness++
			tomogatochiOne.boredom++
			tomogatochiOne.age++;
			updateList();
		}

		else if(time === 0) {
			tomogatochiOne.age++;
			$("#age").text();
			updateList();



			clearInterval(timer)
			time = 50;

		} 

		$("#timer").text("Timer: " + time + "s")


	}, 1000);



};


setTimer();


// 


// if(tomogatochiOne.hunger === 10 || tomogatochiOne.sleepiness === 10 || tomogatochiOne.boredom === 10) {

// 		console.log("Dino is dead")

// 		// pass in new Dino 
// }





