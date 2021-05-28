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
          <div class='social-links'>
            <ol>
              <li>
                <a href="${project.live_url}" target='_blank'>
                  <button class="live">Live</button>
                </a>
              </li>
              <li>
                <a href='${project.github_url}' target='_blank'>
                  <img src='images/icons/github-icon.png' alt='GitHub Icon' />
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <p class="padding-x-10">${project.description}</p>
          <button>Flip</button>
        </div>
      </div>
      <div class='back'>
        <h3 class ='padding-x-10 centerText'><strong>${project.name}</strong></h3>
        <div class ='padding-x-10 margin-b-15'>
          ${project.technology.join('')}
        </div>
        <button>Flip</button>       
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
    card.addEventListener("click", () => card.classList.toggle("flipCard"));
  }
}


function main() {
  insertProjects();
  flipCards();
}

// MAIN

document.addEventListener("DOMContentLoaded", main);