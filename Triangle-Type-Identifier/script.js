(function(divEl) {
    var side_a = divEl.querySelector("#side_a");
    var side_b = divEl.querySelector("#side_b");
    var side_c = divEl.querySelector("#side_c");
    var result = divEl.querySelector(".result");


    function validateIfNumber(input) {
        if ( input.value == "" ) return; 
        if ( isNaN(input.value) ) {
            window.alert("Input must be a number");
            return false;
        }
        return true;       
    }

    function isTriangle(side_a, side_b, side_c) {
        let isTriangle = true;
        isTriangle = ( Math.abs(side_b - side_c) < side_a && side_a < side_b + side_c );
        isTriangle = ( Math.abs(side_a - side_c) < side_b && side_b < side_a + side_c );
        isTriangle = ( Math.abs(side_a - side_b) < side_c && side_c < side_a + side_b );

        return isTriangle;
    }

    function triangleType(side_a, side_b, side_c) {
        let type = "Scalene";
        if(side_a === side_b && side_b === side_c) type = "Equilateral";
        else if(side_a === side_b || side_a === side_c || side_b === side_c) type = "Isosceles";

        return type;   
    }


    side_a.addEventListener("keyup", function(ev) {
        if(!validateIfNumber(ev.target)) ev.target.value = "";
    });

    side_b.addEventListener("keyup", function(ev) {
        if(!validateIfNumber(ev.target)) ev.target.value = "";
    });

    side_c.addEventListener("keyup", function(ev) {
        if(!validateIfNumber(ev.target)) ev.target.value = "";
    });

    divEl.querySelector(".btnCalcular").addEventListener("click", function(ev) {
        ev.stopPropagation();
        let a = parseInt(side_a.value);
        let b = parseInt(side_b.value);
        let c = parseInt(side_c.value);
        if(isTriangle(a, b, c)) {
            result.innerHTML = `The triangle is of type ${triangleType(a, b, c)}`; 
        } else {
            result.innerHTML = "It was not possible to identify a triangle with these side values";
        }
    });



})(document.getElementById("triangle-type-identifier"))