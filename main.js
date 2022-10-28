<<<<<<< Updated upstream
=======
// Query Selectors
var selections = document.getElementsByClassName('food-category');
var sidesButton = document.querySelector('#side-dish');
var mainsButton = document.querySelector('#main-dish');
var dessertsButton = document.querySelector('#dessert');
var entireMealButton = document.querySelector('#entire-meal');
var letsCookBtn = document.querySelector('#lets-cook')
var potImage = document.querySelector('.result-img')
var mealIntro = document.querySelector('.intro-to-meal')
var foodResult = document.querySelector('.food-result')
var clearBtn = document.querySelector('.clear-btn')

//Event Listeners
letsCookBtn.addEventListener('click', cookThis);
clearBtn.addEventListener('click', refreshFood);

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
        foodResult.innerText = `${sideDishes[randomSideDish]}!`
    } else if (mainsButton.checked) {
        foodResult.innerText = `${mainDishes[randomMainDish]}!`
    } else if (dessertsButton.checked) {
        foodResult.innerText = `${desserts[randomDessert]}!`
    } else {
        foodResult.innerText = `${mainDishes[randomMainDish]} with a side of ${sideDishes[randomSideDish]} and ${desserts[randomDessert]}!`
    }
    potImage.classList.add('hidden')
    mealIntro.classList.remove('hidden')
    foodResult.classList.remove('hidden')
    clearBtn.classList.remove('hidden')
}

function refreshFood() {
   // as opposed to the function
        // potImage.classList.add('hidden')
        // mealIntro.classList.remove('hidden')
        // foodResult.classList.remove('hidden')
        // clearBtn.classList.remove('hidden')
    //if clear //
}
    

>>>>>>> Stashed changes
