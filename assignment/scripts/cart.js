console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

const maxItems = 5;

function addItem(item){
    if (basket.length < maxItems){
       basket.push(item);
       return true;
     }
     else if ( basket.length >= maxItems){
      return false;
     }
   }

addItem('taco');
addItem('berry');
addItem('pizza');
console.log(basket);

function listItems() {
for (item of basket){
    console.log(item);
}
}
listItems()

function empty(){
while(basket.length > 0){
    basket.pop();
    console.log(basket);
}
}
empty();

addItem('taco');
addItem('berry');
addItem('pizza');
addItem('tacos');
addItem('berries');
addItem('pizzas');


function isFull (){
    if (basket.length < maxItems){
         return false;
   }
   else if( basket.length >= maxItems){
    return true;
   }
}
console.log(isFull());

function removeItem(items){
    basket.indexOf(items)
}









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
