typeof(15)
// Prediction: number
// Actual: number
console.log(typeof(15));

typeof(5.5)
// Prediction: float
// Actual: number
console.log(typeof(5.5));

typeof(NaN)
// Prediction:
// Actual:number
console.log(typeof(NaN));

typeof("hello")
// Prediction: string
// Actual: string
console.log(typeof("hello"));

typeof(true)
// Prediction: boolean
// Actual: boolean
console.log(typeof(true));

typeof(1 != 2)
// Prediction:boolean
// Actual: boolean
console.log(typeof(1 != 2));

"hamburger" + "s"
// Prediction: string
// Actual: string
console.log("hamburger" + "s");

"hamburgers" - "s"
// Prediction: string
// Actual:number
console.log("hamburgers" - "s");

"1" + "3"
// Prediction: string
// Actual: string
console.log("1" + "3");

"1" - "3"
// Prediction: string
// Actual: string
console.log("1" - "3");

"johnny" + 5
// Prediction: string
// Actual: string
console.log("johnny" + "5");

"johnny" - 5
// Prediction: number
// Actual: number
console.log("johnny" - "5");

99 * "hello"
// Prediction: string
// Actual:NaN
console.log(99 * "hello");

1 != 1
// Prediction: boolean
// Actual: false
console.log(1 != 1);

1 == "1"
// Prediction: boolean
// Actual: true
console.log(1 == 1);


1 === "1"
// Prediction: boolean
// Actual: true
console.log(1 === 1);
