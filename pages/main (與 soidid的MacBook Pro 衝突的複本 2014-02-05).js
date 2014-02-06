$(document)
.ready(function() {

  //menu
  $('.filter.menu .item').tab();
  $('.dropdown').dropdown();
  semanticMenuReady();

  //candidate
  $('#candidate_02').on("mouseenter",function(event){
    $('#pressure_candidate02').show();
    $('#pressure_candidate04').hide();
    $('#pressure_candidate06').hide();
    
    var p = $('#candidate_02').position();
    var o = $('#candidate_02').offset();
    $('#pressure_candidate02').position({ top: p.top, left: p.left});
    $('#pressure_candidate02').offset({ top: o.top, left: o.left});
  });
  $('#candidate_04').on("mouseenter",function(event){
    $('#pressure_candidate04').show();
    $('#pressure_candidate02').hide();
    $('#pressure_candidate06').hide();
    
    var p = $('#candidate_04').position();
    var o = $('#candidate_04').offset();
    $('#pressure_candidate04').position({ top: p.top, left: p.left});
    $('#pressure_candidate04').offset({ top: o.top, left: o.left});

  });
  $('#candidate_06').on("mouseenter",function(event){
    $('#pressure_candidate06').show();
    $('#pressure_candidate02').hide();
    $('#pressure_candidate04').hide();
    
    var p = $('#candidate_06').position();
    var o = $('#candidate_06').offset();
    $('#pressure_candidate06').position({ top: p.top, left: p.left});
    $('#pressure_candidate06').offset({ top: o.top, left: o.left});

  });
  
  $('#candidate_02').on("mouseleave",function(){
    //$('#pressure_candidate02').hide();
  });
  $('#taipei').on("mouseleave",function(){
    $('#pressure_candidate02').hide();
    $('#pressure_candidate04').hide();
    $('#pressure_candidate06').hide();
  });
  
  adjustLeftMenu();

  

})
;

$( window ).resize(function() {
  adjustLeftMenu();

});

function adjustLeftMenu(){
  var p = $('#wrapper').position();
  var o = $('#wrapper').offset();
  console.log($("#city").width());
  $('#city').position({ top: p.top, left: p.left});
  $('#city').offset({ top: o.top, left: o.left-$("#city").width()-40});

}

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
