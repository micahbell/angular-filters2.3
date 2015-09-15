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

app.filter('pig', function() {
  return function(input) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var array = input.split(' ');
    var newArray = [];
    array.forEach(function(word) {
      for (var i = 0; i < word.length; i++) {
        if(vowels.indexOf(word[0]) > -1) {
          newArray.push(word  + '-yay');
          break;
        } else if(vowels.indexOf(word[i]) > -1) {
          var newWord = word.slice(i) + "-" + word.slice(0, i) + 'ay';
          newArray.push(newWord)
          break;
        }
      }
    })
    return newArray.join('');
  }
});

app.filter('redact', function () {
  return function(sentence, secretWord){
      sentence = sentence.replace(secretWord, 'REDACTED');
      return sentence;
  };
});



//
