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

const subNav = () => {
	const about = document.querySelector("#abt")
	const subAbout = document.querySelector(".about")
	const projects = document.querySelector("#prj")
	const subProjects = document.querySelector(".projectsNav")
	const gallery = document.querySelector("#gal")
	const subGallery = document.querySelector(".gallery")

	about.addEventListener("mouseover", ()=>{
			subAbout.classList.toggle("toggle-about")
		
	})
	about.addEventListener("mouseout", ()=>{
			
			subAbout.classList.toggle("about")
		
	})

	projects.addEventListener("mouseover", ()=>{
			subProjects.classList.toggle("toggle-projects")
		
	})
	projects.addEventListener("mouseout", ()=>{
			
			subProjects.classList.toggle("gallery")
		
	})

	gallery.addEventListener("mouseover", ()=>{
			subGallery.classList.toggle("toggle-gallery")
		
	})
	gallery.addEventListener("mouseout", ()=>{
			
			subGallery.classList.toggle("gallery")
		
	})
}
subNav();
navSlideC2();