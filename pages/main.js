$(document)
.ready(function() {

  //bad way to do this
  $("#propose_petition_button").on("click",proposePetition);

  //menu
  $('.filter.menu .item').tab();
  $('.dropdown').dropdown();
  semanticMenuReady();

  semanticAccordingReady();
  
  //candidate
  $('.candidate_img').on("mouseenter",function(event){
    
    var id_number = $(this).attr('id').split("0")[1];
    
    for(var i=0;i<=6;i++){
      $('#pressure_candidate0'+i).hide();
    }
    $('#pressure_candidate0'+id_number).show();
    var p = $('#candidate_0'+id_number).position();
    var o = $('#candidate_0'+id_number).offset();
    $('#pressure_candidate0'+id_number).position({ top: p.top, left: p.left});
    $('#pressure_candidate0'+id_number).offset({ top: o.top, left: o.left});
  });
 
  
 
  $('#taipei').on("mouseleave",function(){
    $('.pressure_candidate').hide();
    
  });

  // ask who
  $('.ask_who').on("mouseenter",function(event){
    $('#ask_who_box').offset({ top: event.pageY, left: event.pageX});
    $('#ask_who_box').show();
   
  });
  $('#ask_who_close').on("click",function(event){
    $('#ask_who_box').offset({ top: 0, left: 0});
    $('#ask_who_box').hide();
   
  });
  

  
  // adjustLeftMenu();
  
  // vote comment up or down
  $(".vote_up").on("click",function(){
    console.log("vote up");
  });
  $(".vote_down").on("click",function(){
    console.log("vote down");
  });


  // for sign peition area keep floating
  var nav = $('#sign-petition');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 230) {
            nav.addClass("f-nav");
            nav.removeClass("f-fix");

        } else {
            nav.removeClass("f-nav");
            nav.addClass("f-fix");

        }
    });
  

})
;

$( window ).resize(function() {
  //adjustLeftMenu();

});

function adjustLeftMenu(){
  var p = $('#wrapper').position();
  var o = $('#wrapper').offset();

  var adjust = 5;
  if($( window ).width()>1300){
      adjust = 20;
  }
  console.log($( window ).width());
  
  $('#city').position({ left: p.left});
  $('#city').offset({ left: o.left-$("#city").width()-adjust});

  $('#user_count').position({ left: p.left});
  $('#user_count').offset({ left: o.left-$("#user_count").width()-adjust});

  $('#candidate_login').position({ left: p.left});
  $('#candidate_login').offset({ left: o.left-$("#candidate_login").width()-adjust});

  
  


}

function askToJoin(){
  console.log("ask to join!");
}
function showProfile(){
  console.log("show profile: but file is not ready!...yet...");
}
function response(){
  location.href=('response01.html');
}
function petition(){

  location.href=('petition01.html');
}
function proposePetition(){

  location.href=('create_petition.html');
}
function semanticAccordingReady(){

  // selector cache
  var
    $accordion     = $('.ui.accordion'),
    $menuAccordion = $('.ui.menu.accordion'),
    $checkbox      = $('.ui.checkbox'),
    // alias
    handler
  ;
  $accordion
    .accordion()
  ;
  $menuAccordion
    .accordion({
     exclusive: false
    })
  ;
  $checkbox
    .checkbox()
  ;
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
