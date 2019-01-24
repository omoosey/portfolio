const navLinks = document.getElementById('navLinks').children;
const navLinksArray = Array.from(navLinks);


navLinksArray.forEach((item) => {
	item.addEventListener("click", function(){
		navLinksArray.forEach((item)=> {
			if (item.classList == "active"){
				item.classList.toggle("active");
			}
		})
		this.classList.add("active");
	})
})