$(function () {
    $("#contactForm").submit(function (e) {
        e.preventDefault();
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
