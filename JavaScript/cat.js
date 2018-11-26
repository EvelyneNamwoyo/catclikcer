let cat = document.getElementById('mycat')
let count = 0;
cat.addEventListener('click', function(){
    count += 1;
    document.getElementById('clicks').innerText = count;
});