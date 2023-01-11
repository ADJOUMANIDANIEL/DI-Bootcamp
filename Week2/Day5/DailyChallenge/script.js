// Prompt the user for a number to begin counting down bottles.
let value = prompt("Enter a number");

if (!isNaN(value)) {

    let inc = 0;
    let nbBootle = 0;
    for (let index = 0; index < value; index++) {
                
        inc++;
        if (index == 0) {
            nbBootle = value;
            console.log(`${nbBootle} ${nbBootle>1 ? 'bottles' : 'bottle'} of beer on the wall`);
            console.log(`Take ${(inc)} down, pass them around`);
        } else {
            nbBootle = nbBootle - index;
            console.log(`${nbBootle} ${nbBootle>1 ? 'bottles' : 'bottle' } of beer on the wall`);
            ((index+1)<nbBootle) ? console.log(`Take ${(index+1)} down, pass them around`) : console.log("no bottle of beer on the wall");
        }

        // stop song
        if ((index+1)>nbBootle) {
            break;
        }
    }
}