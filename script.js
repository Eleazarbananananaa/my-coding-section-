function runCode() {
    let code = document.getElementById("code").value;
    try {
        let result = eval(code);
        document.getElementById("output").innerText = result;
    } catch (error) {
        document.getElementById("output").innerText = "Error: " + error.message;
    }
}
