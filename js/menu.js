export default function paintMenu(activeItem) {
  $('#header').load(
    'sections/menu.html',
    function (responseTxt, statusTxt, xhr) {
      let menu = $('#menu-' + activeItem);
      if (statusTxt == 'success') {
        menu.addClass('active');
      }
    }
  );
}
