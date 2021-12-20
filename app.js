const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".number-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 2, 1];

checkButton.addEventListener("click", clickHandler);


function clickHandler() {
  errorMessage.style.display = "none";

  if (billAmount.value >= 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountReturned = cashGiven.value - billAmount.value;
      calculateAmount(amountReturned);
    } else {
      showErrorMessage("Cash given should be more than Bill amount");
    }
  } else {
    showErrorMessage("Invalid bill amount");
  }
}


function calculateAmount(amountReturned) {
  for (var i = 0; i < availableNotes.length; i++) {
    denomination = Math.trunc(amountReturned / availableNotes[i]);
    amountReturned %= availableNotes[i];
    noOfNotes[i].innerText = denomination;
  }
}

function showErrorMessage(msg) {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
}


