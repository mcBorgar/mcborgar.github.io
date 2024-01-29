//Dette er Java Scripten min:
//Sidemenyen
// Åpner sideMenu og setter bredden til 25% når knappen med id 'openBtn' klikkes
document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('sideMenu').style.width = '25%';
});

// Lukker sideMenu og setter bredden til 0% når knappen med id 'closeBtn' klikkes
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('sideMenu').style.width = '0%';
});

//Dette er Headeren min:
// Setter variabler for å håndtere header-effekten
let prevScrollPos = window.scrollY; // Lagrer forrige rulleposisjon
const header = document.getElementById("header"); // Henter header-elementet

// Vent til DOM (Document Object Model) er ferdig lastet
document.addEventListener('DOMContentLoaded', function () {
    // Setter variabler for header-effekten
    let prevScrollPos = window.scrollY; // Lagrer forrige rulleposisjon
    const header = document.getElementById("header"); // Henter header-elementet
    const image = document.querySelector('.Logo img'); // Henter bildeelementet

    // Venter på rullehendelsen
    window.onscroll = function () {
        const currentScrollPos = window.scrollY; // Henter rulleposisjon

        if (currentScrollPos > 0) {
            // Brukeren ruller nedover eller har allerede rullet ned
            header.classList.add("sticky-header"); // Legger til "sticky-header"-klassen for å lage effekten
            image.style.width = '100px'; // Setter ønsket bredde for mindre header
            image.style.borderRadius = '0px'; // Setter ønsket kantradius for header
        } else {
            // Brukeren ruller opp, nær toppen
            header.classList.remove("sticky-header", "smaller-header"); // Fjerner "sticky-header"-klassen
            image.style.width = '150px'; // Setter original bredde for normal header
        }

        prevScrollPos = currentScrollPos; // Oppdaterer forrige rulleposisjon
    };

    // Sørger for at riktig header-tilstand blir påført ved initial lasting
    window.dispatchEvent(new Event('scroll'));
});
