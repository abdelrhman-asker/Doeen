let tree = document.getElementById("MainTree").children;
console.log(tree.length);
function addElement() {
  for (let i = 0; i < tree.length; i++) {
    const span = document.createElement("span");
    span.innerText = i + 1;
    span.classList.add("spanAbsul");
    tree[i].appendChild(span);
  }
}
addElement();
let activSection = document.getElementById("EnterPriceActivities").children;
function addElementActiv() {
  for (let x = 0; x < activSection.length; x++) {
    const spanning = document.createElement("span");
    spanning.innerText = ` - ${x + 1} - `;
    spanning.classList.add("spanAbsulActiv");
    activSection[x].appendChild(spanning);
  }
}
addElementActiv();
let NavBarele = document.getElementById("NavBar");
function InnerH() {
  let AboutUs = document.getElementById("About-Us");
  AboutUs.scrollIntoView();
}
function OurVis() {
  let Vision = document.getElementById("Our-Vision");
  Vision.scrollIntoView();
}
function OurSer() {
  let Services = document.getElementById("Our-Sevices");
  Services.scrollIntoView();
}
function Cont() {
  let Contact = document.getElementById("contact-us");
  Contact.scrollIntoView();
}
function DuringScrolling() {
  let MainHeader = document.getElementById("MainHeader");
}
function Top() {
  scrollTo(0, 0);
}
const navbar = document.getElementById("NavBar");
window.onscroll = () => {
  if (window.scrollY > 150) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
