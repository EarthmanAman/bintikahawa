const navSlideC2 = () => {
	const burger = document.querySelector(".burgerC2");
	const nav = document.querySelector(".nav-linksC2");
	const navLinks = document.querySelectorAll(".nav-linksC2 li");

	burger.addEventListener("click", ()=>{
		nav.classList.toggle("nav-activeC2");

		navLinks.forEach((link, index)=>{
			if(link.style.animation){
				link.style.animation = "";
			}else{
				link.style.animation = `navLinkFadeC2 0.5s ease forwards ${index / 7 + 0.8}s`
			}
		})
		
	})


}

navSlideC2();