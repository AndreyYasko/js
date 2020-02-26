'use strict';
//lesson-3.2:
let N=10;
for(let i=0;i<=N;i++){
    if(i==0){console.log(i+" - это ноль");}
    else if(i%2){console.log(i+" - нечетное число");}
    else {console.log(i+" - четное число");}
}

//lesson-3.3:
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [    {userId: 10,
                    userName: "Alex",
                    text: "lorem ipsum",
                    rating: {likes: 10,dislikes: 2 //вывести это число
                             }
                    },
                    {userId: 5, //вывести это число
                    userName: "Jane",
                    text: "lorem ipsum 2", //вывести этот текст
                    rating: {likes: 3,dislikes: 1
                            }
                    },
                ]
            }

console.log("post.author:"+post.author);
console.log("post[author]: "+post["author"]);
console.log("post.comments[0].userId:"+post.comments[0]["userId"]);
console.log("post.comments[0][rating][dislikes]:"+post.comments[0]["rating"]["dislikes"]);
console.log("post.comments[1][userId]:"+post.comments[1]["userId"]);
console.log("post.comments[1][text]:"+post.comments[1]["text"]);  
    //lesson 3.4 ?
 /*   4 Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
    15%, можете использовать метод forEach https://mzl.la/1AOMMWX : */
    const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
    ]; 
   //трудна было для понимания эта задача с функцией обратного вызова, перепробовал методом тыка кучу вариантов
    function DiscountPrice(element,index,array) {
        console.log('Price of Product['+element["id"]+'] with Discount 15% ='+ 0.85*element["price"]);
      }
    products.forEach(DiscountPrice);


   //lesson 3.5 ?
/* Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ */
const produkts = [  { id: 3, price: 127, photos: [ "1.jpg", "2.jpg", ] },
                    { id: 5, price: 499, photos: [] },
                    { id: 10,price: 26,  photos: ["3.jpg"] },
                    { id: 8, price: 78, },
                 ]; 
//filter не смог сделать, не удалось разобраться как сравнивать  в свойстве photos есть фото или нет
//sort тоже не смог сделать.
const result = produkts.filter(produkt => produkt["photos"] >0);
console.log(result);


//lesson3.6
       for (let i=0;i<10;i++,console.log(i)){}
    //lesson 3.7
    let x="";
    let y="x";
    for(let row=0;row<=20;row++){
       console.log(x);
       x=x+y;
    }