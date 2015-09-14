app.filter('kebab', function() {
  return function (input) {
    if(typeof input === 'number') {
      return input;
    } else {
      return input.replace(/_/g , "-");
    }
  };
});

app.filter('camel', function () {
  return function (input) {
    if(typeof input === 'number'){
      return input
    } else {
      var array = input.replace(/_/g , "-").split('-');
      var string = '';
      for (var i = 0; i < array.length; i++) {
        if(i === 0) {
          string += array[i];
        } else {
          string += array[i].charAt(0).toUpperCase() + array[i].substring(1, array[i].length);
        }
      }
      return string;
    }
  };
});
