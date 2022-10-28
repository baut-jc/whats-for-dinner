// Query Selectors
var selections = document.getElementsByClassName('food-category');
var sidesButton = document.querySelector('#side-dish');
var mainsButton = document.querySelector('#main-dish');
var dessertsButton = document.querySelector('#dessert');
var entireMealButton = document.querySelector('#entire-meal');
var letsCookBtn = document.querySelector('#lets-cook')

//Event Listeners
letsCookBtn.addEventListener('click', cookThis);

//Global Variables
var sideDishes = [ 
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
];
var mainDishes = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesan',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza',
];
var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
];
var entireMeal = [] 

//Functions
function cookThis() {
    event.preventDefault()
    var randomSideDish = Math.floor(Math.random() * sideDishes.length);
    console.log('sideDish: ', randomSideDish)
    var randomMainDish = Math.floor(Math.random() * mainDishes.length);
    console.log('mainDish: ', randomMainDish)
    var randomDessert = Math.floor(Math.random() * desserts.length);
    console.log('dessert: ', randomDessert)
    if (sidesButton.checked) {
        return sideDishes[randomSideDish]
    } else if (mainsButton.checked) {
        return mainDishes[randomMainDish]
    } else if (dessertsButton.checked) {
        return desserts[randomDessert]
    } else {
        return `${mainDishes[randomMainDish]} with a side of ${sideDishes[randomSideDish]} and ${desserts[randomDessert]}`)
    }
}

