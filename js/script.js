$(document).ready(function(){
  $('a').on('click', function(){
    $('a.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  })
});
