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
let cats = ['Kitty','Max','Little','Amber','Autumn','Kariti'];
function catHolder(catName){
    return `<div class="cat">
            ${catName}
        </div>`

}
function catList(){
    // let catPlace = document.querySelector('.catNames');
    for(const cat of cats){
        let temporaryHolder = document.createElement('ul');
        temporaryHolder.innerHTML = catHolder(cat);
        let mycat = temporaryHolder.firstChild;
        document.getElementsByClassName('catNames')[0].appendChild(mycat)
    }
}

function DisplayCat(){
    let allCats = document.querySelectorAll('.cat');
}
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