const container = document.querySelector(".container");
const createBtn = document.querySelector(".create-btn");
const form = document.querySelector(".form-container");
const close = document.querySelector(".fa-times-circle");
const cornerModal = document.querySelector(".corner-modal");

function formContainer() {
  container.style.display = "flex";
  createBtn.style.display = "none";
  form.style.display = "block";
}

function closeForm() {
  form.style.display = "none";
  createBtn.style.display = "flex";
}

function getValue() {
  const shapeName = document.querySelector("#inputShape").value;
  const height = document.querySelector("#height").value;
  const width = document.querySelector("#width").value;
  const xPosition = document.querySelector("#xPosition").value;
  const yPosition = document.querySelector("#yPosition").value;
  const addShapeBtn = document.querySelector("#add-shape");
  form.style.display = "none";
  cornerModal.style.display = "flex";

  var shape = document.createElement("div");
  shape.classList.add("shape");

  container.style.display = "block";
  shape.style.display = "block";
  shape.style.position = "absolute";
  shape.style.backgroundColor = "rgba(9, 72, 234, 0.2)";
  shape.style.height = `${height}px`;
  shape.style.width = `${width}px`;
  shape.style.marginLeft = `${xPosition}px`;
  shape.style.marginTop = `${yPosition}px`;
  shape.classList.add("shape");
  container.appendChild(shape);

  function computeValues() {
    const shapeNameModal = document.querySelector(".shape-name-modal");
    const shapeXPositionModal = document.querySelector(
      ".shape-x-position-modal"
    );
    const shapeYPositionModal = document.querySelector(
      ".shape-y-position-modal"
    );

    const xPos = window.getComputedStyle(shape).marginLeft;
    const yPos = window.getComputedStyle(shape).marginTop;

    let x = parseInt(xPos);
    let y = parseInt(yPos);

    shapeNameModal.innerHTML = `${shapeName}`;
    shapeXPositionModal.innerHTML = `Mouse X - ${x}`;
    shapeYPositionModal.innerHTML = `Mouse Y - ${y}`;
  }

  shape.addEventListener("mouseenter", computeValues);

  function addShape() {
    cornerModal.style.display = "none";
    formContainer();
  }
  addShapeBtn.addEventListener("click", addShape);
}
