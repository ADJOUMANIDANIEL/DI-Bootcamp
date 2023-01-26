/**
 * Given the years two people were born, find the date when the younger one is exactly half the age of the older.
Notes: The dates are given in the format YYYY
 */


const anneeAnniversaire1 = Number(prompt("entrez la premiere annee d'anniversaire"));
const anneeAnniversaire2 = Number(prompt("entrez la deuxieme annee d'anniversaire"));

if (anneeAnniversaire1 < anneeAnniversaire2) {
  // Personne 2 est plus jeune
  const ageDifference = anneeAnniversaire2 - anneeAnniversaire1;
  const halfAge = ageDifference * 2;
  const halfAgeYear = anneeAnniversaire1 + halfAge;
  console.log(`Le plus jeune a exactement la moitié de l'âge du plus âgée en ${halfAgeYear}`);
} else if (anneeAnniversaire2 < anneeAnniversaire1) {
  // Personne 1 est plus jeune
  const ageDifference = anneeAnniversaire1 - anneeAnniversaire2;
  const halfAge = ageDifference * 2;
  const halfAgeYear = anneeAnniversaire2 + halfAge;
  console.log(`Le plus jeune a exactement la moitié de l'âge du plus âgée en ${halfAgeYear}`);
} else {
  // Les personnes ont le même âge
  console.log(`Les personnes ont le même âge`);
}