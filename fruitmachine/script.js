let item1 = document.getElementById("fruit1");
let item2 = document.getElementById("fruit2");
let item3 = document.getElementById("fruit3");

var fruits = ["&#127817; ", "&#127824; ", "&#127822; ", "&#127827; ", "&#55; ", "&#127820; ","&#127818; "];

random_fruit();

function random_fruit() {
    var randomfruit1 = fruits [Math.floor(Math.random() * fruits.length)];
          fruit1.innerHTML = randomfruit1;

    var randomfruit2 = fruits [Math.floor(Math.random() * fruits.length)];
          fruit2.innerHTML = randomfruit2;
            
    var randomfruit3 = fruits [Math.floor(Math.random() * fruits.length)];
          fruit3.innerHTML = randomfruit3;
}
          



