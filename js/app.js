console.log("Linked")

let time = 15;



class Tomogatochi {
	constructor(name, hunger, sleepiness, boredom, age) {
		this.name = name;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;

	}
	


};


const tomogatochiOne = new Tomogatochi("Sam", 10, 10, 10, 0)
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

		if(time === 10) {
			tomogatochiOne.hunger++
			tomogatochiOne.sleepiness++
			tomogatochiOne.boredom++
			tomogatochiOne.age++;
			updateList();
		} 

		else if(time === 5) {
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
			time = 15;
		}

		$("#timer").text("timer: " + time + "s")


	}, 1000);



};




setTimer();



