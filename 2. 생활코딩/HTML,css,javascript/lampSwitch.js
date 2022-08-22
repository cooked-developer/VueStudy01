var Atags = {
  setColor: function (color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  },
}
var Body = {
  setBackgroundColor: function (color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },
  setColor: function (color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
}

function lampSwitch(self) {

  if (self.value === 'lampOff') {

    Body.setBackgroundColor('black');
    Body.setColor('white');

    self.value = 'lampOn';

    Atags.setColor('brown');

  } else {

    Body.setBackgroundColor('white');
    Body.setColor('black');

    self.value = 'lampOff';

    Atags.setColor('orange');

  }
}
