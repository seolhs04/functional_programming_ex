// data
var shopping_cart = [];
var shopping_cart_total = 0;

// action
function add_item_to_cart(name, price) {
  add_item(shopping_cart, name, price);
  calc_cart_total();
}

// calc
function add_item(cart, name, price) {
  var new_cart = cart.slice();
  new_cart.push({ name: name, price: price });
  return new_cart;
}

// action
function update_shopping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (gets_free_shopping(item.price, shopping_cart_total)) {
      button.show_free_shopping_icon();
    } else {
      button.show_hide_shopping_icon();
    }
  }
}

// calc
function gets_free_shopping(price, total) {
  return price + total >= 20;
}

// calc
function calc_total(cart) {
  total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}

// calc
function calc_tax(total) {
  return total * 0.1;
}

// action
function calc_cart_total() {
  shopping_cart_total = calc_total(cart);

  set_cart_total_dom();
  update_shopping_icons();
  update_tax_dom(calc_tax(shopping_cart_total));
}
