//one way of declaring an object
const o = new Object();
o.firstName = "Jordan";
o.lastName = "Hayashi";
o.isTeaching = true;
o.greet = function()
{
    console.log("HI!");
};

//another way of declaring object using object literal
const o2 = {};
o2.firstName = 'Eliza';
o2['lastName'] = "Woodruff";
const key = "isTeaching";
o2[key] = true;
o2['greet'] = function()
    {
        console.log("Hola!");
     };

//third way of creating an object
const o3 = {
    firstName : 'Emma',
    lastName : "Thompson",
    isTeaching : true,
    greet : function()
    {
        console.log("adios");
    },
    //nesting an object within an object
    address : {
        street : "Main st",
        number : 123
    },
};

//console.log("First Name " + o2.firstName + " Last Name" + o2.lastName);
console.log(o3.address);
console.log(o3.address.number);
console.log(o3.address['number']);
o3.address[key];
//===========================================================================
console.log("FirstName: " + o2.firstName + " LastName: " + o2.lastName);
console.log(o2.greet);





