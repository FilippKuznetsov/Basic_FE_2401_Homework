let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3}
];



//Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID


let evenID= goods.filter(el=>el.id%2===0);
console.log(evenID);


//Посчитайте сумму всех товаров, учитывая их количество

let sumGoods=goods.reduce((sum,el)=>(sum+el.price),0);
console.log('Sum all goods is: '+sumGoods);


//Найдите значение элемента массива (продукта), цена которого будет кратна 5

const elPriceMultiplyFive=goods.find(elem=>elem.price%5 === 0);
console.log(elPriceMultiplyFive);


//Найдите индекс элемента, count которого будет больше 11

const indexElmoreElleven=goods.findIndex(el=>el.count > 11);
console.log(indexElmoreElleven);



//Посчитайте количество элементов, count которых является нечетным числом

constUnEvenCounts=goods.filter(el=>el.count %2 !== 0);
console.log(constUnEvenCounts);


//Посчитайте количество элементов, имя которых начинается на “Т”


const countElWithT=goods.reduce((akkSum,el)=>( el.title[0]==='Т') ? akkSum +el.count : akkSum ,0);
console.log(countElWithT);




//Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)


const elWithDiscount=goods.map((el)=>el.price=el.price-(el.price*35/100));
console.log(elWithDiscount);



//Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)


const goodsChangeCount=goods.map((el)=>el.count=0);


