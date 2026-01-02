function bookTicket() {
    const name = document.getElementById("name").value;
    const seatType = document.getElementById("seatType").value;
    const payment = document.getElementById("payment").value;
    const notification = document.getElementById("notification").value;
    const result = document.getElementById("result");

    if (!name || !seatType || !payment || !notification) {
        result.innerHTML = "<p style='color:#ff8080;'>❌ Please fill all fields</p>";
        return;
    }

    let price = 0;

    if (seatType === "economy") {
        price = Math.floor(Math.random() * (50000 - 5000 + 1)) + 5000;
    } else {
        price = Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000;
    }

    result.innerHTML = `
        <hr>
        <p><b>Passenger:</b> ${name}</p>
        <p><b>Seat Type:</b> ${seatType.toUpperCase()}</p>
        <p><b>Ticket Price:</b> ₹${price}</p>
        <p><b>Payment Method:</b> ${payment}</p>
        <p><b>Notification:</b> ${notification}</p>
        <p style="color:#00ff99;"><b>Booking Confirmed ✅</b></p>
    `;
}
