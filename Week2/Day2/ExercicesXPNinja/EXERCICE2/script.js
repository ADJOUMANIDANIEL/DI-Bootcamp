//Zip code without regex

const zipCode = prompt("Enter a zipcode:")
    // Zip codes conditions
if (zipCode.length !== 5 || zipCode.indexOf(" ") !== -1 ||isNaN(zipCode)) {
    console.log("error");

}else{
    console.log("success");
}

//zip codes using Regex
if (/^\d{5}$/.test(zipCode)) {
    console.log("error");
}else{
    console.log("error")
}