var elArr = document.querySelector('.arr')
var elReverse = document.querySelector('.arrReverse')
var arr= []
var arrReverse = []
for(var i=1;i<=100;i++){
    arr.push(i)
}



for(var a=100; a>0 ;a--){
    arrReverse.push(a)
    
}
console.log(arr);
console.log(arrReverse);
elArr.textContent= 'Barcha Sonlar: '+ arr
elReverse.textContent= "O'zgartirilgan Sonlar: "+ arrReverse