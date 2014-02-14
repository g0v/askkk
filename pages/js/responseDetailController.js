askControllers.controller('responseDetailCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();
  $scope.candidates = global.candidates;

  $scope.data =
    {'questionTitle':'如何解決醫療五大皆空問題？', 
     'questionId':7, 
     'votes':801,
     'addressTo':
     [{"candidateName":'丁守中',"candidateId":1,"state":"answered"},
      {"candidateName":'顧立雄',"candidateId":2,"state":"pending","pendingDays":12},
      {"candidateName":'呂秀蓮',"candidateId":5,"state":"pending","pendingDays":2},
      {"candidateName":'柯文哲',"candidateId":6,"state":"answered"}
     ],
     'responses':
     [ 
       {'responseId':7, 
        'responseTitle':'Re: 如何解決醫療五大皆空問題？', 
        'responseDate':'2014-01-30',
        'responseAbstract':'落實工時規範',
        'responseContent':[
         "台大醫院創傷醫學部主任柯文哲妻子陳佩琪，今接受《蘋果》專訪時說，外界常批評柯亂講話，她有點替老公抱屈，因為重症醫療常得在30秒、1分鐘內做好決定才救得到人，結果也養成柯有話直說的習慣，她會持續鞭策柯「有話慢慢講」，但她也指，柯文哲對台灣權貴醫療的生態也有責任。",
         "陳佩琪表示，柯文哲有些話是實話，例如「民進黨有2個太陽」、「要我(柯文哲)入(民進)黨是趕獅子進籠」，但有些話則不然，例如「連勝文是權貴才會得到台大迅速救治」，連是否權貴，社會自有公評，但他能享權貴式醫療，「是你們台大醫師給的，包括你柯文哲在內」，所以講這句話就不應該。"
         ],
        'responserName':'柯文哲',
        'responserId':6
       },
       {'responseId':8, 
        'responseTitle':'Re: 如何解決醫療五大皆空問題？', 
        'responseDate':'2014-01-30',
        'responseAbstract':'提高薪水',
        'responseContent':[
         "台大醫院創傷醫學部主任柯文哲妻子陳佩琪，今接受《蘋果》專訪時說，外界常批評柯亂講話，她有點替老公抱屈，因為重症醫療常得在30秒、1分鐘內做好決定才救得到人，結果也養成柯有話直說的習慣，她會持續鞭策柯「有話慢慢講」，但她也指，柯文哲對台灣權貴醫療的生態也有責任。",
         "陳佩琪表示，柯文哲有些話是實話，例如「民進黨有2個太陽」、「要我(柯文哲)入(民進)黨是趕獅子進籠」，但有些話則不然，例如「連勝文是權貴才會得到台大迅速救治」，連是否權貴，社會自有公評，但他能享權貴式醫療，「是你們台大醫師給的，包括你柯文哲在內」，所以講這句話就不應該。"
         ],
         'responserName':'丁守中',
        'responserId':1
       }
     ]

    };
    
  // for sign peition area keep floating
  var nav = $('#response_detail_right_menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 230) {
            nav.addClass("f-nav");
            nav.removeClass("fr-fix");

        } else {
            nav.removeClass("f-nav");
            nav.addClass("fr-fix");

        }
    });





});

