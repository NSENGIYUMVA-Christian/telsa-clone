const openMenu = () => {
  document.querySelector(".backdrop").className = "backdrop active";
  document.querySelector("aside").className = "active";
};
const closeMenu = () => {
  document.querySelector(".backdrop").className = "backdrop";
  document.querySelector("aside").className = "";
};

document.getElementById("menuBtn").addEventListener("click", function (e) {
  e.preventDefault();
  openMenu();
});

// closing
document
  .querySelector("aside button.close")
  .addEventListener("click", function (e) {
    //e.preventDefault();
    closeMenu();
  });
document.querySelector(".backdrop").addEventListener("click", function (e) {
  //e.preventDefault();
  closeMenu();
});
