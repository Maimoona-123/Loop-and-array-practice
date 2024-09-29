// Some practice question 


// Method 1

var fruits = ["APple", "Banana", "Cherry", "Grapes" ];
fruits.push ("Mango");
console.log (fruits);


// Method 2

var fruits = ["Apple", "Banana", "Cherry", "Grapes" ];
fruits.pop ();
console.log (fruits);


// Method 3


var fruits = ["Apple", "Banana", "Cherry", "Grapes" ];
fruits.shift ();
console.log (fruits);



// Drop down

var fruits = ["Apple", "Mango", "Banana", "Grapes" ];

document.write (`<select><option>${fruits[0]}<option>
    <option> ${fruits[1]} </option>
    <option> ${fruits[2]} </option>
    <option> ${fruits[3]} </option>

     </select>`);



    //  2

    var subjects = [ "Biology", "Physics", "Chemistry", "Math", "English" ] ;

    document.write ( `<select><option>${subjects[0]}</option>
        <option>${subjects[1]}<option>
        <option>${subjects[2]}<option>
        <option>${subjects[3]}<option>
        <option>${subjects[4]}<option>
</select>` )


// next Que

var mobile = [ "Motorola", "Nokia", "Samsung", "Oppo" ];

document.write (
    `Mobile: ${mobile[0]}  ${mobile[1]}  ${mobile[2]} ${mobile[3]} <br> <br> 
 `);

for (var i = mobile.length -1; i >-0; i--) {
    document,write (`out: <br> ${mobile[i]} <br> `)
}




 