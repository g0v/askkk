$(document)
  .ready(function() {
   


  });

/*----------------------------------------------------------*/
var global = {};

/* https://watchouttw.hackpad.com/oXPyRx5NQfX */
global.categories = [
'農業','土地','居住','社會住宅','都市更新',
'國土安全和賑災','自然資源','核能','能源','環境','氣候變化',
'人權','公民權利和自由','婦女','家庭','性別','移民',
'創新','制度改革','開放政府',
'科學與技術','教育','通訊',
'交通運輸','基礎建設',
'國防','外交政策',
'經濟','創造就業機會','勞動','勞工',
'貧窮',
'預算和稅收',
'藝術與人文','運動休閒',
'醫療','身心障礙','老年人照顧','社會保障',
'消費者保護',
'刑事司法和執法'
];

/*----------------------------------------------------------*/

global.candidates = [

{"id":1,"name":"丁守中", "party":"中國國民黨","partyEng":"KMT",
 "state":"pending","askToJoin":257,
 "addressedQuestion":233,
 "addressedQuestionList":[],
 "repliedQuestion":0,
 "repliedQuestionList":[]
},
{"id":2,"name":"馮光遠", "party":"無黨籍","partyEng":"NONE",
 "state":"join","asked":23,"answered":19,
 "addressedQuestion":73,
 "addressedQuestionList":[],
 "repliedQuestion":23,
 "repliedQuestionList":[]
},
{"id":3,"name":"連勝文", "party":"中國國民黨","partyEng":"KMT",
 "state":"pending","askToJoin":143430,
 "addressedQuestion":3233,
 "addressedQuestionList":[],
 "repliedQuestion":0,
 "repliedQuestionList":[]},
{"id":4,"name":"顧立雄", "party":"民主進步黨","partyEng":"DPP",
"state":"join",
"addressedQuestion":233,
 "addressedQuestionList":[],
 "repliedQuestion":0,
 "repliedQuestionList":[]},
{"id":5,"name":"柯文哲", "party":"無黨籍","partyEng":"NONE",
"state":"join",
"addressedQuestion":233,
 "addressedQuestionList":[],
 "repliedQuestion":0,
 "repliedQuestionList":[]}];

global.oneCandidate = 
{"id":'-JFuCJcAoUNFQY9NEHZ4',"name":"柯文哲", "party":"無黨籍","partyEng":"NONE",
 "state":"pending",
 "addressedQuestion":233,
 "addressedQuestionList":[],
 "repliedQuestion":0,
 "repliedQuestionList":[],
 "askedToJoin":123124,
 "bio":"綽號柯P、KP，生於臺灣新竹市，為台灣知名外科醫師，現任台大醫院創傷醫學部主任，亦是台大醫學院教授，專長包括外傷、外科重症醫學、急救、器官移植 、ECMO 、人工器官等。除醫療專業外，柯文哲也多次接受媒體採訪、參與政論節目，2013年起參與台北市長競選，走入政治。",
 "bioWiki":"http://zh.wikipedia.org/wiki/%E6%9F%AF%E6%96%87%E5%93%B2"}



 /* used in questioin-list */
 global.questionData =
   [{'title':'是否有美國綠卡？', 'votes':819, 'id':1, 
     'date':{'year':'2014','month':'02','day':'15'},
     'asker':{'name':'spicycop','id':7},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'柯文哲',"id":'-JFuCJcAoUNFQY9NEHZ4',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}],
      /*  --- used in question-detail --- */  
    'content':
     ['經濟部智慧財產局欲修法封鎖海外侵權網站，引發網友持續震怒，除日前BBS網站批踢踢（PTT）發起百萬連署抗議，更有網友發起「六四網路全黑日」，並揚言留言「灌爆」總統馬英九的臉書粉絲專頁，以示抗議決心！',
      '「搞什麼，『制裁』都不『智財』了！」批踢踢鄉民開設反智財局討論專版（StopIPO），發起「反對智財局研議封鎖重大境外侵權網站」的網路連署，號召百萬民眾維護網路自主，公開向智財局嗆聲。鄉民直指網路自由不容侵犯，「智慧財產局侵犯我言論自由的圖謀，我無法接受。」',
      '更有網友於臉書（Facebook）發起「斷然反對鎖國，堅決主張百分之百網路自由」連署，訂定明天為「網路全黑日」，盼網友把大頭貼、封面相片都換成黑色，以示抗議智財局決心。發起人更說，除換上全黑照片外，更要民眾前往總統馬英九臉書，向總統表達最沉痛的怒吼，迄今已有超過4萬人加入。'],
    'deadline':{'year':2014,'month':3,'day':1},
    'category':['網路','自由','隱私'],
    'signature':[
      {"id":10,"name":"afike0123","date":{'year':'2014','month':'01','day':'31'},"order":6},
      {"id":11,"name":"bee","date":{'year':'2014','month':'01','day':'31'},"order":5},
      {"id":12,"name":"洪偉","date":{'year':'2014','month':'01','day':'31'},"order":4},
      {"id":13,"name":"g0ver","date":{'year':'2014','month':'01','day':'30'},"order":3},
      {"id":14,"name":"hello","date":{'year':'2014','month':'01','day':'29'},"order":2},
      {"id":15,"name":"soidid","date":{'year':'2014','month':'01','day':'29'},"order":1}],

      /*  ------------------------------- */  
    },
    {'title':'如何解決炒房問題？', 'votes':299,'id':2, 
     'date':{'year':'2014','month':'02','day':'14'},
     'asker':{'name':'永和林志玲','id':6},
     'addressedTo':
     [{"name":'連勝文',"id":'-JFuCKMKOH_eCspPxRe1',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'是否支持廢死？為什麼？', 'votes':183, 'id':3, 
     'date':{'year':'2014','month':'02','day':'01'},
     'asker':{'name':'廢死聯盟','id':5},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'柯文哲',"id":'-JFuCJcAoUNFQY9NEHZ4',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'對同志婚姻及多元成家的看法？', 'votes':153, 'id':4, 
     'date':{'year':'2014','month':'01','day':'31'},
     'asker':{'name':'伴侶盟','id':4},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'對樂生問題的回應？', 'votes':154, 'id':5, 
     'date':{'year':'2014','month':'01','day':'30'},
     'asker':{'name':'tantamount','id':3},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'如何解決生育率的問題？', 'votes':756, 'id':6, 
     'date':{'year':'2014','month':'01','day':'30'},
     'asker':{'name':'婦女新知','id':2},
     'addressedTo':
     [{"name":'連勝文',"id":'-JFuCKMKOH_eCspPxRe1',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'如何解決醫療五大皆空問題？', 'votes':801, 'id':7, 
     'date':{'year':'2014','month':'01','day':'29'},
     'asker':{'name':'拎杯骨科','id':1},
     'addressedTo':
     [{"name":'連勝文',"id":'-JFuCKMKOH_eCspPxRe1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'柯文哲',"id":'-JFuCJcAoUNFQY9NEHZ4',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
   }];

    
  /* used in response-list */
  /* 和上面的差別在於，有些立委的state為responded & votes 都超過 1000 */
  global.responseData =
   [{'title':'是否有美國綠卡？', 'votes':8129, 'id':1, 
     'date':{'year':'2014','month':'02','day':'15'},
     'asker':{'name':'spicycop','id':7},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"responded"},
      {"name":'柯文哲',"id":'-JFuCJcAoUNFQY9NEHZ4',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"responded"}],
      /*  --- used in question-detail --- */  
    'content':
     ['經濟部智慧財產局欲修法封鎖海外侵權網站，引發網友持續震怒，除日前BBS網站批踢踢（PTT）發起百萬連署抗議，更有網友發起「六四網路全黑日」，並揚言留言「灌爆」總統馬英九的臉書粉絲專頁，以示抗議決心！',
      '「搞什麼，『制裁』都不『智財』了！」批踢踢鄉民開設反智財局討論專版（StopIPO），發起「反對智財局研議封鎖重大境外侵權網站」的網路連署，號召百萬民眾維護網路自主，公開向智財局嗆聲。鄉民直指網路自由不容侵犯，「智慧財產局侵犯我言論自由的圖謀，我無法接受。」',
      '更有網友於臉書（Facebook）發起「斷然反對鎖國，堅決主張百分之百網路自由」連署，訂定明天為「網路全黑日」，盼網友把大頭貼、封面相片都換成黑色，以示抗議智財局決心。發起人更說，除換上全黑照片外，更要民眾前往總統馬英九臉書，向總統表達最沉痛的怒吼，迄今已有超過4萬人加入。'],
    'deadline':{'year':2014,'month':3,'day':1},
    'category':['網路','自由','隱私'],
    'signature':[
      {"id":10,"name":"afike0123","date":{'year':'2014','month':'01','day':'31'},"order":6},
      {"id":11,"name":"bee","date":{'year':'2014','month':'01','day':'31'},"order":5},
      {"id":12,"name":"洪偉","date":{'year':'2014','month':'01','day':'31'},"order":4},
      {"id":13,"name":"g0ver","date":{'year':'2014','month':'01','day':'30'},"order":3},
      {"id":14,"name":"hello","date":{'year':'2014','month':'01','day':'29'},"order":2},
      {"id":15,"name":"soidid","date":{'year':'2014','month':'01','day':'29'},"order":1}],
     
     /*  --- used in response-detail --- */  
      'responses':
     [ 
       {'$id':7, 
        'postDate':{'year':'2014','month':'01','day':'30'},
        'abstract':'落實工時規範',
        'upVotesCount':123,
        'downVotesCount':32,
        'content':[
         "台大醫院創傷醫學部主任柯文哲妻子陳佩琪，今接受《蘋果》專訪時說，外界常批評柯亂講話，她有點替老公抱屈，因為重症醫療常得在30秒、1分鐘內做好決定才救得到人，結果也養成柯有話直說的習慣，她會持續鞭策柯「有話慢慢講」，但她也指，柯文哲對台灣權貴醫療的生態也有責任。",
         "陳佩琪表示，柯文哲有些話是實話，例如「民進黨有2個太陽」、「要我(柯文哲)入(民進)黨是趕獅子進籠」，但有些話則不然，例如「連勝文是權貴才會得到台大迅速救治」，連是否權貴，社會自有公評，但他能享權貴式醫療，「是你們台大醫師給的，包括你柯文哲在內」，所以講這句話就不應該。"
         ],
        'responser':"-JFuCJcAoUNFQY9NEHZ4"

       },
       {'$id':8, 
        'postDate':{'year':'2014','month':'01','day':'30'},
        'abstract':'提高薪水',
        'upVotesCount':9003,
        'upVotes':[],
        'downVotesCount':3122,
        'downVotes':[],
        'content':[
         "台大醫院創傷醫學部主任柯文哲妻子陳佩琪，今接受《蘋果》專訪時說，外界常批評柯亂講話，她有點替老公抱屈，因為重症醫療常得在30秒、1分鐘內做好決定才救得到人，結果也養成柯有話直說的習慣，她會持續鞭策柯「有話慢慢講」，但她也指，柯文哲對台灣權貴醫療的生態也有責任。",
         "陳佩琪表示，柯文哲有些話是實話，例如「民進黨有2個太陽」、「要我(柯文哲)入(民進)黨是趕獅子進籠」，但有些話則不然，例如「連勝文是權貴才會得到台大迅速救治」，連是否權貴，社會自有公評，但他能享權貴式醫療，「是你們台大醫師給的，包括你柯文哲在內」，所以講這句話就不應該。"
         ],
         'responser':'-JFxrLFtnbu79YNmJR0M'
        
       },
       {'$id':9, 
        'postDate':{'year':'2014','month':'02','day':'18'},
        'abstract':'增加人力',
        'upVotesCount':1103,
        'upVotes':[],
        'downVotesCount':2,
        'downVotes':[],
        'content':[
         "台大醫院創傷醫學部主任柯文哲妻子陳佩琪，今接受《蘋果》專訪時說，外界常批評柯亂講話，她有點替老公抱屈，因為重症醫療常得在30秒、1分鐘內做好決定才救得到人，結果也養成柯有話直說的習慣，她會持續鞭策柯「有話慢慢講」，但她也指，柯文哲對台灣權貴醫療的生態也有責任。",
         "陳佩琪表示，柯文哲有些話是實話，例如「民進黨有2個太陽」、「要我(柯文哲)入(民進)黨是趕獅子進籠」，但有些話則不然，例如「連勝文是權貴才會得到台大迅速救治」，連是否權貴，社會自有公評，但他能享權貴式醫療，「是你們台大醫師給的，包括你柯文哲在內」，所以講這句話就不應該。"
         ],
         'responser':'-JFxrLFtnbu79YNmJR0M'
        
       }
     ]

      /*  ------------------------------- */  
    },
    {'title':'如何解決炒房問題？', 'votes':2199,'id':2, 
     'date':{'year':'2014','month':'02','day':'14'},
     'asker':{'name':'永和林志玲','id':6},
     'addressedTo':
     [{"name":'連勝文',"id":'-JFuCKMKOH_eCspPxRe1',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"responded"}]
    },
    {'title':'是否支持廢死？為什麼？', 'votes':1823, 'id':3, 
     'date':{'year':'2014','month':'02','day':'01'},
     'asker':{'name':'廢死聯盟','id':5},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"responded"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'柯文哲',"id":'-JFuCJcAoUNFQY9NEHZ4',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'對同志婚姻及多元成家的看法？', 'votes':1523, 'id':4, 
     'date':{'year':'2014','month':'01','day':'31'},
     'asker':{'name':'伴侶盟','id':4},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"responded"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'對樂生問題的回應？', 'votes':1524, 'id':5, 
     'date':{'year':'2014','month':'01','day':'30'},
     'asker':{'name':'tantamount','id':3},
     'addressedTo':
     [{"name":'馮光遠',"id":'-JFxrKQo3Qg19zsW73b1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"responded"}]
    },
    {'title':'如何解決生育率的問題？', 'votes':7526, 'id':6, 
     'date':{'year':'2014','month':'01','day':'30'},
     'asker':{'name':'婦女新知','id':2},
     'addressedTo':
     [{"name":'連勝文',"id":'-JFuCKMKOH_eCspPxRe1',"state":"pending"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
    },
    {'title':'如何解決醫療五大皆空問題？', 'votes':8201, 'id':7, 
     'date':{'year':'2014','month':'01','day':'29'},
     'asker':{'name':'拎杯骨科','id':1},
     'addressedTo':
     [{"name":'連勝文',"id":'-JFuCKMKOH_eCspPxRe1',"state":"pending"},
      {"name":'顧立雄',"id":'-JFxrLALbptrJBMly0oT',"state":"responded"},
      {"name":'柯文哲',"id":'-JFuCJcAoUNFQY9NEHZ4',"state":"responded"},
      {"name":'丁守中',"id":'-JFxrLFtnbu79YNmJR0M',"state":"pending"}]
   }];
 
    global.responseDataCandidate = 
     [{'title':'是否有美國綠卡？', 'voteUp':1299,'voteDown':32, 'id':1, 
       'date':{'year':'2014','month':'01','day':'30'},'asker':{'name':'匿名','id':233}},
      {'title':'如何解決炒房問題？', 'voteUp':9299,'voteDown':2,'id':2, 
       'date':{'year':'2014','month':'01','day':'31'},'asker':{'name':'農陣','id':234}},
      {'title':'是否支持廢死？為什麼？', 'voteUp':183,'voteDown':9102, 'id':3, 
       'date':{'year':'2014','month':'02','day':'01'},'asker':{'name':'廢死聯盟','id':235}},
      {'title':'對同志婚姻及多元成家的看法？', 'voteUp':1153,'voteDown':32, 'id':4, 
       'date':{'year':'2014','month':'02','day':'02'},'asker':{'name':'伴侶盟','id':236}},
      {'title':'對樂生問題的回應？', 'voteUp':14, 'voteDown':765,'id':5, 
       'date':{'year':'2014','month':'02','day':'02'},'asker':{'name':'鄉民','id':237}},
      {'title':'如何解決生育率的問題？', 'voteUp':756,'voteDown':132, 'id':6, 
       'date':{'year':'2014','month':'02','day':'03'},'asker':{'name':'婦女新知','id':238}},
      {'title':'如何解決醫療五大皆空問題？', 'voteUp':801,'voteDown':643, 'id':7, 
       'date':{'year':'2014','month':'02','day':'04'},'asker':{'name':'柳林瑋','id':239}},
      {'title':'如何解決台北市空氣品質的問題？', 'voteUp':2000,'voteDown':1, 'id':8, 
       'date':{'year':'2014','month':'02','day':'05'},'asker':{'name':'郭俊麟','id':240}}];





var askControllers = angular.module('askControllers',[]);

function mobileNavSetup(){//title position
   var value =$(window).width()/2-50;
   console.log(value);
   console.log("set");
   $("#mobile_nav_title").css("left",value+"px");
   $("#navigation").addClass("navigation_mobile");
}
function mobileNavPosition(){//side menu position
  if($('.body').hasClass("left")){
     $('#navigation').removeClass("navigation_mobile");
  }else{
     $('#navigation').css("left","0px");
     $('#navigation').addClass("navigation_mobile");
  }
}
function mobileSideBarSetup(){
  
   //$("#sidebar").addClass("large");
   $("#sidebar").addClass("vertical");
   $("#sidebar").addClass("inverted");
   $("#sidebar").addClass("menu");

   
}
function semanticSidebarReday(){
  // selector cache
  var
    // alias
    handler
  ;
  $('.variation .button')
    .on('click', function() {
      $(this)
        .toggleClass('active')
        .siblings()
        .removeClass('active')
      ;
      $('.sidebar')
        .filter($(this).data('variation') ).first()
        .sidebar('toggle')
      ;
    })
  ;
  $('.styled.sidebar').first()
    .sidebar('attach events', '.styled.example .button')
  ;

  $('.floating.sidebar').first()
    .sidebar('attach events', '.floating.example .button')
  ;

  $('.filter.menu .item')
      .tab()
    ;

    $('.ui.rating')
      .rating({
        clearable: true
      })
    ;

    $('.ui.sidebar')
      .sidebar('attach events', '.launch.button')
    ;

    $('.ui.dropdown')
      .dropdown()
    ;
}
function semanticMenuReady(){

  $('.dropdown').dropdown();

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



