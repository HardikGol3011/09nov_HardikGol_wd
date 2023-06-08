$(document).ready(function () {
    $('#slider').cycle('scrollLeft');
})

$(document).ready(function () {
    $('#fa').click(function(){
        $('#ul').slideToggle('1000');
    });
})

$(document).ready(function () {
    $('#read-more').click(function(){
        $('#p').toggle('1000');
        if($('#read-more').text()=='READ MORE'){
            $('#read-more').text('READ LESS');
        }
        else{
            $('#read-more').text('READ MORE');
        }
    });
})

// $(document).ready(function () {
//     $('#read').click(function(){
//         $('#li').toggle('1000');
//         if($('#read').text()=='READ MORE'){
//             $('#read').text('READ LESS');
//         }
//         else{
//             $('#read').text('READ MORE');
//         }
//     });
// })

$(document).ready(function () {
    $('#portion10').click(function(){
        $('#pera').toggle('1000');
        if($('#portion10').text()=='Read More'){
            $('#portion10').text('Read Less');
        }
        else{
            $('#portion10').text('Read More');
        }
    });
})

$(document).ready(function () {
    $('#portion15').click(function(){
        $('#para').toggle('1000');
        if($('#portion15').text()=='Read More'){
            $('#portion15').text('Read Less');
        }
        else{
            $('#portion15').text('Read More');
        }
    });
})