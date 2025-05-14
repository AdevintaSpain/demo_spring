const accesMapa = document.querySelector('.acces-mapa');
const area = document.querySelector('.acces-mapa > img');
const btVerMapa = document.querySelector('.acces-mapa-ver');
const btTrayecto = document.querySelector('.acces-mapa-trayecto');
const btDraw = document.querySelector('.acces-mapa-draw');
const mapPoligon = document.querySelector('.mapa-hibrida-poligon');
const prices = ["250.000", "325.700", "410.000", "234.000", "287.000", "290.500", "345.000", "320.000", "470.000", "278.900", "312.700"];
const openMenu = document.querySelector('.open-menu');
const menuOpened = document.querySelector('.menu-opened');
const checkboxRedLines = document.getElementById('redlines');
const redLines = document.querySelectorAll('.resolution');
const moreInfo = document.querySelectorAll('.more-info a');
const client = document.getElementById('cliente');
const colorbar = document.getElementById('color-bar');
const logoClient = document.getElementById('logo-cliente');
const banner600 = document.getElementById('banner600');
const banner728 = document.getElementById('banner728');
const banner50 = document.getElementById('banner50');
let poi;

/*fetch('./js/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data loaded:', data);

    // Example: Use the data (modify as needed)
    data.forEach(item => {
      console.log(item); // Process each item in the JSON array
    });
  })
  .catch(error => {
    console.error('Error loading data.json:', error);
  });
*/

const data = [
  {
      "name": "Gilmar Pozuelo-Aravaca",
      "id": "9202750685171",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-gilmar-pozuelo--aravaca/comprar/inmuebles/espana/todas-las-zonas/l?clientId=9202750685171",
      "logo": "https://static.fotocasa.es/images/client/94e1d1ab-6ee7-4be6-ad7b-21522387ceb1/20240909080437?rule=original",
      "param": "gilmar",
      "bg-color": "#FF7B2A",
      "font-color": "#FFFFFF",
      "banner_300x600": "9202750685171_300x600.png",
      "banner 300x50": "9202750685171_300x50.png",
      "banner_728x90": "9202750685171_728x90.png",
      "": ""
  },
  {
      "name": "Tecnocasa Plaza España",
      "id": "9202765662757",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-tecnocasa-plaza-de-espa%C3%B1a/comprar/inmuebles/espana/todas-las-zonas/l?clientId=9202765662757",
      "logo": "https://static.fotocasa.es/images/client/0b5eefd6-9f13-4b5c-b301-8f03e4ebc574/20250114093816?rule=original",
      "param": "tecnocasa",
      "bg-color": "#1B9635",
      "font-color": "#FFFFFF",
      "banner_300x600": "9202765662757_300x600.png",
      "banner 300x50": "9202765662757_300x50.png",
      "banner_728x90": "9202765662757_728x90.png",
      "": ""
  },
  {
      "name": "Engel & Volkers Madrid",
      "id": "9202765062251",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-engel-volkers-madrid/comprar/inmuebles/espana/todas-las-zonas/l?clientId=9202765062251",
      "logo": "https://static.fotocasa.es/images/client/9202765062251/644471.jpg?rule=original",
      "param": "engel",
      "bg-color": "#F03A4E",
      "font-color": "#FFFFFF",
      "banner_300x600": "9202765062251_300x600.png",
      "banner 300x50": "9202765062251_300x50.png",
      "banner_728x90": "9202765062251_728x90.png",
      "": ""
  },
  {
      "name": "Sarria Properties Viviendas Con Encanto",
      "id": "9202765403102",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-sarria-properties-viviendas-con-encanto/comprar/inmuebles/espana/todas-las-zonas/l?clientId=9202765403102",
      "logo": "https://static.fotocasa.es/images/client/9202765403102/666121.jpg?rule=original",
      "param": "sarria",
      "bg-color": "#D4D4D4",
      "font-color": "#1D1D1D",
      "banner_300x600": "9202765403102_300x600.png",
      "banner 300x50": "9202765403102_300x50.png",
      "banner_728x90": "9202765403102_728x90.png",
      "": ""
  },
  {
      "name": "Amat Immobiliaris",
      "id": "9202768551845",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-amat-immobiliaris/comprar/inmuebles/espana/todas-las-zonas/l?clientId=9202768551845",
      "logo": "https://static.fotocasa.es/images/client/e3c5a471-9f60-4a27-9a36-002158ea393b/20230802171515?rule=original",
      "param": "amat",
      "bg-color": "#D23A4E",
      "font-color": "#FFFFFF",
      "banner_300x600": "9202768551845_300x600.png",
      "banner 300x50": "9202768551845_300x50.png",
      "banner_728x90": "9202768551845_728x90.png",
      "": ""
  },
  {
      "name": "Bankasa Málaga Grupo inmobiliario",
      "id": "9202755988920",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-bankasa-malaga-grupo-inmobiliario/comprar/inmuebles/espana/todas-las-zonas/l?clientId=9202755988920",
      "logo": "https://static.fotocasa.es/images/client/9202755988920/485175.jpg?rule=original",
      "param": "bankasa",
      "bg-color": "#0E0D70",
      "font-color": "#FFFFFF",
      "banner_300x600": "9202755988920_300x600.png",
      "banner 300x50": "9202755988920_300x50.png",
      "banner_728x90": "9202755988920_728x90.png",
      "": ""
  },
  {
      "name": "Inmobiliaria Casamayor",
      "id": "9202764810212",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-inmobiliaria-casamayor/comprar/inmuebles/espana/todas-las-zonas/l?clientId=9202764810212",
      "logo": "https://static.fotocasa.es/images/client/811263fb-197d-485a-b0c9-82262f8d546f/20211215091807.jpeg?rule=original",
      "param": "casamayor",
      "bg-color": "#009CB9",
      "font-color": "#FFFFFF",
      "banner_300x600": "9202764810212_300x600.png",
      "banner 300x50": "9202764810212_300x50.png",
      "banner_728x90": "9202764810212_728x90.png",
      "": ""
  },
  {
      "name": "Inmobiliaria Carrillo",
      "id": "9202752434441",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-inmobiliaria-carrillo/comprar/inmuebles/espana/todas-las-zonas/l?clientId=9202752434441",
      "logo": "https://static.fotocasa.es/images/client/98a7303e-f930-4ba7-b701-b9a89f4a82d2/20220809153904.jpeg?rule=original",
      "param": "carrillo",
      "bg-color": "#00748A",
      "font-color": "#FFFFFF",
      "banner_300x600": "9202752434441_300x600.png",
      "banner 300x50": "9202752434441_300x50.png",
      "banner_728x90": "9202752434441_728x90.png",
      "": ""
  },
  {
      "name": "Inmobiliaria Barin ",
      "id": "900040000042",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-inmobiliaria-barin/comprar/inmuebles/espana/todas-las-zonas/l?clientId=900040000042",
      "logo": "https://static.fotocasa.es/images/client/56556381-eef3-4df3-998c-3f21929a51db/20240808124012?rule=original",
      "param": "barin",
      "bg-color": "#E984CA",
      "font-color": "#1D1D1D",
      "banner_300x600": "900040000042_300x600.png",
      "banner 300x50": "900040000042_300x50.png",
      "banner_728x90": "900040000042_728x90.png",
      "": ""
  },
  {
      "name": "Centro Inmobiliaria",
      "id": "9202753744965",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-centro-inmobiliaria/comprar/inmuebles/espana/todas-las-zonas/l?clientId=9202753744965",
      "logo": "https://static.fotocasa.es/images/client/13986ed0-46c8-4493-945d-c86d6e7a376f/20231121085232?rule=original",
      "param": "centro",
      "bg-color": "#0E0D70",
      "font-color": "#FFFFFF",
      "banner_300x600": "9202753744965_300x600.png",
      "banner 300x50": "9202753744965_300x50.png",
      "banner_728x90": "9202753744965_728x90.png",
      "": ""
  },
  {
      "name": "Metrovacesa",
      "id": "9202761217507",
      "minisite": "https://www.fotocasa.es/es/inmobiliaria-metrovacesa/comprar/inmuebles/espana/todas-las-zonas/l?clientId=9202761217507",
      "logo": "https://static.fotocasa.es/images/client/dac509b9-0412-4faf-aa05-948f4f9bb436/20221222081131.jpeg?rule=original",
      "param": "metrovacesa",
      "bg-color": "#303AB2",
      "font-color": "#FFFFFF",
      "banner_300x600": "9202761217507_300x600.png",
      "banner 300x50": "9202761217507_300x50.png",
      "banner_728x90": "9202761217507_728x90.png",
      "": ""
  }
];

const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('client'); // Ejemplo: ?param=gilmar

if (paramValue) {
  // Filtrar el array 'data' usando el valor del parámetro
  const filteredData = data.filter(item => item.param === paramValue);

  if (filteredData.length > 0) {
    console.log('Datos filtrados:', filteredData);

    // Ejemplo: Mostrar el nombre del primer resultado filtrado
    const firstResult = filteredData[0];
    client.textContent = firstResult.name;
    colorbar.style.backgroundColor = firstResult['bg-color'];
    colorbar.style.color = firstResult['font-color'];
    logoClient.src = firstResult.logo;
    banner50.src = './img/banners/'+firstResult['banner 300x50'];
    banner600.src = firstResult['banner_300x600'];
    banner728.src = firstResult['banner_728x90'];
  } else {
    alert('No se encontraró el cliente:', paramValue);
  }
} else {
  alert('No se proporcionó el parámetro "cliente" en la URL.');
}

window.addEventListener('scroll', (e) => {
    //console.log(scrollY);
    if(scrollY > 86) {
        accesMapa.setAttribute("style", "height: 68px");
        btVerMapa.setAttribute("style", "width: 276px");
        area.setAttribute("style", "opacity: 0");
        btTrayecto.setAttribute("style", "opacity: 0");
        btDraw.setAttribute("style", "opacity: 0");
    } else if (scrollY < 86) {
        accesMapa.removeAttribute("style");
        area.removeAttribute("style");
        btTrayecto.removeAttribute("style");
        btDraw.removeAttribute("style");
        btVerMapa.removeAttribute("style");
    }
})

function numeroaleatorio(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}



function addPoi() {
    let left = numeroaleatorio(2,99);
    let top = numeroaleatorio(2,99);
    poi = document.createElement("div");
    poi.classList.add('poi');
    poi.style.top = `${top}%`;
    poi.style.left = `${left}%`;
    mapPoligon.appendChild(poi);
  }

  function addPrice() {
    let randomPrice = numeroaleatorio(1,10);
    let left = numeroaleatorio(2,99);
    let top = numeroaleatorio(2,99);
    poiPrice = document.createElement("div");
    poiPrice.classList.add('poi-price');
    poiPrice.style.top = `${top}%`;
    poiPrice.style.left = `${left}%`;
    poiPrice.textContent = prices[randomPrice];
    console.log(`El poi prices es: ${poiPrice}`);
    mapPoligon.appendChild(poiPrice);
  }


if(typeof mapPoligon !== 'undefined' && mapPoligon !== null) {
    for(x=0; x<=300; x++) {
      addPoi();
    }
  
    for(x=0; x<=30; x++) {
      addPrice();
    }
  }


  openMenu.addEventListener('click', (e) => {
    menuOpened.classList.toggle('menu-opened_active');
  });

  checkboxRedLines.addEventListener('change', (e) => {
    if(checkboxRedLines.checked) {
      redLines.forEach((line) => {
        line.style.display = 'block';
      });
    } else {
      redLines.forEach((line) => {
        line.style.display = 'none';
      });
    }
  });

  moreInfo.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("more info button clicked")
      link.parentElement.classList.toggle('more-info_active');
    });
  }
  );


    