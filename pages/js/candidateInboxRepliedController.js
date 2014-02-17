
askControllers.controller('candidateInboxRepliedCtrl',['$scope','$routeParams',

function($scope,$routeParams){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  $scope.candidates = global.candidates;
  $scope.inboxUnreplied = function(){
    window.location = "#/candidate-inbox"
  }

  $scope.goToTop = function(){
     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };

  $scope.detail = {
  'title':'國際醫療生意經 社會公平疑慮',
  'categories':['醫療','自由貿易','公平正義'],
  'date':'2014-01-30',
  'votes':9527,
  'asker':{"name":"soidid","city":"台北市","district":"大安區"},
  'addressedTo':
     [{"name":'丁守中',"id":1,"state":"answered"},
      {"name":'顧立雄',"id":2,"state":"pending","pendingDays":12},
      {"name":'呂秀蓮',"id":5,"state":"pending","pendingDays":2},
      {"name":'柯文哲',"id":6,"state":"answered"}
     ],
  'content':["自經區專題系列報導（中央社記者陳清芳台北20日電）去年12月下旬，香港女子易小玲來台動手術，她在菲律賓旅遊遭挾持受到槍擊，3年多歷經30多次手術，仍終日口罩遮面，在林口長庚醫院醫生魏福全領軍，成功重建下顎缺損。",
  "香港媒體報導易小玲露出笑容、吃蛋糕的畫面，為長庚整形重建外科團隊做了最佳國際宣傳，DISCOVERY頻道打算6月播出手術實錄，打響台灣的醫療美名。就在這時，在台北、桃園、台中及高雄4個國際機場同步揭牌「國際醫療服務中心」，向國際旅客行銷台灣45家醫院的醫技。",
  "國際醫療是「自由經濟示範區規劃方案」的一道小菜，行政院規劃下一階段成立一、二個「國際健康產業園區」，區內特許設立營利性質的醫療「社團法人醫院」專辦國際醫療，放寬外國人入主醫院董事會，也招徠製藥、醫材、健康養生與健康資訊等產業共同進駐，形成聚落。"],
  'responses':
     [ 
       {'responseId':7, 
        'responseDate':'2014-01-30',
        'responseAbstract':'落實工時規範',
        'responseVoteUp':123,
        'responseVoteDown':32,
        'responseContent':[
         "台大醫院創傷醫學部主任柯文哲妻子陳佩琪，今接受《蘋果》專訪時說，外界常批評柯亂講話，她有點替老公抱屈，因為重症醫療常得在30秒、1分鐘內做好決定才救得到人，結果也養成柯有話直說的習慣，她會持續鞭策柯「有話慢慢講」，但她也指，柯文哲對台灣權貴醫療的生態也有責任。",
         "陳佩琪表示，柯文哲有些話是實話，例如「民進黨有2個太陽」、「要我(柯文哲)入(民進)黨是趕獅子進籠」，但有些話則不然，例如「連勝文是權貴才會得到台大迅速救治」，連是否權貴，社會自有公評，但他能享權貴式醫療，「是你們台大醫師給的，包括你柯文哲在內」，所以講這句話就不應該。"
         ],
        'responser':{'name':'柯文哲','id':6}

       },
       {'responseId':8, 
        'responseDate':'2014-01-30',
        'responseAbstract':'提高薪水',
        'responseVoteUp':9003,
        'responseVoteDown':3122,
        'responseContent':[
         "台大醫院創傷醫學部主任柯文哲妻子陳佩琪，今接受《蘋果》專訪時說，外界常批評柯亂講話，她有點替老公抱屈，因為重症醫療常得在30秒、1分鐘內做好決定才救得到人，結果也養成柯有話直說的習慣，她會持續鞭策柯「有話慢慢講」，但她也指，柯文哲對台灣權貴醫療的生態也有責任。",
         "陳佩琪表示，柯文哲有些話是實話，例如「民進黨有2個太陽」、「要我(柯文哲)入(民進)黨是趕獅子進籠」，但有些話則不然，例如「連勝文是權貴才會得到台大迅速救治」，連是否權貴，社會自有公評，但他能享權貴式醫療，「是你們台大醫師給的，包括你柯文哲在內」，所以講這句話就不應該。"
         ],
         'responser':{'name':'丁守中','id':1}
        
       }
     ]};

  $scope.data =
   [{'title':'是否有美國綠卡？', 'voteUp':1299,'voteDown':32, 'id':1, 'date':'02/15','asker':'匿名'},
    {'title':'如何解決炒房問題？', 'voteUp':9299,'voteDown':2,'id':2, 'date':'02/14','asker':'農陣'},
    {'title':'是否支持廢死？為什麼？', 'voteUp':183,'voteDown':9102, 'id':3, 'date':'02/01','asker':'廢死聯盟'},
    {'title':'對同志婚姻及多元成家的看法？', 'voteUp':1153,'voteDown':32, 'id':4, 'date':'01/31','asker':'伴侶盟'},
    {'title':'對樂生問題的回應？', 'voteUp':14, 'voteDown':765,'id':5, 'date':'01/30','asker':'鄉民'},
    {'title':'如何解決生育率的問題？', 'voteUp':756,'voteDown':132, 'id':6, 'date':'01/30','asker':'婦女新知'},
    {'title':'如何解決醫療五大皆空問題？', 'voteUp':801,'voteDown':643, 'id':7, 'date':'01/31','asker':'柳林瑋'},
    {'title':'如何解決台北市空氣品質的問題？', 'voteUp':2000,'voteDown':1, 'id':8, 'date':'01/31','asker':'郭俊麟'}];
  

}]);

