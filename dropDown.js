//items need to be formatted as follows;
//An array of objects with name as the name of the dropdown item
//and href as the href link 

let items = [{name: nav1, href: "www.google.com"}, {name: nav2, href: "www.google.com"}, {name: nav3, href: "www.google.com"}]
export function createDropDown(items) {
  //create div and button and add to nav
  const dropDownButton = document.createElement("button");
  const dropDownDiv = document.createElement("div");
  const nav = document.querySelector("nav");

  nav.appendChild(dropDownDiv);
  dropDownDiv.append(dropDownButton);

  //change dropdown to be flex
  dropDownDiv.style.display = "flex";
  dropDownDiv.style.flexDirection = "column";

  //loop through items to create correct amount of a links
  for (let i = 0; i < items.length; i++) {
    let dropDownItem = document.createElement('a')
    dropDownItem.href = `${items[i].href}`;
    dropDownItem.innerText = items[i].name;
    dropDownItem.style.textDecoration = "none";
    dropDownDiv.append(dropDownItem);
  }

  //event listener for button 


}
