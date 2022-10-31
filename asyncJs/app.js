// // // // // document.getElementById("button").addEventListener("click" , getData);

// // // // // function getData()
// // // // // {
// // // // //     // console.log(1);
// // // // //     const xhr = new XMLHttpRequest();
// // // // //     xhr.open("GET" , "data.txt" , true);

// // // // //     xhr.onprogress = function()
// // // // //     {
// // // // //         console.log("The data is being loaded");
// // // // //     }

// // // // //     xhr.onload = function()
// // // // //     {
// // // // //         console.log(this.readyState);
// // // // //         if(this.status === 200 && this.readyState === 4)
// // // // //         {
// // // // //             document.querySelector(".heading").append(document.createTextNode(this.responseText));
// // // // //         }
// // // // //     }

// // // // //     xhr.onerror = function()
// // // // //     {
// // // // //         console.log("error");
// // // // //     }
// // // // //     xhr.send();
// // // // // }

// // // // document.getElementById("button1").addEventListener("click" , customerData);

// // // // function customerData(e)
// // // // {
// // // //     const xhr = new XMLHttpRequest();

// // // //     xhr.open("GET" , "customer.json" , true);
// // // //     console.log(1);
// // // //     xhr.onload = function()
// // // //     {
// // // //         if(this.status === 200)
// // // //         {
// // // //             const customer = JSON.parse(this.responseText);
// // // //             const output = `<ul>
// // // //             <li>ID : ${customer.id}</li>
// // // //             <li>NAME : ${customer.name}</li>
// // // //             <li>PHONE : ${customer.phone}</li>
// // // //             <li>COMPANY : ${customer.company}</li>
// // // //             </ul>`;
// // // //             document.getElementById("customer").innerHTML = output;
// // // //         }
// // // //     }

// // // //     xhr.send();
// // // // }

// // // // document.getElementById("button2").addEventListener("click" , customersData);

// // // // function customersData(e)
// // // // {
// // // //     const xhr = new XMLHttpRequest();

// // // //     xhr.open("GET" , "customers.json" , true);
// // // //     console.log(1);
// // // //     xhr.onload = function()
// // // //     {
// // // //         if(this.status === 200)
// // // //         {
// // // //             const customers = JSON.parse(this.responseText);
// // // //             let output = '';
// // // //             customers.forEach(customer=>{
// // // //                 output+=`<ul>
// // // //                 <li>ID : ${customer.id}</li>
// // // //                 <li>NAME : ${customer.name}</li>
// // // //                 <li>PHONE : ${customer.phone}</li>
// // // //                 <li>COMPANY : ${customer.company}</li>
// // // //                 </ul>`;
// // // //             });
// // // //             document.getElementById("customers").innerHTML = output;
// // // //         }
// // // //     }

// // // //     xhr.send();
// // // // }

// // // //-----EXTERNAL API ----//

// // // document.querySelector(".get-jokes").addEventListener("click" , getJokes);

// // // function getJokes(e)
// // // {
// // //     console.log(1);
// // //     const text = document.querySelector('input[type="text"]').value;
// // //     console.log(text);
// // //     const xhr = new XMLHttpRequest();
// // //     xhr.open("GET" , `https://api.chucknorris.io/jokes/random?category=${text}`,true);
// // //     xhr.onload = function()
// // //     {
// // //         if(this.status === 200)
// // //         {
// // //             // console.log(11);
// // //             let output ;
// // //             const jokes = JSON.parse(this.responseText);
// // //             console.log(jokes.value);
// // //             output = `<li>${jokes.value}</li>`
// // //             document.querySelector(".jokes").innerHTML = output;
// // //         }
// // //     }
// // //     xhr.send();
// // //     e.preventDefault();
// // // }

// // console.log(1);

// // setTimeout(function(){
// //     console.log(2);
// // },3000);
// // console.log(3);
// // console.log(4);

// var b = 10 ;

// function p()
// {
//     // var c = 20 ;
//     q();
//     function name ()
//     {
//         console.log("SIDDHARTH");
//     }
//     function q()
//     {
//         // var c = 50 ;
//         console.log(c);
//         name();
//     }
// }
// // c = 90 ;
// var c = 90;
// p();
// // c = 90;

// var a = function b(){
//     console.log(b);
//     // console.log(b());
// };

// a();


