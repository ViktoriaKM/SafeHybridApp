


// load the submitted information first
// instead of trying to make it change the innerHTML, change the individual characteristics of the types of selections...
window.onload = function() {
    // retrieve the saved variables
    // https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem

    var startDate = localStorage.getItem("start-date");
    document.getElementById("start-date").value = startDate;
    var endDate = localStorage.getItem("end-date");
    document.getElementById("end-date").innerHTML = endDate;
    var radios = localStorage.getItem(radios[radio].id);
    document.getElementById(radios[radio].id).innerHTML = radios;
    var rating = localStorage.getItem("rating");
    document.getElementById("rating").innerHTML = rating;
    var food = localStorage.getItem("food");
    document.getElementById("food").innerHTML = food;
    var drink = localStorage.getItem("drink");
    document.getElementById("drink").innerHTML = drink;
    var mood = localStorage.getItem("mood");
    document.getElementById("mood").innerHTML = mood;
    var FavoriteCharacter = localStorage.getItem("favorite-character");
    document.getElementById("favorite-character").innerHTML = FavoriteCharacter;
    var HatedCharacter  = localStorage.getItem("least-favorite-character");
    document.getElementById("least-favorite-character").innerHTML = HatedCharacter;
    var description = localStorage.getItem("description");
    document.getElementById("description").innerHTML = description;
}
// http://blog.teamtreehouse.com/storing-data-on-the-client-with-localstorage

var list = document.getElementsByTagName("input");
var buttonEl = document.getElementById("submit-button-id");

 buttonEl.addEventListener('mouseover', function () {
     var colors = ['#86231e', '#555033', '#716b47', '#978e63'],
         step = 0,

     animateFunction = function () {
         if (step === colors.length) {
             buttonEl.style.backgroundColor = '';
         } else {
             buttonEl.style.backgroundColor = colors[step];
             step += 1;
             window.setTimeout(animateFunction, 500);
         }
     };

     window.setTimeout(animateFunction, 500);
 });



//buttonEl = document.getElementById("submit-button-id");
 //buttonEl.addEventListener("click", function()
 window.onload = function()
 {
        //if(localStorage){
        // local Storage is supported
        // event-listener for form-submission:
        document.getElementById("opinions").addEventListener("submit", function()
        alert("the form was submitted");
        // get the elements of the form inputs:

        var startDate = document.getElementById("start-date");
        var endDate = document.getElementById("end-date");
        var radios = document.getElementsByName('rewatch');
        var rating = document.getElementById("rating");
        var food = document.getElementById("food");
        var drink = document.getElementById("drink");
        var mood = document.getElementById("mood");
        var FavoriteCharacter = document.getElementById("favorite-character");
        var HatedCharacter = document.getElementById("least-favorite-character");
        var description = document.getElementById("description");
        // save their values in local storage:
        localStorage.setItem(food.id.toString(), food.value.toString());
        localStorage.setItem(drink.id.toString(), drink.value.toString());
        localStorage.setItem(mood.id.toString(), mood.value.toString());
        localStorage.setItem("start-date", startDate.value);
        //setInterval(function(){
        //    localStorage.setItem('start-date', startDate.value);
        //    }, 1000);
        localStorage.setItem("end-date", endDate.value);
        localStorage.setItem("favorite-character", FavoriteCharacter.value.toString());
        localStorage.setItem("least-favorite-character", LeastFavoriteCharacter.value.toString());
        localStorage.setItem(description.id.toString(), description.value.toString());
        for(radio in radios) {
        radios[radio].onclick = function() {
        // if no  is checked, log no,  else log yes...
        if (radios[radio].checked) {
        localStorage.setItem(this.id, this.value);
         }
         }
         };
         rating.addEventListener("change", function()
         {
         localStorage.setItem("rating", rating.value);
         }

        );
        )



    }
    else {
    // use cookie-library since localStorage is unsupported
    //http://stackoverflow.com/questions/16206322/how-to-get-js-variable-to-retain-value-after-page-refresh
    //https://github.com/jaaulde/cookies
    $.cookies.set(food.id, food.value.toString());
    $.cookies.set(drink.id, drink.value.toString());
    $.cookies.set(mood.id, mood.value.toString());
    $.cookies.set("start-date", startDate.value);
    $.cookies.set("end-date", endDate.value);
    $.cookies.set("favorite-character", FavoriteCharacter.value.toString());
    $.cookies.set("least-favorite-character", LeastFavoriteCharacter.value.toString());
    $.cookies.set(description.id, description.value.toString());
    $.cookies.set(key, value);
    $.cookies.set(key, value);
    for(radio in radios) {
            radios[radio].onclick = function() {
            // if no  is checked, log no,  else log yes...
            if (radios[radio].checked) {
            $.cookies.set(this.id, this.value);
             }
             }
             };
             rating.addEventListener("change", function()
             {
             $.cookies.set("rating", rating.value);
             }
    }

 }

 //);




// saves information about an individual movie/series
// function saveInformation() {
   //alert("The form was submitted");
    //document.getElementById("message").innerHTML = "Thanks for submitting your opinions about movie x";
    // document.getElementById("opinions").submit();
    // loop through the input-elements in the form and store their values
//    var elements = document.getElementsByTagName("input");
//    for (var i = 0; i < elements.length; i++) {
//        console.log(elements[i]);
//        storage.set(elements[i].value);
//        }
//     localStorage.setItem("typeOfFood", typeOfFood);
//    }

    // alternatively, give each input-field a common class-name and loop through like an array
    // http://stackoverflow.com/questions/18661521/looping-through-form-fields-with-different-names