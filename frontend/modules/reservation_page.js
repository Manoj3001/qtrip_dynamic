import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try{
    let adventureDetails = await fetch(config.backendEndpoint+"/reservations/").then(element => element.json());
    console.log(adventureDetails);
    return adventureDetails;
  }
  catch{
    return null;
  }

  // Place holder for functionality to work in the Stubs
  return null;
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table

  //Conditionally render the no-reservation-banner and reservation-table-parent

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */
    if(reservations.length == 0){
      document.getElementById("no-reservation-banner").style.display = "block";
      document.getElementById("reservation-table-parent").style.display = "none";
     }
     else{
      document.getElementById("no-reservation-banner").style.display = "none";
      document.getElementById("reservation-table-parent").style.display = "block";
      let resTableBody = document.getElementById("reservation-table");
      reservations.forEach((element) => {
       let linkCol = `../detail/?adventure=${element.adventure}`;
       let tableRow = document.createElement("tr");
       tableRow.innerHTML = `   <td scope="col"><b>${element.id}</b></td>   <td scope="col">${element.name}</td>   <td scope="col">${element.adventureName}</td>   <td scope="col">${element.person}</td>   <td scope="col">${new Date(element.date).toLocaleDateString("en-IN")}</td>   <td scope="col">${element.price}</td>   <td scope="col">${new Date(element.time).toLocaleString("en-IN", {day:"numeric", month:"long",year:"numeric"})}, ${new Date(element.time).toLocaleTimeString("en-IN")}</td>   <td scope="col"><button id = ${element.id} class = "reservation-visit-button"><a href = ${linkCol}>Visit Adventure</a></button></td>   `;
       resTableBody.append(tableRow);
      });
    }

}

export { fetchReservations, addReservationToTable };
