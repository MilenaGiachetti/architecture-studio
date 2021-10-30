let message = document.getElementById("message_id");
let counter = document.getElementById("message_counter");

message.addEventListener("keyup", (e) => {
    let count = e.target.value.length;
    counter.textContent = count;
})