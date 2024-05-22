const slides = [																						//Tableau contenant mes slides.
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let dots = document.querySelector("#banner .dots");
let p = document.querySelector("#banner p");
let img = document.querySelector("#banner img.banner-img");

function addDot() {										//Fonction pour ajouter mes dots.
	for(let i = 0; i < slides.length; i++) {
		let dot = document.createElement('div');
		dot.className = 'dot';
		dots.appendChild(dot);
	}
}
document.addEventListener('DOMContentLoaded', function() {  //J'appelle ma fonction pour ajouter les dots, au chargement de la page.
	addDot();
	slideUpDate(currentIndex);
})




let currentIndex = 0;

function slideUpDate(currentIndex){
	img.setAttribute("src", slides[currentIndex].image);
	p.innerHTML = slides[currentIndex].tagLine;

	let dot = document.querySelectorAll("#banner .dot");
	for(let i = 0; i < slides.length; i++) {
		if(i === currentIndex){
			dot[i].classList.add('dot_selected');
		} else {
			dot[i].classList.remove('dot_selected');
		}

	}
}

let arrowRight = document.querySelector("#banner button.arrow_right");		
	arrowRight.addEventListener("click",() => {									//EventListener pour la flèche de droite.
		console.log("Vous avez cliquez sur la flèche de droite !");
		currentIndex += 1;
			if (currentIndex === 4) {
				currentIndex = 0;
			}
		console.log(currentIndex);
		slideUpDate(currentIndex);
	})


let arrowLeft = document.querySelector("#banner button.arrow_left");
	arrowLeft.addEventListener("click",() => {									//EventListener pour la flèche de gauche.
		console.log("Vous avez cliquez sur la flèche de gauche !");
		currentIndex -= 1;
		if (currentIndex === -1) {
			currentIndex = 3;
		}
		console.log(currentIndex);
		slideUpDate(currentIndex);
	})				

	
