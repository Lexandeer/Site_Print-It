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


let currentIndex = 0;										//Compteur


function addDot() {											//Fonction pour ajouter mes dots.
	for(let i = 0; i < slides.length; i++) {
		let dot = document.createElement('div');
		dot.className = 'dot';
		dots.appendChild(dot);
	}
}


function slideUpDate(currentIndex){							//Fonction Pour changer de slide et changer la "dot_selected"
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

document.addEventListener('DOMContentLoaded', function() {  //J'appelle mes fonction au chargement de la page.
	addDot();
	slideUpDate(currentIndex);
})


let arrowRight = document.querySelector("#banner button.arrow_right");		//EventListener pour la flèche de droite.	
	arrowRight.addEventListener("click",() => {									
		currentIndex += 1;
			if (currentIndex === 4) {										//Defilement infini
				currentIndex = 0;
			}
		slideUpDate(currentIndex);
	})


let arrowLeft = document.querySelector("#banner button.arrow_left");		//EventListener pour la flèche de gauche.
	arrowLeft.addEventListener("click",() => {									
		currentIndex -= 1;
		if (currentIndex === -1) {											//Defilement infini
			currentIndex = 3;
		}
		slideUpDate(currentIndex);
	})				

	
