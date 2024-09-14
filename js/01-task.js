const refs = {
  mainForm: document.querySelector("#mainForm"),
  container: document.querySelector(".js-container"),
};

refs.mainForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const elementsAmount = Number(form.elements.amount.value);

  if (isNaN(elementsAmount)) {
    alert("Enter a number please!");
    return;
  } else if (elementsAmount <= 0) {
    alert("Enter a positive number please!");
    return;
  }

  refs.container.innerHTML = createCircles(elementsAmount);

  //   [...refs.container.children].forEach((circle) =>
  //     circle.addEventListener("click", handleCircleDelete)
  //   );

  refs.container.addEventListener("click", handleCircleDelete);

  form.reset();
}

function createCircles(amount) {
  let markup = "";
  for (let i = 0; i < amount; i += 1) {
    const bgColor = generateRandomColor();
    markup += `<div class="circle" style="background-color: ${bgColor};"></div>`;
  }
  return markup;
}

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// function handleCircleDelete(event) {
//   event.target.remove();
// }

function handleCircleDelete(event) {
  //   event.target.remove();
  if (!event.target.classList.contains("circle")) {
    return;
  }
  event.target.remove();
}
