function calculSphere()
 {
  let volume ="";
  let radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  //volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = (4* Math.PI * Math.pow(radius, 3))/3
  volume = volume.toFixed(4 );/**permet de mettre le un nombre apres la virgule */
  document.getElementById('volume').value = volume;
  return false;
 } 

window.onload = document.getElementById('MyForm').onsubmit = calculSphere;

///V = (4*pi*r3)/3