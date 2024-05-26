// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}

const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }


// JavaScript feature - Disappearing navbar
const body = document.body
let lastScroll = 0;

window.addEventListener( 'scroll', () => {
	const currentScroll = window.scrollY
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up")
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up")
		body.classList.add("scroll-down")
	}

	if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-down")
		body.classList.add("scroll-up")
	}

	lastScroll = currentScroll;
})


document.addEventListener("DOMContentLoaded", function() {
  // Function to handle scroll events and hide/show the contact button
  window.onscroll = function() {
    var button = document.getElementById("contactButton");
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Change the scroll threshold to 80% of the total scrollable height
    if (scrollPosition > (document.body.clientHeight - window.innerHeight) * 0.8) {
      button.classList.add("hidden");
    } else {
      button.classList.remove("hidden");
    }
  };

  // Function to show the modal
  function showModal() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "block";
    setTimeout(function() {
      modal.classList.add("show");
    }, 10); // Small timeout to trigger CSS transition
  }

  // Function to hide the modal
  function hideModal() {
    var modal = document.getElementById("contactModal");
    modal.classList.remove("show");
    setTimeout(function() {
      modal.style.display = "none";
    }, 500); // Match this with the CSS transition duration
  }

  // Function to toggle the modal visibility
  function toggleModal() {
    var modal = document.getElementById("contactModal");
    if (modal.style.display === "block") {
      hideModal();
    } else {
      showModal();
    }
  }

  // Get the button that opens/closes the modal
  var btn = document.getElementById("contactButton");
  var btn2 = document.getElementById("contactButton2")

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, toggle the modal
  btn.onclick = function() {
    toggleModal();
  };
  btn2.onclick = function() {
    toggleModal();
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    hideModal();
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    var modal = document.getElementById("contactModal");
    if (event.target == modal) {
      hideModal();
    }
  };
});