const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextBtn = document.querySelector("#btn-next");
const btnCheck = document.querySelector("#btn-check");
const errorMsg = document.querySelector("#error-msg");
const displayBox = document.querySelector(".display-box");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextContent = document.querySelector(".next-content");

const totalNotes = [2000, 500, 100, 20, 10, 5, 1];

displayBox.style.display = "none";
nextContent.style.display = "none";

nextBtn.addEventListener("click", checkBillAmount);

btnCheck.addEventListener("click", calculate);

function checkBillAmount() {
  if (billAmount.value > 0) {
    nextContent.style.display = "flex";
    hideMessage();
  } else {
    showMessage("bill amount is not valid");
  }
}
function calculate() {
  hideMessage();
  if (billAmount.value > 0 && cashGiven.value > 0) {
    if (billAmount.value > cashGiven.value) {
      showMessage("Cash is less than bill, please enter right amount");
    }
    hideMessage();
    const amoutToBeReturn = cashGiven.value - billAmount.value;
    returnChange(amoutToBeReturn);
  } else {
    showMessage("Enter valid bill amount and cash given to continue");
  }
}

function showMessage(message) {
  errorMsg.style.display = "block";
  errorMsg.innerText = message;
  displayBox.style.display = "none";
}

function returnChange(amoutToBeReturn) {
  displayBox.style.display = "flex";
  var amount = amoutToBeReturn;
  for (var i = 0; i < totalNotes.length; i++) {
    const numberOfNotes = Math.trunc(amount / totalNotes[i]);
    amount = amount % totalNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}
function hideMessage() {
  errorMsg.style.display = "none";
}
