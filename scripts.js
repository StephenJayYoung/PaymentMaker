$('input.cc-num').payment('formatCardNumber');

var valid = $.payment.validateCardNumber($('input.cc-num').val());

if (!valid) {
  alert('Your card is not valid!');
  return false;
}


