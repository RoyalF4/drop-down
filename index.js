function createDropdown(parent, items) {
  const ul = document.createElement("ul");
  ul.classList.add("dropdown");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.display = "none";
    ul.appendChild(li);
  });
  parent.appendChild(ul);
  parent.addEventListener("mouseover", () => {
    const dropdown = parent.querySelector("ul");
    Array.from(dropdown.children).forEach((child) => {
      const currentChild = child;
      currentChild.style.display = "block";
    });
  });
  parent.addEventListener("mouseleave", () => {
    const dropdown = parent.querySelector("ul");
    Array.from(dropdown.children).forEach((child) => {
      const currentChild = child;
      currentChild.style.display = "none";
    });
  });
}

module.exports = createDropdown;
