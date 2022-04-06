const card = document.querySelectorAll(".card");

const newParagraph = document.createElement("p");
newParagraph.classList.add("card__text");
const newText = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. Augue lacus viverra vitae congue eu consequat ac."
);
newParagraph.appendChild(newText);
const maxHeight = 400;

// create dynamic content
card.forEach((entry) => {
  let cardHeight;
  do {
    entry.appendChild(newParagraph.cloneNode(true));
    cardHeight = entry.offsetHeight;
  } while (maxHeight > cardHeight);
});
