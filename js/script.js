"use strict"

const card = document.getElementById("card");


// CALL "AJAX"
const drzava = function (country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    // open -- get DATA --- send() --> send back ---> onLoad ---> () =>

    request.addEventListener("load", function () {


        // PARSE THAT DATA.....
        const data = JSON.parse(this.responseText);

        // TEMPLATE LITERAL TO FILL UP WITH THE DATA FROM THE API INTO ELEMENTS



        const html = ` 
    <div id="card">


    <article id="country" class="country">
        <img src="${data[0].flags.png}" alt="country" accept="image/jpeg, image/jpg, image/png, image/svg">
    
        <h4>Country:  ${data[0].name.common}</h4>
        <h4>Capital city:  ${data[0].capital}</h4>
        <h4>Population:  ${(+data[0].population / 10000).toFixed(1)}</h4 >
        <h4>Currencies:  ${data[0].currencies.EUR.name}</h4>


    </article >


</div >
    `;

        // ------------------------------------------------

        // HERE WE IMPLEMENT RESULTS AND const HTML data INTO DOM TREE
        const countries = document.getElementById("country");
        countries.insertAdjacentHTML("beforeend", html);


    })


}



// PICK ANY COUNTRY AS PARAMETER OF BELOW FUNCTION TO DISPLAY THE DATA
drzava();
