let cat = document.getElementById('mycat')
let count = 0;
let catName = 'Kitty';
let cat2Name = 'Max';
cat.addEventListener('click', function(){
    count += 1;
    document.getElementById('clicks').innerText = count;
});

let cat2 = document.getElementById('cat2');
let count2 = 0;
cat2.addEventListener('click', function(){
    console.log('hey')
    count2 += 1;
    document.getElementById('clicks2').innerText = count2;
});
