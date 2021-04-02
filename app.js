let playing = true;
let val = 3;
let score = 0;
const btn = document.getElementById("stop");
const obj = document.getElementById("box");
const next = document.getElementById("next");
const scoreDiv =  document.getElementById("scores");
const textBox = document.getElementById("textBox"); 
const width  = window.innerWidth / 2;


function stopMotion(){
	obj.style.setProperty("animation-play-state", "paused");
	var rect = obj.getBoundingClientRect();
	checkIfCaught(rect.right, rect.left);
}

function checkIfCaught(rightboundary, leftboundary){
	let msg = "";
	console.log(rightboundary, width + 100, leftboundary, width-200)
	if (rightboundary <= (width + 100) && leftboundary >= (width - 200) )
		{
			msg = "YOU CAUGHT THE BLAHAJ!";
			val *= 0.75;
			score += Math.round(rightboundary/10);
			scoreDiv.textContent = "SCORE:" + score.toString();
		}
	else
		{msg = "YOU COULDN'T CATCH IT :(";
			playing = false;
		}
	textBox.textContent = msg;

}

btn.addEventListener('click', function(){
	stopMotion();
})


next.addEventListener('click', function(){
	obj.style.animation = val.toString() + "s linear infinite alternate slide";
	obj.style.setProperty("animation-play-state", "play");
	textBox.textContent = "";
})


