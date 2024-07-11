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
