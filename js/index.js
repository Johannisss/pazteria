// En lista med alla bilder som kommer att visas, bilder anges med en länk
const images = [
  "pizzorBildspel1.webp",
  "pizzorBildspel2.webp",
  "pizzorBildspel3.webp",
];

const texts = [""];

// En variabel som håller koll på vilken bild som visas
let currentImageIndex = 0;

// Denna funktion körs varje gång bilden ska bytas
function changeBackgroundImage() {
  // Om bilden inte är på den sista platsen, byt till nästa bild
  // Annars gå till första bilden
  if (currentImageIndex == images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }

  // Själva galleri-elementet
  let gallery = document.getElementsByClassName("gallery")[0];

  // Sätt classen till transparent
  gallery.className = "gallery transparent";

  // Vänta 1 sek för att låta övergången köras
  setTimeout(() => {
    // Sätt bilden till en ny bild
    gallery.style.backgroundImage =
      "url(/images/" + images[currentImageIndex] + ")";

    // Ta bort transparent klassen för att göra bilden synlig
    gallery.className = "gallery";
  }, 1000);
}

// Håller koll på när användaren scrollar, och kör trackScrollPosition när det scrollas
window.addEventListener("scroll", trackScrollPosition);

//byter länk på sidan beroende på var man befinner sig
function trackScrollPosition() {
  let scrollPosition = window.scrollY;
  let site =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  if (site == "index.html") {
    if (scrollPosition > 500) {
      window.history.replaceState("index.html", "Index", "index.html#meny");
      replaceNavbarClasses("navbarLogo", "navbarMenu");
    }
  } else if (site == "hittaHit.html") {
    if (scrollPosition > 650) {
      window.history.replaceState(
        "hittaHit.html",
        "Index",
        "hittaHit.html#contactUs"
      );
      replaceNavbarClasses("navbarFindUs", "navbarContactUs");
    }
  } else if (site == "index.html#meny") {
    if (scrollPosition < 500) {
      window.history.replaceState("index.html#meny", "Index", "index.html");
      replaceNavbarClasses("navbarMenu", "navbarLogo");
    }
  } else if (site == "hittaHit.html#contactUs") {
    if (scrollPosition < 650) {
      window.history.replaceState(
        "hittaHit.html#contactUs",
        "Index",
        "hittaHit.html"
      );
      replaceNavbarClasses("navbarContactUs", "navbarFindUs");
    }
  }
}

//tar in två navbar-element, och sedan tar den bort classen "active" från den första och lägger till på den andra
function replaceNavbarClasses(currentActive, targetId) {
  document.getElementById(currentActive).classList.remove("active");
  document.getElementById(targetId).classList.add("active");
}

//Denna funktion öppnar menyn i HTML. Den gör det genom att ändra "width"
//på div:en med id "menu" till 100%
function openMeny() {
  document.getElementById("mobil-meny").style.width = "100%";
}

//Denna funktion stänger menyn i HTML. Den gör det genom att ändra "width"
//på div:en med id "menu" till 0%
function closeMeny() {
  document.getElementById("mobil-meny").style.width = "0%";
}

if (window.location.href.includes("index")) {
  // Lägg till den första bilden som kommer synas direkt när man kommer in på sidan
  document.getElementsByClassName("gallery")[0].style.backgroundImage =
    "url(/images/" + images[currentImageIndex] + ")";
  // Byt bild varje 5 sekunder
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(changeBackgroundImage, 5000);
  });
}
