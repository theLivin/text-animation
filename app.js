const ulItems = document.querySelectorAll(".move");

let li = 0;

function playAnimation() {
  ulItems[li].style.display = "none";
  if (li >= ulItems.length - 1) li = 0;
  else li++;
  ulItems[li].style.display = "block";
  setTimeout(playAnimation, 3000);
}

playAnimation();

console.log(ulItems);
