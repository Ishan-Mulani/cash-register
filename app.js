const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".number-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 2, 1];

function clickHandler() {
  errorMessage.style.display = "none";

  if (billAmount.value >= 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountReturned = cashGiven.value - billAmount.value;
      calculateAmount(amountReturned);
    } else {
      showErrorMessage("Need more cash");
    }
  } else {
    showErrorMessage("Bill amount can't be negative.");
  }
}

function calculateAmount(amountReturned) {
  for (var i = 0; i < availableNotes.length; i++) {
    denomination = Math.trunc(amountReturned / availableNotes[i]);
    amountReturned = amountReturned % availableNotes[i];
    noOfNotes[i].innerText = denomination;
  }
}

function showErrorMessage(msg) {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
}

checkButton.addEventListener("click", clickHandler);
