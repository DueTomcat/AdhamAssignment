// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

export function renderItems(list) {
  const container = document.querySelector("#list");
  container.replaceChildren();

  list.forEach((item) => {
    const element = document.createElement("li");
    element.classList.add("entry");
    element.textContent = `${item.name} - ${item.price} EGP`;
    container.append(element);
  });
}

export function matching() {
  return items.filter((item) => item.price > 100);
}

export function start() {
  renderItems(items);
  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}
