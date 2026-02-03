function Add(){
    let a = +(document.getElementById("num1").value);
    let b = +(document.getElementById("num2").value);

    document.getElementById("result").innerText = + (a +b);
}

function Sub(){
    let a = +(document.getElementById("num1").value);
    let b = +(document.getElementById("num2").value);

    document.getElementById("result").innerText = + (a -b) ;
}

function Mul(){
    let a = +(document.getElementById("num1").value);
    let b = +(document.getElementById("num2").value);

    document.getElementById("result").innerText = + (a *b);
}

function Div(){
    let a = +(document.getElementById("num1").value);
    let b = +(document.getElementById("num2").value);

    if( b === 0) {
    document.getElementById("result").innerText = "vô vọng";
    } else {
        document.getElementById("result").innerText = + (a/b);
    }
}