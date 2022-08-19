const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const resetButton = document.querySelector("#reset-button");
const errorMessage = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".number-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 2, 1];
resetButton.style.display = "none";

const toggleResetBtn = () => {
  checkButton.style.display = "none";
  resetButton.style.display = "block";
};

const defaultValues = () => {
  errorMessage.style.display = "none";
  billAmount.value = "";
  cashGiven.value = "";
  checkButton.style.display = "block";
  resetButton.style.display = "none";
  noOfNotes.forEach((el) => {
    el.innerText = "";
  });
};

const clickHandler = () => {
  errorMessage.style.display = "none";
  if (parseInt(billAmount.value) > 0) {
    if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
      const amountReturned = cashGiven.value - billAmount.value;
      calculateAmount(amountReturned);
      toggleResetBtn();
    } else {
      showErrorMessage("Cash given should be more than Bill Amount");
      toggleResetBtn();
    }
  } else {
    showErrorMessage("Invalid Bill Amount");
    toggleResetBtn();
  }
};

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

checkButton.addEventListener("click", clickHandler);
resetButton.addEventListener("click", defaultValues);
