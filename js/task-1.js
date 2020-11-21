const categoryItems = document.querySelectorAll(".item");

console.log(`В списке ${categoryItems.length} категории`);

categoryItems.forEach((categories) => {
  console.log(`Категория: ${categories.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${categories.querySelectorAll("li").length}`);
});
