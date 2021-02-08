const apiBase = "https://www.themealdb.com/api/json/v1/1/search.php";

const getMealData = mealName => {
        const url = `${apiBase}?f=${mealName}`;
        fetch(url)
                .then(response => response.json())
                .then(data => updateUI(data))
}


const searchBtn = document.getElementById("search_button");
searchBtn.addEventListener("click", () => {
        const inputMeal = document.getElementById("meal-name").value;
        getMealData(inputMeal)
})
const updateUI = data => {
        const mealList = document.getElementById("meal-list");
        mealList.innerHTML = `
               
        <div class="row row-cols-1 row-cols-md-8 g-4">
                <div class="col">
                        <div class="card h-100">
                                <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${data.meals[0].strMeal}</h5>
                                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                        </div>
                </div>
                <div class="col">
                <div class="card h-100">
                <img src="${data.meals[1].strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                        <h5 class="card-title">${data.meals[1].strMeal}</h5>
                        <p class="card-text">This is a short card.</p>
                </div>
                </div>
                </div>
                <div class="col">
                <div class="card h-100">
                <img src="${data.meals[2].strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                        <h5 class="card-title">${data.meals[1].strMeal}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
                </div>
                <div class="col">
                <div class="card h-100">
                <img src="${data.meals[3].strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                        <h5 class="card-title">${data.meals[3].strMeal}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
                </div>
                </div>
               
                `
}