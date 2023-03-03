const AllNavItems = document.querySelectorAll(".nav-link");
const navList = document.querySelector(".navbar-collapse");

AllNavItems.forEach(item =>
	item.addEventListener("click", () => navList.classList.remove("show"))
);
