// Variables to connect html to elements.
const finishPattern = document.querySelector("#finishPattern");
const searchForm = document.querySelector("#searchForm");
const mainContent = document.querySelector("#content");

// Links to each automaker's logo in svg format, stored as variables.
const logoAcura =
  "https://upload.wikimedia.org/wikipedia/commons/a/af/Acura_logo.svg";
const logoAstonMartin =
  "https://upload.wikimedia.org/wikipedia/en/b/bd/Aston_Martin_Lagonda_brand_logo.png";
const logoAudi =
  "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg";
const logoBMW =
  "https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg";
const logoFerrari =
  "https://upload.wikimedia.org/wikipedia/sco/d/d1/Ferrari-Logo.svg";
const logoFord =
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg";
const logoGenesis =
  "https://upload.wikimedia.org/wikipedia/en/8/83/Genesis_division_emblem.svg";
const logoHonda =
  "https://upload.wikimedia.org/wikipedia/commons/7/76/Honda_logo.svg";
const logoHyundai =
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg";
const logoInfiniti =
  "https://upload.wikimedia.org/wikipedia/commons/4/4a/Infiniti_logo_2023.svg";
const logoJaguar =
  "https://upload.wikimedia.org/wikipedia/commons/8/8e/Jaguar.svg";
const logoKia =
  "https://upload.wikimedia.org/wikipedia/commons/b/b6/KIA_logo3.svg";
const logoLexus =
  "https://upload.wikimedia.org/wikipedia/en/d/d1/Lexus_division_emblem.svg";
const logoMazda =
  "https://upload.wikimedia.org/wikipedia/en/1/18/Mazda_logo_with_emblem.svg";
const logoMercedesBenz =
  "https://upload.wikimedia.org/wikipedia/commons/9/9e/Mercedes-Benz_Logo_2010.svg";
const logoMini =
  "https://upload.wikimedia.org/wikipedia/commons/e/e9/MINI_logo.svg";
const logoPorsche =
  "https://upload.wikimedia.org/wikipedia/en/8/8c/Porsche_logo.svg";
const logoSubaru =
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/Subaru_%282019%29.svg";
const logoTesla =
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg";
const logoToyota =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg";
const logoVolkswagen =
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg";
const logoVolvo =
  "https://upload.wikimedia.org/wikipedia/commons/c/cd/Volvo-Spread-Word-Mark-Black.svg";

// listen for form submission
searchForm.addEventListener("submit", (event) => {
  // By default, JavaScript sends form data to the server, thus reloading the page. However, since we have already processed the form on the client side, there is no need to reload the page. Let's therefore prevent a reload from happening:
  event.preventDefault();

  // get the contexts of the search input box.

  // first a set of HTML elements.
  let searchMake = document.querySelector("#searchMake");
  let searchLimit = document.querySelector("#searchLimit");
  let searchYear = document.querySelector("#searchYear");
  let searchFuel = document.querySelector("#searchFuel");

  // and then their user-entered values.
  let searchMakeValue = searchMake.value;
  let searchLimitValue = searchLimit.value;
  let searchYearValue = searchYear.value;
  let searchFuelValue = searchFuel.value;

  // Building a URL with the optional and required query parameters.
  let url = new URL("https://api.api-ninjas.com/v1/cars");
  url.searchParams.set("make", searchMakeValue);
  url.searchParams.set("year", searchYearValue);
  url.searchParams.set("limit", searchLimitValue);
  url.searchParams.set("fuel_type", searchFuelValue);

  // log the above generated URL to the console
  console.log(url.href);

// code copied from Insomnia to run the REST fetch function.
  const options = {
    method: "GET",
    headers: {
      "User-Agent": "insomnia/2023.5.8",
      "X-Api-Key": "/Hlu+sUNSI0UPaGwm+dYzQ==1Mu7TPlLFh1snaEL",
    },
  };

  // Run the request
  fetch(url.href, options)
    .then((response) => response.json())
    .then((response) => {
      // log the response to help understand how it is structured.
      console.log(response);
      // pass the results on to the displayResults function for rendering.
      displayResults(response);
    })
    .catch((err) => console.error(err));
});

// For each search result, display some HTML
const displayResults = (response) => {
  // reset the contents of the page to remove previous results.
  mainContent.innerHTML = "";
  finishPattern.classList.add("finishAnimation");
  if (response) {
    response.forEach((result) => {
      
      // create a div to contain the vehicle.
      let div = document.createElement("div");
      div.classList.add("result");
      
      //  run through a set of conditional statements to determine which logo asset to load; depending on the automaker.
      if (result.make == "acura") {
        makeLogo = logoAcura;
      } else if (result.make == "aston martin") {
        makeLogo = logoAstonMartin;
      } else if (result.make == "audi") {
        makeLogo = logoAudi;
      } else if (result.make == "bmw") {
        makeLogo = logoBMW;
      } else if (result.make == "ferrari") {
        makeLogo = logoFerrari;
      } else if (result.make == "ford") {
        makeLogo = logoFord;
      } else if (result.make == "genesis") {
        makeLogo = logoGenesis;
      } else if (result.make == "honda") {
        makeLogo = logoHonda;
      } else if (result.make == "hyundai") {
        makeLogo = logoHyundai;
      } else if (result.make == "infiniti") {
        makeLogo = logoInfiniti;
      } else if (result.make == "jaguar") {
        makeLogo = logoJaguar;
      } else if (result.make == "kia") {
        makeLogo = logoKia;
      } else if (result.make == "lexus") {
        makeLogo = logoLexus;
      } else if (result.make == "mazda") {
        makeLogo = logoMazda;
      } else if (result.make == "mercedes-benz") {
        makeLogo = logoMercedesBenz;
      } else if (result.make == "mini") {
        makeLogo = logoMini;
      } else if (result.make == "porsche") {
        makeLogo = logoPorsche;
      } else if (result.make == "subaru") {
        makeLogo = logoSubaru;
      } else if (result.make == "tesla") {
        makeLogo = logoTesla;
      } else if (result.make == "toyota") {
        makeLogo = logoToyota;
      } else if (result.make == "volkswagen") {
        makeLogo = logoVolkswagen;
      } else if (result.make == "volvo") {
        makeLogo = logoVolvo;
      } else {
        // if the automaker in a result isn't recognized, a fallback class is attributed to the vehicle div.
        div.classList.add("logoMissing");
      }

      // conditional statement to determine the vehicle's fuel type and to display an icon to represent it; electric or gas.
      if (result.fuel_type == "electricity") {
        div.classList.add("fuelTypeE");
      } else {
        div.classList.add("fuelTypeG");
      }

      // Make a simple template for the vehicle and add it to the page
      div.innerHTML = `
        <img class="makeLogo" src="${makeLogo}"></img>
        <p class="make">Make: ${result.make}</p>
        <hr>
        <p class="model">${result.model}</p>
        <p class="class">${result.class}</p>
        <p class="year"><span>${result.year}</span><span class="fuelTypeImg"></span></p>`;
      mainContent.appendChild(div);
    });
  } else {
    // in case there are no results, show the user some helpful feedback.
    mainContent.innerHTML = "No Results Found";
  }
};

// a function to animate the search button with a stylized look.
function ignition() {
  let btnSearch = document.querySelector("#btnSearch");
  btnSearch.classList.add("ignition");
}

// a function to clear the search results upon selecting the reset button.
function clearQuery() {
  mainContent.innerHTML = "";
  btnSearch.classList.remove("ignition");
  finishPattern.classList.remove("finishAnimation");
}