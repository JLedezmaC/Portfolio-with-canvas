// selector
let menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  event.preventDefault();
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
}
menu.addEventListener('click', toggleMenu, false);


const formulario = document.querySelector(".form form");


const UserUrl = "https://api.github.com/users/JLedezmaC";
const GithubData = () => {
  fetch(UserUrl, {
    method: "GET"
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.status);
      }

      return response.json();
    })
    .then((data) => {
      addData(data)
    })
    .catch((error) => {
      console.log("error", error);
    });
};

GithubData();

function addData(data){
  const TotalProyects = document.querySelector(".total-projects a")
  TotalProyects.innerHTML = `${data.public_repos}`;
  formulario.addEventListener("submit",()=>{
    formulario.elements[0].value = "";
    formulario.elements[1].value = "";
    formulario.elements[2].value = "";
    formulario.elements[3].value = "";
  });
}
