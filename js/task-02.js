const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const ingridientsItem = ingredients.map(ingridient => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingridient;

  console.log(item);
  return (item);
 
})

console.log(ingridientsItem);

ingredientsList.append(...ingridientsItem);