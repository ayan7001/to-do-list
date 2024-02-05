let allTasks = [];
let eachTask;
const theInput = document.querySelector("#inputtask");
const theInsideSection = document.querySelector(".inside");
const theTaskList = document.querySelector("#listoftasks");
theTaskList.innerHTML = window.localStorage.getItem("array");
theInsideSection.addEventListener("click", function (e) {
  if (document.querySelectorAll(".crossimg").length === 0) {
    noData(e);
  } else if (document.querySelectorAll(".crossimg").length != 0) {
    hasData(e);
  }
});

function noData(e) {
  if (e.target.tagName === "BUTTON") {
    eachTask = theInput.value;
    allTasks.push(eachTask);

    var listItem = document.createElement("li");
    var theListDiv = document.createElement("div");
    theListDiv.setAttribute("class", "list-div");
    var theCheckerDiv = document.createElement("div");
    theCheckerDiv.setAttribute("class", "checker");
    var theCheckerImage = document.createElement("img");
    theCheckerImage.setAttribute("src", "./resources/unchecked.png");
    theCheckerImage.setAttribute("class", "checkerimg");
    theCheckerImage.setAttribute("clicked", "false");
    theCheckerDiv.appendChild(theCheckerImage);
    theListDiv.appendChild(theCheckerDiv);
    var theTaskPara = document.createElement("p");
    theTaskPara.innerHTML = eachTask;
    theListDiv.appendChild(theTaskPara);
    var theCrossDiv = document.createElement("div");
    theCrossDiv.setAttribute("class", "cross");
    var theCrossImage = document.createElement("img");
    theCrossImage.setAttribute("src", "./resources/x-lg.svg");
    theCrossImage.setAttribute("class", "crossimg");
    theCrossDiv.appendChild(theCrossImage);
    theListDiv.appendChild(theCrossDiv);
    listItem.appendChild(theListDiv);
    theTaskList.appendChild(listItem);

    window.localStorage.setItem("array", theTaskList.innerHTML);
    theInput.value = "";
    eachTask = "";
    console.log("fine");
  }
}
function hasData(e) {
  if (e.target.tagName === "BUTTON") {
    eachTask = theInput.value;
    allTasks.push(eachTask);

    var listItem = document.createElement("li");
    var theListDiv = document.createElement("div");
    theListDiv.setAttribute("class", "list-div");
    var theCheckerDiv = document.createElement("div");
    theCheckerDiv.setAttribute("class", "checker");
    var theCheckerImage = document.createElement("img");
    theCheckerImage.setAttribute("src", "./resources/unchecked.png");
    theCheckerImage.setAttribute("class", "checkerimg");
    theCheckerImage.setAttribute("clicked", "false");
    theCheckerDiv.appendChild(theCheckerImage);
    theListDiv.appendChild(theCheckerDiv);
    var theTaskPara = document.createElement("p");
    theTaskPara.innerHTML = eachTask;
    theListDiv.appendChild(theTaskPara);
    var theCrossDiv = document.createElement("div");
    theCrossDiv.setAttribute("class", "cross");
    var theCrossImage = document.createElement("img");
    theCrossImage.setAttribute("src", "./resources/x-lg.svg");
    theCrossImage.setAttribute("class", "crossimg");
    theCrossDiv.appendChild(theCrossImage);
    theListDiv.appendChild(theCrossDiv);
    listItem.appendChild(theListDiv);
    theTaskList.appendChild(listItem);

    window.localStorage.setItem("array", theTaskList.innerHTML);
    theInput.value = "";
    eachTask = "";
  } else if (
    e.target.tagName === "IMG" &&
    e.target.getAttribute("class") === "crossimg"
  ) {
    e.target.parentElement.parentElement.parentElement.remove();
    window.localStorage.setItem("array", theTaskList.innerHTML);
  } else if (
    e.target.tagName === "IMG" &&
    e.target.getAttribute("class") === "checkerimg"
  ) {
    if (e.target.getAttribute("clicked") === "false") {
      console.log("i detected checker button!");
      e.target.setAttribute("clicked", "true");
      e.target.setAttribute("src", "./resources/checked.png");
      e.target.parentElement.parentElement.firstElementChild.nextElementSibling.setAttribute(
        "class",
        "taskdone"
      );
      window.localStorage.setItem("array", theTaskList.innerHTML);
    } else if (e.target.getAttribute("clicked") === "true") {
      e.target.setAttribute("clicked", "false");
      e.target.setAttribute("src", "./resources/unchecked.png");
      e.target.parentElement.parentElement.firstElementChild.nextElementSibling.classList.remove(
        "taskdone"
      );
      window.localStorage.setItem("array", theTaskList.innerHTML);
    }
  } else {
    console.log(e.target.tagName);
  }
}
