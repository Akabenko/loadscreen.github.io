// $(document).ready(function() {
// 				var progressbar = $('#progressbar'),
// 					max = progressbar.attr('max'),
// 					time = (1000/max)*5,	
// 			        value = progressbar.val();

// 			    var loading = function() {
// 			        value += 1;
// 			        addValue = progressbar.val(value);
			        
// 			        $('.progress-value').html(value + '%');

// 			        if (value == max) {
// 			            clearInterval(animate);			           
// 			        }
// 			    };

// 			    var animate = setInterval(function() {
// 			        loading();
// 			    }, time);
// 		});


// const imgLinks = [
//     'images/1.jpg',
//     'images/2.jpg',
//     'images/3.jpg',
//     'images/4.jpg',
//     'images/5.jpg',
//     'images/6.jpg',
//     'images/7.jpg',
//     'images/8.jpg',
// ];
// const delay = 5000;
// let currentIndex = 0;
// setInterval(function() {
//     document.getElementById('image').src = imgLinks[currentIndex];
//     currentIndex++;
//     if(currentIndex >= imgLinks.length) {
//         currentIndex = 0;
//     }
// }, delay);

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;//Максимум не включается, минимум включается
}

var total_pics_num = 10; // колличество изображений
  var interval = 10000;    // задержка между изображениями
  var time_out = 1;       // задержка смены изображений
  var i = 0;
  var timeout;
  var opacity = 100;
  function fade_to_next() {
    opacity--;
    var k = i + 1;
    var image_now = 'image_' + i;
    if (i == total_pics_num) k = 1;
    var image_next = 'image_' + i;
    document.getElementById(image_now).style.opacity = opacity/100;
    document.getElementById(image_now).style.filter = 'alpha(opacity='+ opacity +')';
    document.getElementById(image_next).style.opacity = (100-opacity)/100;
    document.getElementById(image_next).style.filter = 'alpha(opacity='+ (100-opacity) +')';
    timeout = setTimeout("fade_to_next()",time_out);
    if (opacity==1) {
      opacity = 100;
      clearTimeout(timeout);
    }
  }
  setInterval (
    function() {
      i++;
      if (i > total_pics_num) i=1;
      fade_to_next();
    }, interval
  );
