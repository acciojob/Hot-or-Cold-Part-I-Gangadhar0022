const main = document.getElementById("main");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const guess = Number(document.getElementById("guess").value);

btn.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 41) - 20;
  num.textContent = randomNumber;
	if((guess-randomNumber)<=5){
		document.getElementById("respond").innerText="Hot";
	}
	else{
		document.getElementById("respond").innerText="Cold";
		
	}
});
