//Smooth scrolling between sections when clicking on the navbar links
document.querySelectorAll("header .navLinks a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // here e is event object as a parameter which helps to auto call the function. In this case when we click, click events is passed and evrerytime function will call automaticaly.
    e.preventDefault(); // Prevent the default anchor click behavior

    // Get the target section ID from the href attribute
    const targetId = this.getAttribute("href"); //If you click an <a> link with href="#about", THIS refers to that specific <a> element, allowing you to access its properties and methods (like getAttribute('href')).
    const targetSection = document.querySelector(targetId);

    // Smooth scroll to the target section
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});

// function smoothScroll(event) {
//     event.preventDefault();
//     const targetId = this.getAttribute('href');
//     const targetSection = document.querySelector(targetId);
//         targetSection.scrollIntoView({
//             behavior: 'smooth',
//             block: 'center'
//         });
// }

// Wait for the page to fully load
window.onload = function () {
  const links = document.querySelectorAll(".navLinks a");

  // Make the first link active by default
  links[0].classList.add("active");

  // Loop through all the links
  for (var i = 0; i < links.length; i++) {
    // Add a click event to each link
    links[i].onclick = function () {
      // Remove 'active' from all links
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }

      // Add 'active' to the clicked link
      this.classList.add("active");
    };
  }
};

// document.getElementById("chatBtn").addEventListener("click", function () {
//   window.open("contact.html", "Popup Window", "width=600,height=400");
// });

// // JavaScript to handle active class
// document.addEventListener('DOMContentLoaded', function () {
//     // Set the first link as active by default when the page loads
//     const links = document.querySelectorAll('.navLinks a');
//     links[0].classList.add('active');

//     // Add event listener to all navigation links
//     links.forEach(function (link) {
//         link.addEventListener('click', function () {
//             // Remove 'active' class from all links
//             links.forEach(function (link) {
//                 link.classList.remove('active');
//             });

//             // Add 'active' class to the clicked link
//             link.classList.add('active');
//         });
//     });
// });


document.querySelector('.contact-window').style.display = "none";

// Open the contact form pop-up
document.getElementById("chatBtn").addEventListener("click", function () {
    const contactWindow = document.getElementById("contact-window");
    contactWindow.style.display = "flex"; // Show the pop-up
});

// Close the contact form pop-up
document.querySelector(".closeBtn").addEventListener("click", function () {
    const contactWindow = document.getElementById("contact-window");
    contactWindow.style.display = "none";
});

// Optional: Close the pop-up when clicking outside the content area
document.getElementById("contact-window").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});



