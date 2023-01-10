
const button=getButton();
const shuffleButton=document.getElementById("shuffle")
button?.addEventListener("click", handleClick)
shuffleButton?.addEventListener('click', shuffleStories)

function getFormValues()
{
 const noun=document.getElementById("noun").value
 const adjective=document.getElementById("adjective").value
 const person =document.getElementById("person").value
 const verb=document.getElementById("verb").value
 const place=document.getElementById("place").value
 return{noun, adjective, person, verb, place} 
}

function handleClick(e)
{ 
    shuffleStories(e, true)
}
let isFirstStory=writeStory()
function shuffleStories(e, isFirstStory=false)
{    e.preventDefault()
    const {noun, adjective,person,verb,place}=getFormValues()
    if([noun, adjective, person, verb, place].includes("")) return
    const randomNumber=generateRandomNumber()
    const stories=[(writeStory()), writeStory2(),writeStory3()]
    const story= isFirstStory? stories[0]: stories[randomNumber]
    appendstoryToPage(story)
    
}
function generateRandomNumber()
{
    return Math.floor(Math.random() * 3)
}
function appendstoryToPage(story){
    const paragraph=document.getElementById("story")
    const span=document.createElement("span")
    span.innerText=story
    paragraph.textContent=""
    paragraph.appendChild(span)
}
function writeStory()
{
    const {noun, adjective,person,verb,place}=getFormValues()
   return `I like to look at ${noun}s, I think that they are ${adjective}, my Favorite 
   person is ${person}, we often ${verb} together when we are in ${place}`
}
function writeStory2()
{   const {noun, adjective,person,verb,place}=getFormValues()
     
   return `I hate ${noun}s, I think that they are ${adjective}, I especially hate 
    ${person}, we never ${verb} I am in in ${place}`
}
function writeStory3()
{    const {noun, adjective,person,verb,place}=getFormValues()
   return `when I am ${place}, I look at the people there and I find them ${adjective}, if I could meet sommeone, it would be  
    ${person}, I would like to ${verb} them with a ${noun}`
}
function getButton()
{
   return document.getElementById("lib-button")
}