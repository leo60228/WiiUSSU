var timeout = setInterval(function() {
  if ($('#file-select')[0].files && $('#file-select')[0].files[0]) {
    var file = $('#file-select')[0].files[0];

    if (window.filename !== file.name) {
      window.filename = file.name;
      
      var selected = document.getElementById('selected');

      selected.innerHTML = file.name.replace(/^WiiU_.*?_(TV|GamePad)_.*$/gm, '$1');
    }
  } else if ((!($('#file-select')[0].files) || !($('#file-select')[0].files[0]) && window.filename)) {
    window.filename = undefined;

    var selected = document.getElementById('selected');

    selected.innerHTML = 'None';
  }
}, 1000);
