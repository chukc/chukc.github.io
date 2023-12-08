// Toggle navigation menu for mobile
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');



menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'none' ? 'block' : 'none';

});



let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px"; // Adjust this based on your navbar height
  }
  prevScrollpos = currentScrollPos;
}





var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//setTimeout(() => {
//  nav.style.display = 'block';
//}, 2000); // Adjust the delay time in milliseconds (e.g., 2000 = 2 seconds)

// Get the checkbox and hidden input elements
const checkbox = document.getElementById('changeSubject');
const hiddenInput = document.getElementById('hiddenSubject');

// Add an event listener to the checkbox
checkbox.addEventListener('change', function() {
    // Check if the checkbox is checked
    if (this.checked) {
        // Change the value of the hidden input
        hiddenInput.value = "Resume Req submission!";
    } else {
        // Revert to the original value if the checkbox is unchecked
        hiddenInput.value = "New submission!";
    }
});



