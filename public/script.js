$(document).click(function() {
  var elem = $('#file-form > input');

  if (elem[0] && document.createEvent) {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent("click", true, false);
    elem[0].dispatchEvent(evt);
  } 

  elem.change(function(e) {
    $("#file-form").submit();
  });
});
