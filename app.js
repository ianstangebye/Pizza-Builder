const order = {
    toppings: [],
    basePrice: 80,
    total: 80
}

const toppings = [{
        name: 'pepperoni',
        price: 20
    },{
        name: 'mushroom',
        price: 40
    }, {
        name: 'cheese',
        price: 0
    }, {
        name: 'pineapple',
        price: 30
    }
]

// Cache topping containers
let $pizza  = null;
let $mushroom = null;
let $pepperoni = null;
let $pineapple = null;

$(document).ready(function () {


    $('.btn-topping').click(function(e){
        let id = e.target.id;

        $[id]= $('.'+id+'s');


        if(id == 'cheese'){
            $('.pizza').toggleClass('no-cheese');

            if($('.pizza').hasClass('no-cheese')){
                order.toppings = jQuery.grep(order.toppings, function(value) {
                    return value != id;
                });

                order.total -= toppings[e.target.value].price;
                updateOrder();
            } else {
                order.toppings.push(id);
                order.total += toppings[e.target.value].price;
                updateOrder();
            }
        } else {

            if($[id].children().length == 0){
                var div = generateTopping(toppings[e.target.value]);
                $[id].append(div);
                order.toppings.push(id);
                order.total += toppings[e.target.value].price;
                updateOrder();
            } else {
                $[id].empty();
    
                order.toppings = jQuery.grep(order.toppings, function(value) {
                    return value != id;
                });
    
                order.total -= toppings[e.target.value].price;
                updateOrder();
            }

        }

         
    });

});

// Automatically generate the toppings based on the name and id from the button.
function generateTopping(topping) {
    const looper = Array(10).fill(topping.name);
    return looper.map(item => `<div class="${item}"></div>`).join('');
}

function updateOrder() {
    let $orderTotal = $('#total').text(order.total);

}