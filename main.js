let tree = document.getElementById("MainTree").children;
console.log(tree.length);
function addElement(ele) {
  for (let i = 0; i < tree.length; i++) {
    const span = document.createElement("span");
    span.innerText = i + 1;
    span.classList.add("spanAbsul");
    tree[i].appendChild(span);
  }
}
addElement();
