const allCategories = document.querySelector("ul#categories");

const numberCategories = allCategories.querySelectorAll(".item");
console.log(`Number of categories: `, numberCategories.length);


numberCategories.forEach((element) => {
    console.log("Category:", element.querySelector("h2").textContent);
    console.log("Elements:", element.querySelectorAll("li").length);
  });