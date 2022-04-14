const contentRating = document.querySelector(".card__content--rating");
const contentThankYou = document.querySelector(".card__content--thankyou");

const result = document.querySelector(".card__result").firstChild;
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const radioButtons = Array.from(
    document.querySelectorAll('input[type="radio"]')
  );
  e.preventDefault();
  if (radioButtons.some((button) => button.checked)) {
    let data = new FormData(form);
    for (let entry of data.values()) {
      if (entry) result.textContent += entry;
      break;
    }
    contentRating.classList.toggle("hidden");
    contentThankYou.classList.toggle("hidden");
  } else {
    const labels = document.querySelectorAll('label[for^="rate_"]');
    for (let label of labels) {
      label.style.animation = "1.5s 1 warning";
      setTimeout(() => (label.style.animation = ""), 1500);
    }
  }
});
