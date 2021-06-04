// Compute the final result div
function compute() {
    p = document.getElementById("principal").value;
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principle * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = "If you deposit <mark>" + principle + "</mark>,\<br\>at an interest rate of <mark>" + rate + "%</mark>.\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>";

}

// Update input range slider as movement
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}

// Validate input principal
function checkInput() {
    var principal = document.getElementById("principal").value;
    var gtZero = parseInt(principal) > 0;
    if (!gtZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();

    }
}