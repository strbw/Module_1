function calc(op) {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let result;

    switch (op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                result = "Không thể chia cho 0";
            } else {
                result = a / b;
            }
            break;
    }

    document.getElementById("result").innerText = "Result: " + result;
}
