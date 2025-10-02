//items need to be formatted as follows;
//An array of objects with name as the name of the dropdown item
//and href as the href link 

export function createDropDown(items, buttonTitle) {
  //create div and button and add to nav
  const dropDownButton = document.createElement("button");
  dropDownButton.innerText = buttonTitle;
  const dropDownDiv = document.createElement("div");
  const nav = document.querySelector("nav");
  let active = 0;
  nav.append(dropDownButton, dropDownDiv)

  //change dropdown to be flex
  dropDownDiv.style.display = "none";
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
  dropDownButton.addEventListener('click', () => {
    if (active === 0) {
      dropDownDiv.style.display = "flex";
      active = 1;
      return;
    }
    else {
      dropDownDiv.style.display = "none"
      active = 0;
      return;
    }
  })
}
