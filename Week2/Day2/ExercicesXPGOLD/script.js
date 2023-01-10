
//Exercice 1 : Le Traducteur Du Monde
let fruit = 'Papayas';

switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
}