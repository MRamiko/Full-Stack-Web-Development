// ! სამი კატეგორიის სხვადასხვა მასივი
// ! სახელწოდება, ფასი, რაოდენობა
// ! ამოწმებთ არსებობს კონკრ. პროდუქტი. (თუ არ არის დამიწეროს - ამოწურულია მარაგიდან) 

// ! თუ არსებობს ვამატებთ ცალკე მასივში - ცარიელ მასივში.
// ! დაითვალოს პროდუქტების რაოდენობა & მითხრას სტრინგად რა რაოდენობაა პროდუქტების 
// ! ვითვლიტ პროდუქტების ფასის ჯამს. 
// ! 100 -ზე მეტის ღირებულების სემთხვევაში, ამოვაკლოთ ერთი პროდუქტი, რომ ჯამი იყოს 100-მდე; (splice)

const products=['Tomato', 'Potato', 'Cucumber', 'Onion', 'Carrot', 'Pepper', 'Garlic', 'Lettuce', 'Spinach', 'Broccoli'];
const price=[1.5, 0.8, 1.2, 0.5, 0.9, 1.3, 2.0, 1.0, 1.4, 1.6];
const quantity=[10, 20, 15, 30, 25, 18, 12, 22, 17, 14];
const cart=[];
const item='Tomato';
if(products.includes(item)){
    cart.push(item);
    console.log(`${item} has been added to the cart.`);
    console.log(`Cart: ${cart.join(', ')}`);
    quantity[products.indexOf(item)]--;
}
else{
    console.log(`${item} is out of stock.`);
}
//checkout
if(cart.length>0){
    let total=0;   
    for(let i=0; i<cart.length; i++){
        total+=price[products.indexOf(cart[i])];
    }
    while(total>100){
        const removedItem=cart.pop();
        total-=price[products.indexOf(removedItem)];
        console.log(`${removedItem} has been removed from the cart to keep the total under $100.`);
    }
    console.log(`Total: $${total}`);
}


