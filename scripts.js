console.log('Scripts file is loaded.');

// Single line comment
/* Multiple
    lines
    comment
*/

// $('css selector').action()

$('h1').text('This is done by JavaScript!');

$('h2').toggleClass('blue');

let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta'];

colors.forEach(function (color) {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);
});

//  for (let index = 0; index < 100; index++) {
//      console.log(index);    
//  };


function myLittleFunction() {
    if ($('p').length < 5) {
        $('main').append('<p>A p is appended in the main.</p>');
    } else {
        console.log("We've reached the maximum paragraph number.")
    };
    
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});

// if (condition that can be true or false) {
//     condition is true
// } else {
//     condition is false
// }


   