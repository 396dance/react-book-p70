// const title1 = document.getElementById("title");
// console.log(title1);

// const title2 = document.querySelector("#title");
// console.log(title);

// const containers = document.querySelectorAll(".container");
// console.log(containers);

// const divEl = document.createElement("div");
// const pEl = document.createElement("p");
// const h2El = document.createElement("h2");
// divEl.prepend(pEl);
// divEl.prepend(h2El);
// console.log(divEl);

// const nushidaEl = document.createElement("nushidaEl");
// console.log(nushidaEl);

// const buttonEl = document.createElement("button");
// buttonEl.textContent = "ボタン";

// const divEl = document.querySelector(".container");
// divEl.appendChild(buttonEl);

// const h1El = document.getElementById("title");
// const bodyEl = document.querySelector("body");
// // bodyEl.removeChild(h1El);
// bodyEl.textContent = null;

console.log("jsファイル");

const onClickAdd = () => {
  const textEl = document.getElementById("add-text");
  console.log(textEl.value);

  const text = textEl.value;
  textEl.value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = text;

  const button = document.createElement("button");
  button.textContent = "削除";

  button.addEventListener("click", () => {
    const deleteTarget = button.closest("li");

    document.getElementById("memo-list").removeChild(deleteTarget);
  });
  div.appendChild(p);
  div.appendChild(button);

  li.appendChild(div);

  document.getElementById("memo-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
