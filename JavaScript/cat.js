// let cat = document.getElementById('mycat')
// let count = 0;
// let catName = 'Kitty';
// let cat2Name = 'Max';
// cat.addEventListener('click', function(){
//     count += 1;
//     document.getElementById('clicks').innerText = count;
// });
// var caption = document.querySelector('.caption');
// caption.textContent = catName;

// let cat2 = document.getElementById('cat2');
// let count2 = 0;
// cat2.addEventListener('click', function(){
//     console.log('hey')
//     count2 += 1;
//     document.getElementById('clicks2').innerText = count2;
// });
// list of cat names 
// let cats = ['Kitty','Max','Little','Amber','Autumn','Kariti'];
let catInformation = {beautiful:'images/beautiful.jpeg', cute:'images/cute.jpeg', 
                        little:'images/little.jpeg', amber:'images/amber.jpeg',
                        autumn:'images/autumn.jpeg',kariti:'images/kariti.jpeg'};
let pictureContainer = document.querySelector('.mycats');
function catHolder(catName){
    return `<p class="cat">
        ${catName}
    </div>`
    

}
// This function contains the place holder for the cat name and number of clicks
function pictureHolder(picName){
    return `<div class="clickcat">
                <p>You clicked me <span id="clicks">0</span> times</p>
                <img id="mycat" src="images/${picName}.jpg">
                <p class="caption">My name is: ${picName}</p>
            </div>`
}
// This loops through a list of all cat names and displays their pictures
function displayCatPicture(){
    let allCats = document.querySelectorAll('.cat')
    allCats.forEach(function(cat){
        // Listens for clicks on a cat name
        cat.addEventListener('click',function(){
            let catpicture = pictureHolder(cat.innerText)
            pictureContainer.innerHTML = catpicture
            countClicks();
        });

    });
}
// This function counts the number of clicks on a picture
function countClicks(){
    let count=0;
    let clickcat = document.getElementById('mycat')
        clickcat.addEventListener('click',function(){
            count += 1;
            console.log(count)
                document.getElementById('clicks').innerText = count;
            });
}
// This function creates a cat
function catList(){
    let cats = Object.keys(catInformation);
    for(const cat of cats){
        let temporaryHolder = document.createElement('ul');
        temporaryHolder.innerHTML = catHolder(cat);
        let catToAdd= temporaryHolder.firstChild;
        document.getElementsByClassName('catNames')[0].appendChild(catToAdd)
    }
}

// function DisplayCat(){
//     let allCats = document.querySelectorAll('.cat');
//     allCats.forEach(function(cat){
//         cat.addEventListener('click',function(){
//         })
//     });
   
// }

// clear the screen for testing
// document.body.innerHTML = '';

// var nums = [1,2,3];

// // Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {

//     // This is the number we're on...
//     var num = nums[i];

//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;

//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', (function(numCopy) {
//         return function() {
//             alert(numCopy);
//         };
//     })(num));

//     document.body.appendChild(elem);
// };
catList();
const bookMarks = {
    x: 1,
    y: 2,
    z: 3
  };
  for (var key in bookMarks) {
    console.log(bookMarks[key])
}
displayCatPicture();
pictureHolder('beautiful')