console.log("Linked")

let time = 50;
let timer;
// This happens every refresh // 


// START OF GAME. TURNING OFF WHILE TESTING

const enterName = function(name){

	const startName = window.prompt("What would you like to name your Dino?")




	$("#start").on("click", () => {
		setTimer();
		updateList();
	})


	// initialize your tamagotchi


	const newH2 = $("<h2>")

	newH2.appendTo("header")
 
	newH2.text("Hello " + startName +"!")

}

// Want to call function here to put the numbers on the screen as the game/before game starts





enterName();



// window.alert("Click 'Ok' to get started")





class Tomogatochi {
	constructor(name, hunger, sleepiness, boredom, age) {
		this.name = name;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;

	}
	feed(){
		this.hunger--
	}
	sleep(){
		this.sleepiness--
	}
	play(){
		this.boredom--
	}
	


};



const dino = () => {
	const img = $("<img>")
	img.appendTo($("body"))
	img.attr("src", "https://i.pinimg.com/originals/3f/6d/fb/3f6dfbd77eefe0287e2539f87430fc52.png")
}


const gameOver = () => {
	$("img").remove()
	const img = $("<img>")
	img.appendTo($("body"))
	img.attr("src", "https://i.pinimg.com/originals/eb/a8/eb/eba8eb5a8e6ac5a8730184596382ae7d.jpg")

}




const tomogatochiOne = new Tomogatochi("Sam", 7, 7, 7, 0, dino())
console.log(tomogatochiOne)
 
const updateList = function(){

	$("#hunger").text(" Hunger:" + tomogatochiOne.hunger);
	$("#sleepiness").text(" Sleepiness:" + tomogatochiOne.sleepiness);
	$("#boredom").text(" Boredom:" + tomogatochiOne.boredom);
	$("#age").text(" Age:" + tomogatochiOne.age);



	if(tomogatochiOne.hunger >= 11 || tomogatochiOne.sleepiness >= 11 || tomogatochiOne.boredom >= 11) {

			gameOver();
			window.alert("Dino is dead")
			console.log("dino is dead")		
			console.log("Game over")	
			

			clearInterval(timer);
			time = 0;

}


}



$("#feed").on("click", (e) => {

	
	// tomogatochiOne.hunger--
	tomogatochiOne.feed()
	// setTimer();
	updateList();
})



$("#sleep").on("click", (e) => {

	tomogatochiOne.sleep();	
	// tomogatochiOne.sleepiness--

	// setTimer();
	updateList();

})

$("#play").on("click", (e) => {

	tomogatochiOne.play();
	// tomogatochiOne.boredom--
	// setTimer();
	updateList();


})





const setTimer = function() {
	
	timer = setInterval(() => {
		time --

		if(time === 45) {
			tomogatochiOne.hunger++
			tomogatochiOne.sleepiness++
			tomogatochiOne.boredom++
			tomogatochiOne.age++;
			updateList();
		} 

		else if(time === 42) {
			tomogatochiOne.hunger++
			tomogatochiOne.sleepiness++
			tomogatochiOne.boredom++
			tomogatochiOne.age++;
			updateList();

		}	else if(time === 40) {
			tomogatochiOne.hunger++
			tomogatochiOne.sleepiness++
			tomogatochiOne.boredom++
			tomogatochiOne.age++;
			updateList();
		} else if(time === 38){
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


// setTimer();