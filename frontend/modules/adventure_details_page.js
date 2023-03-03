import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  // Place holder for functionality to work in the Stubs
  const params = new URLSearchParams(search);
  const adventureId= params.get("adventure");
  return adventureId;
  // return null;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call


  // Place holder for functionality to work in the Stubs
  try{
    let fetchRes = await fetch( config.backendEndpoint+"/adventures/detail?adventure="+adventureId);
    let user = await fetchRes.json();
    return user;
  }
  catch{
    return null;
  }

  // return null;
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  let a = document.getElementById("adventure-name");
  a.innerHTML=adventure.name;
  let b= document.getElementById("adventure-subtitle");
  b.innerHTML=adventure.subtitle;
  let c=document.getElementById("adventure-content");
  c.innerHTML=adventure.content;
  let d= document.getElementById("photo-gallery");

  adventure.images.forEach(fin=>
    {
      let imgDiv=document.createElement('div');
      let image=document.createElement('img');
      image.className="activity-card-image"
      image.src=fin;
      imgDiv.appendChild(image);
      d.appendChild(imgDiv);
    });



  // let d=document.getElementById("photo-gallery");
  // d.innerHTML=adventure.


}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let slide=document.getElementById("photo-gallery");
 slide.innerHTML=`<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"> <div class="carousel-indicators">   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> </div> <div class="carousel-inner" id="getImage"> </div> <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">   <span class="carousel-control-prev-icon" aria-hidden="true"></span>   <span class="visually-hidden">Previous</span> </button> <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">   <span class="carousel-control-next-icon" aria-hidden="true"></span>   <span class="visually-hidden">Next</span> </button></div>`
let imageContainer=document.getElementById("getImage");
let act = "active"
images.forEach((key,id)=>{
  let imgDiv=document.createElement("div")
  let image=document.createElement("img");
  if(id == 1){
    act = ""
  }
  imgDiv.className = "carousel-item " + act;
  // console.log(image.className)
  image.src=key;
  image.setAttribute("class","activity-card-image d-block w-100")
  imgDiv.append(image);
  imageContainer.append(imgDiv)
})


}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
