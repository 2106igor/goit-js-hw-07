function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
  // Отримання елементів DOM
  const input = document.querySelector("#controls input");
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const boxesContainer = document.querySelector("#boxes");
  
  // Функція створення елементів
  function createBoxes(amount) {
	destroyBoxes(); // Очищуємо попередні елементи
	const elements = [];
  
	let size = 30;
	for (let i = 0; i < amount; i++) {
	  const box = document.createElement("div");
	  box.style.width = `${size}px`;
	  box.style.height = `${size}px`;
	  box.style.backgroundColor = getRandomHexColor();
	  elements.push(box);
	  size += 10; // Збільшуємо розмір на 10px для кожного наступного елементу
	}
  
	boxesContainer.append(...elements); // Додаємо всі елементи за одну операцію
  }
  
  // Функція очищення елементів
  function destroyBoxes() {
	boxesContainer.innerHTML = ""; // Очищуємо контейнер
  }
  
  // Обробник події для кнопки Create
  createBtn.addEventListener("click", () => {
	const amount = Number(input.value);
	if (amount >= 1 && amount <= 100) {
	  createBoxes(amount);
	  input.value = ""; // Очищуємо значення інпуту
	}
  });
  
  // Обробник події для кнопки Destroy
  destroyBtn.addEventListener("click", destroyBoxes);