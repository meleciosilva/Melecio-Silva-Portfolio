import { projects } from './projects.js';

// inserts project listings
const projectGroup = document.querySelector("#projects div.group");
console.log(projectGroup)

function insertProjects() {

  for (let project of projects) {

    let content = `
    <div class='item card' id='card' key=${project.id}>
      <div class='front'>
        <img class='project-photo' src='${project.project_image}' alt='${project.name}' />
        <div class='row padding-x-10'>
          <h3>${project.name}</h3>
          <div class='project-btns'>
            <a class='live-anchor' href="${project.live_url}" target='_blank'>
              <button class="live-button">Live</button>
            </a>
            <a href='${project.github_url}' target='_blank'>
              <img src='images/icons/github-icon.png' alt='GitHub Icon' width='30' height='30' />
            </a>
          </div>
        </div>
        <div>
          <p class="padding-x-10 line-height">${project.description}</p>
          <button class="flipBtn">Flip</button>
        </div>
      </div>
      <div class='back'>
        <h3 class ='padding-x-10 centerText'><strong>${project.name}</strong></h3>
        <div class ='padding-x-10 margin-b-15'>
          ${project.technology.join('')}
        </div>
        <button class="flipBtn">Flip</button>       
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
    let liveBtn = link.querySelector('.live-button');

    if (!href) {
      liveBtn.classList.add("hide");
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