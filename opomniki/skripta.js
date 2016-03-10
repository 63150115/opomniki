window.addEventListener('load', function() {   //počaka da se stran naloži 
	//stran nalozena
	
	//želimo uredit prijavo ... 
	var izvediPrijavo = function() {   //in še funkcija za prijavo
		var uporabnik = document.querySelector("#uporabnisko_ime").value; //vrednost iz tega value shrani v podatek 
		document.querySelector("#uporabnik").innerHTML = uporabnik; //querySelector ti dobi objekt s tega itema k ga iščeš
		document.querySelector(".pokrivalo").style.visibility ="hidden"; 
	}
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);   //z hashtagom pokličemo css
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});