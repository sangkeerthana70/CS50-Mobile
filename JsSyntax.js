const firstName = "Anu"
const lastName = 'Seng'

const val = 42
const arr = ['string', 42, function() {console.log('Hi!')}, ]

arr[2] ();

for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}
/*
OUTPUT:
Hi!
string
42
[Function]
*/
