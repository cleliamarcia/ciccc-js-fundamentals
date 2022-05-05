/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/


const cShirtSmall  = {size:"S", width:18, lenght:28, sleeve: 8.13};
const cShirtMedium = {size:"M", width:20, lenght:29, sleeve: 8.38};
const cShirtLarge  = {size:"L", width:22, lenght:30, sleeve: 8.63};
const cShirtXLarge  = {size:"XL", width:24, lenght:31, sleeve: 8.88};
const cShirt2XLarge  = {size:"2XL", width:26, lenght:33, sleeve: 9.63};
const cShirt3XLarge  = {size:"3XL", width:28, lenght:34, sleeve: 10.13};

const vWidth = 20;
const vLenght= 29;
const vSleeve = 8.38;

if (vWidth < cShirtSmall.width || vLenght < cShirtSmall.lenght || vSleeve < cShirtSmall.sleeve)
{   console.log("N/A");
} else if (vWidth === cShirtSmall.width && vLenght === cShirtSmall.lenght && vSleeve === cShirtSmall.sleeve) {
    console.log (cShirtSmall.size);
} else if (vWidth === cShirtMedium.width && vLenght === cShirtMedium.lenght && vSleeve === cShirtMedium.sleeve) {
    console.log (cShirtMedium.size);
} else if (vWidth === cShirtLarge.width && vLenght === cShirtLarge.lenght && vSleeve === cShirtLarge.sleeve) {
        console.log (cShirtLarge.size);
} else if (vWidth === cShirt2XLarge.width && vLenght === cShirt2XLarge.lenght && vSleeve === cShirt2XLarge.sleeve) {
        console.log (cShirt2XLarge.size);
} else if (vWidth === cShirt3XLarge.width && vLenght === cShirt3XLarge.lenght && vSleeve === cShirt3XLarge.sleeve) {
    console.log (cShirt3XLarge.size);
} else{
    console.log("N/A");
};
