;(function(){
  $('.dosages-link-desc').on('click', function(){
    var id = $(this).data('id');
    var iddesc = "[data-id-desc='" +id+ "']";
    $(iddesc).fadeToggle();
});
  var descOpenClose = function() {
    $(this).toggleClass('hide');
  };
}());
