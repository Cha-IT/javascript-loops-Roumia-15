// oppgave 1a
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// //oppgave 1b
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// //oppgave 2a
// let riktigPassord = "hemmelig";
//     let input = prompt("Skriv inn passord:");

//     while (input !== riktigPassord) {
//       input = prompt("Feil passord! Prøv igjen:");
//     }

//     alert("Riktig passord! Du er logget inn ");
// //oppgave 2b
// let passord = "hemmelig";
// let input;
// let forsok = 0; //  må opprettes før vi bruker den

// while (forsok < 3 && input !== passord) {
//   input = prompt("Skriv inn passord (forsøk " + (forsok + 1) + " av 3):");
//   forsok++;
// }

// if (input === passord) {
//   alert("Riktig passord! Du er logget inn ");
// } else {
//   alert("Du har brukt opp alle forsøkene. Prøv igjen senere.");
// }
// oppgave 3 
// let valg = prompt("Vil du se 'oddetall' eller 'partall'?");

//     if (valg === "oddetall") {
//       for (let i = 1; i <= 100; i += 2) {
//         console.log(i);
//       }
//     } else if (valg === "partall") {
//       for (let i = 0; i <= 100; i += 2) {
//         console.log(i);
//       }
//     } else {
//       alert("Ugyldig valg! Skriv enten 'oddetall' eller 'partall'.");
//     }
// oppgave 4
for (let i = 1; i <= 10; i++) {          
      for (let j = 1; j <= 10; j++) {       
        console.log(i + " x " + j + " = " + (i * j));
      }
      console.log("------------");
    }