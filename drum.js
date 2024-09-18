window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key);
  console.log(e);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});
function removeTransition(e) {
  console.log(e.propertyName);
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing"); // this refet to the key from the event listener
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
