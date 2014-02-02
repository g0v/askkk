$(document)
  .ready(function() {

    
   
    $('.filter.menu .item')
      .tab()
    ;

    $('.dropdown').dropdown();
    semanticMenuReady();

  })
;
function petition(){

	location.href=('petition01.html');
}

function semanticMenuReady(){

  // selector cache
  var menuItem = $('.menu a.item, .menu .link.item');
  var dropdown = $('.main.container .menu .dropdown');
    // alias
    handler = {

      activate: function() {
        if(!$(this).hasClass('dropdown')) {
          $(this)
            .addClass('active')
            .closest('.ui.menu')
            .find('.item')
              .not($(this))
              .removeClass('active')
          ;
        }
      }

    }
  ;

  dropdown
    .dropdown({
      on: 'hover'
    })
  ;

  menuItem
    .on('click', handler.activate)
  ;

}
