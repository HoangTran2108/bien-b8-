function CM() {
    let A = document.getElementById("Amount").value;
    let FC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FC == "USD" && To == "VND") {
        Result = "Result: " + (A * 23000) + " Đ";
    }
    else if (FC == "VND"&& To =="USD"){
        Result = "Result: "+ (A / 23000) + " $";
    }
    else if (FC == "VND") {
        Result = "Result: " + A + " Đ"
    } else {
        Result = "Result: " + A + " $"
    }

    document.getElementById("Result").innerHTML = Result;
}