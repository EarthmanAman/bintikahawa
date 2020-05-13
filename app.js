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

	let checker = 0
	about.addEventListener("mouseover", ()=>{
			subAbout.classList.toggle("toggle-about")
			checker = 1
	})

	subAbout.addEventListener("mouseover", ()=>{
		subAbout.classList.toggle("toggle-about")
	})

	about.addEventListener("mouseout", ()=>{
			
			subAbout.classList.toggle("about")
		
	})

	

	gallery.addEventListener("mouseover", ()=>{
			subGallery.classList.toggle("toggle-gallery")
		
	})
	gallery.addEventListener("mouseout", ()=>{
			
			subGallery.classList.toggle("gallery")
		
	})
}

const ourStory = () => {
	const ourStory = document.querySelector("#ourStry")
	const subOurStory = document.querySelector(".ourStory")
	let checker = 0
	ourStory.addEventListener("mouseover", ()=>{
			subOurStory.classList.toggle("toggle-ourStory")
			checker = 1
	})

	subOurStory.addEventListener("mouseover", ()=>{
		subOurStory.classList.toggle("toggle-ourStory")
	})

	ourStory.addEventListener("mouseout", ()=>{
			
			subOurStory.classList.toggle("ourStory")
		
	})

}

const whatWedo = () => {
	const whatWeDo = document.querySelector("#wht")
	const subWhatWeDo = document.querySelector(".whatWeDo")
	let checker = 0
	whatWeDo.addEventListener("mouseover", ()=>{
			subWhatWeDo.classList.toggle("toggle-whatWeDo")
			checker = 1
	})

	subWhatWeDo.addEventListener("mouseover", ()=>{
		subWhatWeDo.classList.toggle("toggle-whatWeDo")
	})

	whatWeDo.addEventListener("mouseout", ()=>{
			
			subWhatWeDo.classList.toggle("whatWeDo")
		
	})

}
subNav();
ourStory();
whatWedo();
navSlideC2();
