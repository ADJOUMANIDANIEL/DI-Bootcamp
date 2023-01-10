
function verif(chars) {
  // Caractères autorisés
  let caractereAutorise = new RegExp("[a-z A-Z]", "i");
  let valid;
  for (x = 0; x < chars.value.length; x++) {
      valid = caractereAutorise.test(chars.value.charAt(x));
      if (valid == false) {
          chars.value = chars.value.substr(0, x) + chars.value.substr(x + 1, chars.value.length - x + 1); x--;
      }
  }
}