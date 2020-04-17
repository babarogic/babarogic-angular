$(function() {
  $('[data-id=headers-4-sidebar-toggle]').click(function(e) {
    e.preventDefault();
    $('#headers-4-sidebar').toggleClass('show');
  });
  $('[data-id=headers-4-sidebar-close]').click(function(e) {
    e.preventDefault();
    $('#headers-4-sidebar').removeClass('show');
  });
});

