const planets =[{name:"Mercury",moons:2},
{name:"Venus",moons:1}, 
{name:"Earth",moons:2},
{name:"Mars", moons:3},
{name:"Jupiter",moons:4},
{name:"Saturn",moons:5},
{name:"Uranus",moons:6},
{name:"Nepturne",moons:7}];
for (const planet of planets){
    //console.log("planet :", planet)
    const planetDiv=document.createElement("div")
  
    planetDiv.classList.add("planet", planet.name.toLowerCase());
    for (let i=0; i<planet.moons; i++)
    {
        const moonDiv=document.createElement("div")
        moonDiv.classList.add("moon")
      
        moonDiv.style.left=i*10+"px"
        planetDiv.appendChild(moonDiv)
    }
    const section = document.querySelector(".listPlanets");
    section?.appendChild(planetDiv);
}