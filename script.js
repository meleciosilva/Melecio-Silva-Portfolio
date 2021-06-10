import { projects } from './projects.js';

// inserts project listings
const projectGroup = document.querySelector("#projects div.group");

function insertProjects() {

  for (let project of projects) {

    let content = `
    <div class='item card' id='card' key=${project.id}>
      <div class='front'>
        <img class='project-photo' src='${project.project_image}' alt='${project.name}' />
        <div class='row padding-x-10'>
          <h3>${project.name}</h3>
        </div>
        <div>
          <p class="padding-x-10">${project.description}</p>
          <div class='project-btns'>
            <a class='live-anchor btn green' href="${project.live_url}" target='_blank'>Live</a>
            <a class='btn dark' href='${project.github_url}' target='_blank'>GitHub</a>
            <button class="flipBtn btn dark">Flip</button>
          </div>
        </div>
      </div>
      <div class='back'>
        <div class="flex-row">
          <img class="flipBtn" src="images/icons/back-icon.png" alt="go back" width=35 height=35/>       
          <h3 class ='padding-x-10'><strong>${project.name}</strong></h3>
        </div>  
        <div class ='padding-x-10 margin-b-15'>
          ${project.technology.join('')}
        </div>
      </div>
    </div>
    `

    projectGroup.insertAdjacentHTML("beforeend", content);
  }

}

// flip project cards

function flipCards() {
  const cards = document.querySelectorAll(".card");

  for (let card of cards) {
    let flipBtns = card.querySelectorAll('.flipBtn');

    for (let btn of flipBtns) {
      btn.addEventListener("click", () => card.classList.toggle("flipCard"));
    }
    
  }
}

// hide live button for undeployed projects

function hideBtn() {
  const liveAnchors = document.querySelectorAll(".live-anchor");

  for (let link of liveAnchors) {
    let href = link.getAttribute("href");
    if (!href) {
      link.classList.add("hide");
    }
  }
}


function main() {
  insertProjects();
  flipCards();
  hideBtn();
}

// MAIN

document.addEventListener("DOMContentLoaded", main);