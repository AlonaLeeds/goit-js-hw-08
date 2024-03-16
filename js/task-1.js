const categoriesList = document.querySelectorAll('ul#categories li.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
    const categoryTitle = category.firstElementChild.textContent;
    const categoryQuantity = category.lastElementChild.children.length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryQuantity}`);    
})
