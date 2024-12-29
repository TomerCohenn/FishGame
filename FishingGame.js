$(document).ready(function() {
    //Initial Experiment Parameters
  
    
    var ThisMobile=0;
var md=new MobileDetect(window.navigator.userAgent)
   if(md.mobile()){
       ThisMobile=1;
       console.log('phone');
       
   }

    var NumTrials = 20;//25 //5//15;
//var NumTrialsEnd = 12;
    
    var NumBlocks = 3;
    
    
     
    var p_fish_lake_1 = 0.75//0.65
    var p_fish_lake_2 = 0.25//0.35
    
    
    var LakeImage = ["Lake01","Lake02","Lake03","Lake04","Lake05","Lake06","Lake07","Lake08"];
    var LakeName = ["כוכב","עפיפון","בייגל","טרק","פקמן","בוטן","לב","פאזל"];
  
    var LakeOrder=[0,1,2,3,4,5,6,7];
    
    LakeOrder=Shuffle(LakeOrder);
  
    var BlockOrder=[0,1,2];
    var RandPos=[1,1,0,0];
        RandPos=Shuffle(RandPos);

    BlockOrder=Shuffle(BlockOrder);
    
    

    
    var SumReward = 0;

    var YouPic = 'images/Av1.png';
    


    
    var Init = (new Date()).getTime();

    var SubID = CreateCode();
    var thisCode='A';
    var thisContact='NA';
    // Initial Display Parameters
   

    var thisHeight = $(document).height() * 0.9;
    var thisWidth = $(document).width() * 0.9;

    var DispWidth = thisWidth * 5 / 6;
    console.log(DispWidth)
    var DispHeight = DispWidth / 2;

    $('#Main').css('min-height', thisHeight);
   // $('#Main').css('width', thisWidth);
    
    
    Survey.StylesManager.applyTheme("bootstrap");
    
  Survey.defaultBootstrapCss.navigationButton = 'btn btn-primary';

    var thisHeight = $(document).height() * 0.9;
   
    $('#Main').addClass('container')
    
    
    
 
   //SurveyPageDetails();
   Consent();
     // End();
     //Block(0);

    //  }
    //
    
    
    
    function Information() {

 $('#Stage').empty();
            $('#Bottom').empty();
        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

        CreateDiv('Stage', 'TextBoxDiv');


        var Html1 = '<div>\n\
 <div class="row">\n\
            <div class="col-sm-12 text-center">\n\
 <div class="page-header">\n\
<h2>Welcome to our experiment, it&#39s nice to meet you!</h2><h4>First, some information about the experiment.</h4>\n\
                </div>\n\
                 <div class="row">\n\
                       <div class="col-sm-10 col-sm-offset-1 text-left">\n\
                                           <p >This study has been approved by the Univeristy of Haifa, Faculty of Social Sciences Research Ethics Committee<br>\n\
Name, address and contact details of investigators:<br>\n\
Uri Hertz<br>\n\
Department of Cognitive Sciences <br>\n\
University of Haifa<br>\n\
Haifa, Israel 31905<br>\n\
uhertz@cog.haifa.ac.il<br>\n\
<br>\n\
We invite you to participate in a study titled: "The Fishing Game" which aims to understand people`s behaviour. <br>\n\
Please carefully consider the information below and discuss it with others if you wish. Please feel free to ask us if there is anything that is not clear or if you would like more information.\n\
<br>Please note: \n\
<ul><li>Participation in the research is voluntary, and you do not have to participate in the study. Your refusal to participate will not affect you and will not harm you in any way whatsoever. Even after agreeing to participate in the experiment, you can withdraw at any time and without giving a reason. The payment you get will not be influenced by your decision to withdraw.</li>\n\
<li>Apart from the effort required to participate in the study, there are no additional costs or obligations.</li>\n\
<li>All identifying data in the study will be kept confidential and will not be available to anyone other than the research team. Data collected in this experiment may be used for scientific publication and presentations after anonymization and removal of all identifiable details.</li>\n\
<li>Participants in our experiment must be over 18 years of age, with no substantial neurological or psychiatric disease.</li>\n\
<li>Participants in our experiment must declare they do not have a learning disability or attention disorder.</li>\n\
<li>Your participation in the study may make a significant contribution to future research. The study is conducted by the Laboratory of Social Decision Making, School of Psychological Sciences, University of Haifa.  </li></ul>\n\
                                           </p></div>\n\
                       </div>\n\
            </div>\n\
        </div></div>';



        $('#TextBoxDiv').html(Html1);

        var Buttons = '<div align="center"><input align="center" type="button"  class="btn btn-primary btn-lg" id="toConsent" value="Next" ></div>';
        $('#Bottom').html(Buttons);

        $('#toConsent').click(function () {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Consent();
        });
    }


    function Consent() {//consent page, there is also an option to add mturk ID to this page


        $('#Top').css('height', thisHeight / 20);
        // $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

        CreateDiv('Stage', 'TextBoxDiv');

        var Html1 = ' <div >\n\
 <div class="row">\n\
            <div class="col-sm-12 text-center">\n\
 <div class="page-header">\n\
\n\
                </div>\n\
                 <div class="row">\n\
                       <div class="col-sm-9 col-sm-offset-1 text-right "  dir = "rtl">\n\
                                           <h3  dir = "rtl">תודה על השתתפותכם במחקר. אנא מלאו את מספר הטלפון שלכם:<br></h3>\n\
</p>\n\
<form data-toggle="validator" role="form" id="ConsentForm">\n\
  <div class="form-group">\n\
 <div class="form-group col-sm-3"></div>\n\
  <div class="form-group col-sm-6"  dir = "rtl">\n\
   <label for="CodeBox" class="control-label"  dir = "rtl"><h3>מספר טלפון:</h3></label>\n\
\n\
    <input type="text" class="form-control" id="CodeBox" required>\n\
  </div>\n\
<div class="form-group col-sm-3"></div>\n\
</div>\n\
<div class="form-group col-sm-12" align="center">\n\
    <button type="submit" class="btn btn-primary btn-lg">המשך</button>\n\
  </div>\n\
        </div>\n\
                       </div>\n\
            </div>\n\
        </div></div>';


        $('#TextBoxDiv').html(Html1);


        var form = document.getElementById('ConsentForm');
        if (form.attachEvent) {
            form.attachEvent("submit", processForm);
        } else {
            form.addEventListener("submit", processForm);
        }

        function processForm(e) {
            if (e.preventDefault)
                e.preventDefault();

            var ThusForm = document.getElementById('ConsentForm');
            thisCode = ThusForm.elements[0].value;
            
console.log( thisCode)
            $('#TextBoxDiv').remove();
            $('#CheckAlert').remove();
            $('#Stage').empty();
             SurveyPageDetails();
            $.ajax({
                type: 'POST',
                data: {
                    thisCode: thisCode,
                    ID: SubID
                },
                async: false,
                url: 'php/CheckSubCode.php',
                dataType: 'json',
                success: function (r) {
                    //alert(r)
                    if (r[0].ErrorNo > 0) {

                        Duplicate();
                    } else {
                        SurveyPageDetails();
                    };
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);
                }
            });
          

            return false;
        }


        $('#ToInformation').click(function () {
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            SurveyPageDetails();
        });
    }





function SurveyPageDetails(){
      console.log('SurveyDetails');
 
        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
       // $('#Stage').css('width', DispWidth);
        $('#Bottom').css('min-height', thisHeight / 20);  
    
       


    
    var JsonDetails =  JSON.parse(JSON.stringify(DemogJson));
       console.log(JsonDetails)
/*$.ajax({
    'async': false,
    'global': false,
    'url': "jsons/DemogJson.json",
    'dataType': "json",
    'success': function (data) {
        console.log(JsonDetails)
        JsonDetails = data;
    }
});
    */

    
    var survey_details = new Survey.Model(JsonDetails);
   console.log(survey_details)
    
$("#Stage").Survey({
    model: survey_details,
    onComplete: InsertDemog
});

    
}
    
    
    
    
    function InsertDemog(survey) {
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            Instructions(1);
           //send Ajax request to your web server.
var Json1=[survey.data]

var csv = ConvertToCSV_quest(Json1)

console.log("The results are:" +csv)

      $.ajax({
                type: 'POST',
                data: {ID:SubID,Responses:csv},
                async: false,
                url: 'php/InsertDemogData.php',
                dataType: 'json',
                success: function(r) {
                    if (r[0].ErrorNo > 0) {
                        Error();
                    } else {
                        console.log('HERE')
                        $('#Stage').empty();
                        $('#Bottom').empty();
                        Instructions(1);
                    }
                    ;
                }, error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);
                }
            });

    }
    
    
    
     function ConvertToCSV_quest(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    var num = index.match(/\d+/g);
                    if (line != '') line += ','
console.log(num)
                  
                    line += array[i][index];
                  
                }

                str += line + '\r\n';
            }

            return line;
        }
    

    
    

    function Instructions(PageNum) {


        $('#Top').css('height', thisHeight / 20);
      $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

        var NumPages = 2;//number of pages
        var PicHeight = DispWidth / 2;

        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<H2 align = "center"  dir = "rtl">הוראות</H2><div class="row"> <div class="row">\n\
                       <div class="col-sm-10 col-sm-offset-1">';

        switch (PageNum) {
            case 1:
                var Info = '<H3  dir = "rtl">ברוכים הבאים למטלת חופשת הדייג. <br> במטלה זו תצאו לשלוש חופשות דיג, בנות 20 ימים.  <br> בכל יום תצטרכו לבחור אגם לדוג בו, מבין שני אגמים.<br>המטרה שלכם היא לדוג כמה שיותר דגים.<br> <h4  dir = "rtl">*אף דג לא נפגע במהלך המטלה או בתכנונה.</h4><br><br>';
                break;
            case 2:
                var Info = '<H3  dir = "rtl">בכל יום תראו האם הצלחתם לדוג דג או שלא.<br> בכל חופשה תבחרו בין שני אגמים חדשים.<br>בהצלחה!<br>';
//case 3: 
                
                break;
                
                
                break;
                case 3:
                var Info = '<H3  dir = "rtl">On completion of the task you will receive your completion code, along with the number of fish you caught and your bonus amount.<br><br><br>Good luck!</h3><br><br>';
            
                
                break;
            default:
                var Info;
                break;
        }
        ;
        var ThisImage = '<div align = "center"><img src="images/Inst' + PageNum + '.png"  class="img-responsive center-block"  height="' + PicHeight + '" align="center"><br><br></div></div></div>';


        $('#TextBoxDiv').html(Title + Info + ThisImage);

        var Buttons = '<div align="center"><input align="center" type="button"  class="btn btn-primary btn-lg" id="Start" value="התחלה" ><input align="center" type="button"  class="btn btn-primary btn-lg" id="Next" value="קדימה" >\n\
<input align="center" type="button"  class="btn btn-primary btn-lg" id="Back" value="חזרה" ></div>';


        $('#Bottom').html(Buttons);


        if (PageNum === 1) {
            $('#Back').hide();
        }
        ;
        if (PageNum === NumPages) {
            $('#Next').hide();
        }
        ;
        if (PageNum < NumPages) {
            $('#Start').hide();
        }
        ;


        $('#Back').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Instructions(PageNum - 1);

        });
        $('#Next').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Instructions(PageNum + 1);

        });
        $('#Start').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
           
             //Block(0);//Start with the first block
            Block(0);
                        

        });
    }
    ;
    
    
    
    

function SurveyComprehansion(){
      console.log('SurveyDetails');
 
        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
       // $('#Stage').css('width', DispWidth);
        $('#Bottom').css('min-height', thisHeight / 20);  
    
       


    
    var JsonComp =  JSON.parse(JSON.stringify(CompJson));
       console.log(JsonComp)
/*$.ajax({
    'async': false,
    'global': false,
    'url': "jsons/DemogJson.json",
    'dataType': "json",
    'success': function (data) {
        console.log(JsonDetails)
        JsonDetails = data;
    }
});
    */

    
    var survey_comp = new Survey.Model(JsonComp);
   console.log(survey_comp)
    
$("#Stage").Survey({
    model: survey_comp,
    onComplete: CheckComp
});

    
}
    
    
    
    
    function CheckComp(survey) {
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
           //send Ajax request to your web server.
var answers=[survey.data]

        console.log(answers)
        var Answers=[5,5];
      
                  
                 Answers[0]=answers[0]['question1'];
               
                 Answers[1]=answers[0]['question2'];

        console.log(Answers)
        
        
        
if (Answers[0]==='1'){
    if (Answers[1]==='4'){
        Block(0);
    }else{
        StartAgain();
    }
}else{
        StartAgain();
    }
    }
    
    
    
     function StartAgain(){
        
           $('#Top').css('height', thisHeight / 20);
       // $('#Stage').css('width', DispWidth);
      //  $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

    
        
        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<div id = "Title"><H2 align = "center">Youmade a mistake in one of the comprehension questions, please read the instructions again.</H2></div>';
        $('#TextBoxDiv').html(Title);
         var Buttons = '<div align="center"><input align="center" type="button"  class="btn btn-primary" id="Start" value="Instructions" ></div>';

        $('#Bottom').html(Buttons);
        
      $('#Start').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
           
             Instructions(1);
                        

        });

    }
    

    function Block(BlockNum){
        
           $('#Top').css('height', thisHeight / 20);
       // $('#Stage').css('width', DispWidth);
      //  $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);
console.log('Block num:'+BlockNum)

    
console.log('Block Type:'+BlockOrder[BlockNum])
        
        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<div id = "Title"  dir = "rtl"><H2 align = "center">אתם עומדים להתחיל חופשה חדשה.</H2></div>';
        $('#TextBoxDiv').html(Title);
         var Buttons = '<div align="center"><input align="center" type="button"  class="btn btn-primary" id="Start" value="התחלה" ></div>';

        $('#Bottom').html(Buttons);
        
      $('#Start').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
           var advicetrial=0
           var askadvice=-1
           var advice=-5
             Options(BlockNum,0);//Start with the first block
                        

        });

    }
    
    function Options(BlockNum,TrialNum) {


        $('#Top').css('height', thisHeight / 20);
        //$('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

  var  InitTime = (new Date()).getTime();

     $('#Stage').append('<div class="row"> <div class="col-sm-3"></div>  <div id= "progressBarFrame" class="col-sm-6 nopadding"></div> </div>')
   

     $('#progressBarFrame').css({ "height": thisHeight / 32 + 'px', "background-color": "grey"});
    $('#progressBarFrame').show();
              var thisWidth = $('#progressBarFrame').width() ;

    CreateDiv('progressBarFrame', 'progressBar');
    $('#progressBar').css({"width": ((TrialNum+1) * thisWidth / (NumTrials)) + 'px', "height": thisHeight / 32 + 'px', "background-color": "#A4DE78"});

    $('#progressBar').show();
        
        

        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<div id = "Title"><H2 align = "center"  dir = "rtl">ביחרו אגם:</H2></div><div class="row" id = "choices" width = '+DispWidth/2+'> <div class="row">\n\
                       <div class="col-sm-10 col-sm-offset-1">';

         
        
        
        var Door1 = '<img id = "Door1" src="images/'+LakeImage[LakeOrder[BlockOrder[BlockNum]]]+'.png" class="img-responsive center-block" >';
        var Door2 = '<img id = "Door2" src="images/'+LakeImage[LakeOrder[BlockOrder[BlockNum]+4]]+'.png" class="img-responsive center-block" >';

        
          var Sum1 ='<div text = "center" align="center" dir = "rtl"><h3>'+LakeName[LakeOrder[BlockOrder[BlockNum]]]+'</h3></div>';
        var Sum2 ='<div text = "center" align="center" dir = "rtl"><h3>'+LakeName[LakeOrder[BlockOrder[BlockNum]+4]]+'</h3></div>';

      var RandPosition = Math.random();
              //  var RandPosition = RandPos[BlockNum];

        if (RandPosition < 0.5) {
            if (ThisMobile===1){
                    console.log('phone');
                  var Images = '<div class="row"> <div id = "LeftImage"  width = "'+DispWidth/2+'px">' + Door1 + Sum1+'</div><div  id = "RightImage"  width = "'+DispWidth/2+'px">' + Door2 + Sum2+ '</div></div><br><div id = "Middle" ></div>';
            }else{
               var Images = '<div class="row" width = '+DispWidth+'> <div class="col-sm-4" id = "LeftImage">' + Door1 + Sum1+'</div><div id = "Middle" class="col-sm-4 nopadding" ></div><div class="col-sm-4" id = "RightImage" >' + Door2 + Sum2+ '</div></div>';  
            }
          
           
        } else {
           if (ThisMobile===1){
                   console.log('phone');
                  var Images = '<div class="row"> <div id = "LeftImage"  width = "'+DispWidth/2+'px">' + Door2 + Sum2+'</div><div  id = "RightImage"  width = "'+DispWidth/2+'px">' + Door1 + Sum1+ '</div></div><br><div id = "Middle" ></div>';
            }else{
               var Images = '<div class="row" width = '+DispWidth+'> <div class="col-sm-4" id = "LeftImage">' + Door2 + Sum2+'</div><div id = "Middle" class="col-sm-4 nopadding" ></div><div class="col-sm-4" id = "RightImage" >' + Door1 + Sum1+ '</div></div>';  
            }
          
        }

        $('#TextBoxDiv').html(Title + Images+ '</div></div>');

        if (ThisMobile===1){
                 $('Middle').css({"width": DispWidth/2 + 'px', height: DispWidth/2 + 'px'});
        $('#LeftImage').css({"width": DispWidth/1.7 + 'px', "padding-right":'15px', "padding-left":'15px'});
        $('#RightImage').css({"width": DispWidth/1.7 + 'px', "padding-right":'15px', "padding-left":'15px'});
      $('#LeftImage').css({"float": 'left'});
        $('#RightImage').css({"float":'left'});

        
        }
 
    
        

        var Press=0;
        $('#Door1').click(function() {
            if (Press===0){
                Press=1;
           
            $(this).css({"border-color": "#CCFF33",
                "border-width": "3px",
                "border-style": "solid"});
  var  ThisTime = (new Date()).getTime();
            Reward(BlockNum,TrialNum, 1,Sign(RandPosition-0.5),BlockOrder[BlockNum],ThisTime-InitTime);
 }
        });
        $('#Door2').click(function() {
            if (Press===0){
                Press=1;
            $(this).css({"border-color": "#CCFF33",
                "border-width": "3px",
                "border-style": "solid"});
  var  ThisTime = (new Date()).getTime();
            Reward(BlockNum,TrialNum, 2,Sign(0.5-RandPosition),BlockOrder[BlockNum]+3,ThisTime-InitTime);
            }
        });

    }

    function Reward(BlockNum,TrialNum, Choice,Side,Lake,RT) {

        $('#Title').empty();
       
       console.log('Lake '+ Lake)
        var ThisReward = 0;
        

        
        
        
        // ThisReward=Math.round(10*jStat.beta.sample( Alpha[BlockOrder[BlockNum]], Beta[BlockOrder[BlockNum]] ));
        
        var RandomNum = Math.random();
        if (Choice === 1) {//Door1
                         //ThisReward = Math.min(8,Math.max(2,Math.round((55 + (((Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1)) * 17))/10)));
            
            if (Math.random()<p_fish_lake_1){
            ThisReward = 1
            }else{
                ThisReward = 0
            }
        

            //ThisReward=Math.round(10*jStat.beta.sample( Alpha[BlockOrder[BlockNum]], Beta[BlockOrder[BlockNum]] ));
           // console.log('Beta:A : '+ Alpha[BlockOrder[BlockNum]]+', B: '+ Beta[BlockOrder[BlockNum]])
               
        } else {//Door2
             //ThisReward = Math.min(8,Math.max(2,Math.round((40 + (((Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1)) * 17))/10)));
            //ThisReward=Math.round(10*jStat.beta.sample( Alpha[BlockOrder[BlockNum]+3], Beta[BlockOrder[BlockNum]+3] ));
          //  console.log('Beta:A : '+ Alpha[BlockOrder[BlockNum]+3]+', B: '+ Beta[BlockOrder[BlockNum]+3])
             if (Math.random()<p_fish_lake_2){
            ThisReward = 1
            }else{
                ThisReward = 0
            } 
        }
        

        SumReward = SumReward + ThisReward;
        if (ThisReward == 1){
            $('#Title').html('<H2 align = "center" dir = "rtl">הצלחת!</H2>');
            $('#Middle').html('<img id = "Door1" src="images/fish.png" class="img-responsive center-block" width="150px" height="750px" >');
        //CreateFishDisplay(ThisReward)
        }else{
             $('#Title').html('<H2 align = "center"   dir = "rtl">לא הצלחת היום.</H2>');
         $('#Middle').html('<img id = "nothing" src="images/got_nothing.png" class="img-responsive center-block" width="100px" height="700px" >');
        }
                $('Middle').css({"width": DispWidth/4 + 'px', height: DispWidth/4 + 'px'});

           
            InsertDataAjax(TrialNum,Choice,Side,RT,Lake,ThisReward,BlockNum)

        
       
                if (TrialNum + 1 < NumTrials) {
                setTimeout(function() {
                    $('#TextBoxDiv').fadeOut(500);
                    setTimeout(function() {
                        $('#Stage').empty();
                        $('#Bottom').empty();
                        Options(BlockNum,TrialNum + 1,0,-1,-5);
                    }, 500);
                }, 1500);
            } else {
                if (BlockNum + 1 < NumBlocks) {
                setTimeout(function() {
                    $('#TextBoxDiv').fadeOut(500);
                    setTimeout(function() {
                        $('#Stage').empty();
                        $('#Bottom').empty();
                        Block(BlockNum+1,0);
                    }, 500);
                }, 1500);
            } else {
                 setTimeout(function() {
                    $('#TextBoxDiv').fadeOut(500);
                    setTimeout(function() {
                        $('#Stage').empty();
                        $('#Bottom').empty();
                         End();
                    }, 500);
                }, 1500);
             

            }
            }
            
     
    }
    
    
    

    function CreateFishDisplay(NumFish){
     //   console.log('NumFish: '+NumFish)
          //      console.log('Width: '+$('#Middle').width())

        var NoFish=10-NumFish;
        for (i=0;i<NumFish;i++){
             CreateDiv('Middle', 'Fish' + i);
         //   console.log('Fish '+i)
                $('#Fish' + i).css('width',$('#Middle').width()/2.1);
                $('#Fish' + i).css('float', 'left');
              $('#Fish' + i).html('<img src="images/fish.png" class="img-responsive " >')
             $('#Fish' + i).show()
        }
        
             /* for (i=0;i<NoFish;i++){
             CreateDiv('Middle', 'NoFish' + i);
                $('#NoFish' + i).css('width',  $('#Middle').width()/2);
                $('#NoFish' + i).css('float', 'left');
              $('#NoFish' + i).html('<img src="images/NoFish.png" class="img-responsive " >')
        }*/
        
    }
    
    
    function InsertDataAjax(TrialNum,Choice,Side,RT,Lake,ThisReward,BlockNum){
        console.log('Insert')
          var  ThisTime = (new Date()).getTime()-Init;
        
      $.ajax({
                type: 'POST',
                data: {ID:SubID,TrialNum:TrialNum,Choice:Choice,Side:Side,Lake:Lake,Reward:ThisReward,RT:RT,Time:ThisTime,BlockNum:BlockNum},
                async: false,
                url: 'php/InsertTrialData.php',
                dataType: 'json',
                success: function(r) {
                    if (r[0].ErrorNo > 0) {
                        Error();
                    } 
                }, error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);
                }
            });
        
    }
    
    
    
    
    
    
    
        function AdviceDisplayPre(BlockNum,TrialNum ){
             $('#Top').css('height', thisHeight / 20);
      //  $('#Stage').css('width', DispWidth);
       // $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);
        
        console.log('AdviceType'+BlockOrder[BlockNum])
        
        if (BlockOrder[BlockNum]>0){
            
            
            switch (BlockOrder[BlockNum]) {
            case 1:
                var Info = '<H2 align=center>Do you want to ask for advice from a previous player?</H2>';
                var Face=AdviserPic;
                break;
            case 2:
                var Info = '<H2 align=center>Do you want to secretly observe a choice made by a previous player?</H2>';
                var Face=NoAdviserPic;   
                break;
            case 3:
                var Info = '<H2 align=center>Do you want to ask for advice from an Algorithmic player?</H2>';
                var Face=AiAdviserPic;
                break;
            default:
                var Info;
                break;
        }
        ;
       CreateDiv('Stage', 'TextBoxDiv');
            var LeftSide='<div class="row"><div class="col-sm-4"><img id = "Door1" src="'+Face+'" class="img-responsive center-block" ></div>'
            var RightSide='<div class="col-sm-8">'+Info+'</div></div>'
        $('#TextBoxDiv').html(LeftSide+RightSide);

       var Button =  '<div align="center">\n\
<input class="btn btn-primary btn-lg" type="button" value="Yes" id = "btn_yes">\n\
<input class="btn btn-primary btn-lg" type="button" value="No" id = "btn_no">\n\
</div>';
            
            
        $('#Bottom').html(Button);
       

        $('#btn_no').click(function() {
            
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            
            Options(BlockNum,TrialNum, 1,0,-5);
        });
            
        $('#btn_yes').click(function() {
            
            var askadvice = 1
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            
             AdviceDisplay(BlockNum,TrialNum );

        });
            
        }
        else{
            AdviceDisplay(BlockNum,TrialNum );
        }
        
    }
    
    function AdviceDisplay(BlockNum,TrialNum){
             $('#Top').css('height', thisHeight / 20);
      //  $('#Stage').css('width', DispWidth);
      //  $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);
        
        console.log('AdviceType'+BlockOrder[BlockNum])
        
        if (BlockOrder[BlockNum]>0){
            
             if (Math.random ()< advice_Acc){
                        
                      var Acc=0
                    }else{
                                           var Acc=4
                                           }
            console.log('acc:'+Acc)
            switch (BlockOrder[BlockNum]) {
            case 1:
                var Info = '<H2 align=center>The player advises you to go fish at Lake '+ LakeName[LakeOrder[BlockOrder[BlockNum]+Acc]]+'.</H2>';  
                var Face=AdviserPic;
                break;
                    
            case 2:
                var Info =  '<H2 align=center>The player went fishing at Lake '+ LakeName[LakeOrder[BlockOrder[BlockNum]+Acc]]+'.</H2>';
                var Face=NoAdviserPic;  
                break;
                    
            case 3: 
                var Info = '<H2 align=center>The Algorithmic player advises you to go fish at Lake '+ LakeName[LakeOrder[BlockOrder[BlockNum]+Acc]]+'.</H2>';
                var Face=AiAdviserPic;
                break;
                    
            default:
                var Info;
                break;
        }
        ;
       CreateDiv('Stage', 'TextBoxDiv');
            var LeftSide='<div class="row"><div class="col-sm-4"><img id = "Door1" src="'+Face+'" class="img-responsive center-block" ></div>'
            var RightSide='<div class="col-sm-8">'+Info+'<div class="row"><div class="col-sm-3"></div>'
            var LakeIm='<div class="col-sm-6"><img id = "Lake" src="images/'+LakeImage[LakeOrder[BlockOrder[BlockNum]+Acc]]+'.png" class="img-responsive center-block" ></div></div></div></div>'
        $('#TextBoxDiv').html(LeftSide+RightSide+LakeIm);

        var Buttons = '<div align="center">\n\
<input align="center" type="button"  class="btn btn-primary" id="Next" value="Next" >\n\
</div>';

        $('#Bottom').html(Buttons);


        $('#Next').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            
             Options(BlockNum,TrialNum,1,1,Acc );

        });
            
        }
        else{
            Options(BlockNum,TrialNum, 0,-1,-5);
        }
        
    }
    
    
    
    
    
    
    
    
    
    function AfterQuestions(PageNum,Resp) { 


        $('#Top').css('height', thisHeight / 20);
        // $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

        CreateDiv('Stage', 'TextBoxDiv');
            var numpages=1            
       
        switch (PageNum) {
            case 1:
                var Question = '<H2 align=center  dir = "rtl">עד כמה את.ה מרגיש.ה מוצפ.ת רגשית כרגע?</H2>'; 
                break;
        
                    
            default:
                var Question;
                break;
        }
        ;
        

        var Html1 = ' <div class="container">\n\
 <div class="col-sm-12 text-center">\n\
</div></div>\n\
 <div class="row">\n\
            <div class="col-sm-12 text-center">\n\
                 <div class="row">\n\
                       <div class="col-sm-10 col-sm-offset-1 text-left">\n\
                                          '+ Question +'\n\
<form data-toggle="validator" role="form" id="ConsentForm">\n\
 <div class="row"><div class="col-sm-4 col-sm-offset-4 text-center"><img id = "Door1" src="'+Face1+'" class="img-responsive center-block" width=60% ><H3>'+Option1+'</h3></div></div><div class="row"><div class="col-sm-6 col-sm-offset-3 text-center">\n\
<div class="form-group">\n\
 \n\
<div class="radio-inline">\n\
   <label class="form-check-label" for="inlineRadio11"><input class="form-check-input " type="radio" name="inlineRadioOptions1" id="inlineRadio11" value="1" required>\n\
 Not at all</label>\n\
</div>\n\
<div class="radio-inline">\n\
 <label class="form-check-label" for="inlineRadio21"> <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio21" value="2" required>\n\
  2</label>\n\
</div>\n\
<div class="radio-inline">\n\
  <label class="form-check-label" for="inlineRadio31"><input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio31" value="3" required>\n\
  Somewhat</label>\n\
</div>\n\
<div class="radio-inline">\n\
  <label class="form-check-label" for="inlineRadio41"><input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio41" value="4" required>\n\
  4</label>\n\
</div>\n\
<div class="radio-inline">\n\
  <label class="form-check-label" for="inlineRadio51"><input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio51" value="5" required>\n\
  Very much</label>\n\
</div> </div> </div>  </div>\n\
     <div class="row"><div class="col-sm-4 col-sm-offset-4 text-center"><img id = "Door1" src="'+Face2+'" class="img-responsive center-block" width=60% ><H3>'+Option2+'</h3></div></div><div class="row"><div class="col-sm-6 col-sm-offset-3 text-center">\n\
<div class="form-group">\n\
 \n\
<div class="radio-inline">\n\
   <label class="form-check-label" for="inlineRadio12"><input class="form-check-input " type="radio" name="inlineRadioOptions2" id="inlineRadio12" value="1" required>\n\
 Not at all</label>\n\
</div>\n\
<div class="radio-inline">\n\
 <label class="form-check-label" for="inlineRadio22"> <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio22" value="2" required>\n\
  2</label>\n\
</div>\n\
<div class="radio-inline">\n\
  <label class="form-check-label" for="inlineRadio32"><input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio32" value="3" required>\n\
  Somewhat</label>\n\
</div>\n\
<div class="radio-inline">\n\
  <label class="form-check-label" for="inlineRadio42"><input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio42" value="4" required>\n\
  4</label>\n\
</div>\n\
<div class="radio-inline">\n\
  <label class="form-check-label" for="inlineRadio52"><input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio52" value="5" required>\n\
  Very much</label>\n\
</div> </div> </div>  </div>\n\
    <div class="row"><div class="col-sm-4 col-sm-offset-4 text-center"><img id = "Door1" src="'+Face3+'" class="img-responsive center-block" width=60% ><H3>'+Option3+'</h3></div></div><div class="row"><div class="col-sm-6 col-sm-offset-3 text-center">\n\
<div class="form-group">\n\
 \n\
<div class="radio-inline">\n\
   <label class="form-check-label" for="inlineRadio13"><input class="form-check-input " type="radio" name="inlineRadioOptions4" id="inlineRadio13" value="1" required>\n\
 Not at all</label>\n\
</div>\n\
<div class="radio-inline">\n\
 <label class="form-check-label" for="inlineRadio23"> <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio23" value="2" required>\n\
  2</label>\n\
</div>\n\
<div class="radio-inline">\n\
  <label class="form-check-label" for="inlineRadio33"><input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio33" value="3" required>\n\
  Somewhat</label>\n\
</div>\n\
<div class="radio-inline">\n\
  <label class="form-check-label" for="inlineRadio43"><input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio43" value="4" required>\n\
  4</label>\n\
</div>\n\
<div class="radio-inline">\n\
  <label class="form-check-label" for="inlineRadio53"><input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio53" value="5" required>\n\
  Very much</label>\n\
</div> </div> </div>  </div>\n\
<div class="form-group col-sm-12" align="center">\n\
    <button type="submit" class="btn btn-primary btn-lg">Submit</button>\n\
  </div>\n\
        </div>\n\
                       </div>\n\
            </div>\n\
        </div></div>';


        $('#TextBoxDiv').html(Html1);


        var form = document.getElementById('ConsentForm');
        if (form.attachEvent) {
            form.attachEvent("submit", processForm);
        } else {
            form.addEventListener("submit", processForm);
        }

        function processForm(e) {
            if (e.preventDefault)
                e.preventDefault();

            var ThusForm = document.getElementById('ConsentForm');
        console.log(ThusForm.elements)

            var Q3answer = 0;
            // var thisContact = ThusForm.elements[6].value;
         var Q1answer = 0
            var Q2answer = 0
         
         
            for (i = 0; i < 5; i++) {
    if (ThusForm.elements[i].checked) {
      Q1answer = ThusForm.elements[i].value;
    }
  }
            
            
           for (i = 5; i < 10; i++) {
    if (ThusForm.elements[i].checked) {
      Q2answer = ThusForm.elements[i].value;
    }
  }  
               for (i = 10; i < 15; i++) {
    if (ThusForm.elements[i].checked) {
      Q3answer = ThusForm.elements[i].value;
    }
  }     
           
     
            
                     Resp=Resp+','+Q1answer+','+Q2answer+','+Q3answer   
console.log(Q1answer)
            console.log(Q2answer)

            console.log(Q3answer)
  console.log(Resp)
            if (PageNum<numpages){
                AfterQuestions(PageNum+1,Resp)
            }else{
                $('#TextBoxDiv').remove();
            $('#CheckAlert').remove();
            $('#Stage').empty();
            // SurveyPageDetails();
            $.ajax({
                type: 'POST',
                data: {
                    ID: thisCode,
                    Responses: Resp
                },
                async: false,
                url: 'php/InsertQuestData.php',
                dataType: 'json',
                success: function (r) {
                    //alert(r)
                    if (r[0].ErrorNo > 0) {

                        Duplicate();
                    } else {
                        End();
                    };
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);
                }
            }); 
            }
           


            return false;
        }
 }


      
    
        
        
        
    function QuestIntro(){
        
           $('#Top').css('height', thisHeight / 20);
      //  $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

    

        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<div id = "Title"><H2 align = "center">You have completed all four parts of the fishing game. <br> You will now be directed to a short questionnaire.<br>It make take a few seconds for the questionnaire to load.</H2></div>';
        $('#TextBoxDiv').html(Title);
         var Buttons = '<div align="center"><input align="center" type="button"  class="btn btn-primary" id="Start" value="Start!" ></div>';

        $('#Bottom').html(Buttons);
        
      $('#Start').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
           
             SurveyPageQuest();//Start with the first block
                        

        });

    }
    
    
    
    
function SurveyPageQuest(){
      console.log('SurveyQuest');
 
        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
       // $('#Stage').css('width', DispWidth);
        $('#Bottom').css('min-height', thisHeight / 20);  
    
       


    
    var JsonDetails =  JSON.parse(JSON.stringify(DemogJson));
       console.log(JsonQuest)
/*$.ajax({
    'async': false,
    'global': false,
    'url': "jsons/DemogJson.json",
    'dataType': "json",
    'success': function (data) {
        console.log(JsonDetails)
        JsonDetails = data;
    }
});
    */

    
    var survey_quest = new Survey.Model(JsonQuest);
    
$("#Stage").Survey({
    model: survey_quest,
    onComplete: InsertQuest
});

    
}
    
    
    
    
    function InsertQuest(survey) {
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
           //send Ajax request to your web server.
var Json1=[survey.data]

var csv = ConvertToCSV_quest(Json1)

console.log("The results are:" +csv)
      //InstructionsJigsaw(1);

    $.ajax({
                type: 'POST',
                data: {ID:SubID,Responses:csv},
                async: false,
                url: 'php/InsertQuestData.php',
                dataType: 'json',
                success: function(r) {
                    if (r[0].ErrorNo > 0) {
                        Error();
                    } else {
                        $('#Stage').empty();
            $('#Bottom').empty();
                      InstructionsJigsaw(1);
                           
                    }
                    ;
                }, error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);
                }
            });

    }
    
    
    
        
    function End() {


        $('#Top').css('height', thisHeight / 20);
     //   $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);
        
       InsertFinishedAjax()
        CreateDiv('Stage', 'TextBoxDiv');
var Bonus = 0.01*SumReward;
        var Title = '<h2 align = "center"  dir = "rtl">תודה רבה, סיימת את מטלת הדגים!<br> <br> הצלחת לדוג '+SumReward+' דגים!<br>המון תודה! סיימת את החלק הראשון של שלב זה במחקר. אנא שלח.י לנו בווצאפ למספר 055-301-5600 צילום מסך של דף זה שנדע שסיימת ונעביר לך תשלום על סך 60 ש"ח. <br><br>במידה וסימנת שתרצה.י לענות על השלב השני של השאלונים מיד (בתוספת 60 ש"ח נוספים)- את.ה מוזמן.ת להיכנס <a href = "https://haifauniversity.qualtrics.com/jfe/form/SV_6YEMRPX3lsLgqKG" target="_blank">ללינק לשאלונים</a>. הלינק תקף למשך 4 ימים.<br><br>במידה ותרצה לענות בהמשך נשלח לך את הלינק בהודעה נפרדת.';
               
        $('#TextBoxDiv').html(Title );

   /*
        
      $('#myButton').click(function() {
           
             location.href = 'https://app.prolific.co/submissions/complete?cc=76A1A900';                        

        });*/
        


       
    }
    ;

function MobileNotice() {

        $('#Top').css('height', thisHeight / 20);
     //   $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);
        
        CreateDiv('Stage', 'TextBoxDiv');
        var Title = '<h3 align = "center">You seem to try to perform the experiment on your phone. <br> <br> This experiment does not display well on phones. Please try again using a desktop or a laptop. <br><h1 align = "center">Thank you!</h3>';

        $('#TextBoxDiv').html(Title );

console.log('here')
       
    }
    ;
   

    
    function InsertFinishedAjax(){
          

      $.ajax({
                type: 'POST',
                data: {ID:SubID,Worker:thisCode,SumReward:SumReward},
                async: false,
                url: 'php/FinishCode.php',
                dataType: 'json',
                success: function(r) {
                    if (r[0].ErrorNo > 0) {
                        Error();
                    } 
                }, error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);
                }
            });
      
    }

    //Utility Functions
    function CreateCode() {
        return Math.floor(Math.random() * 10000000000);
    }
    ;

    function Sign(x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
    };

    function CreateDiv(ParentID, ChildID) {

        var d = $(document.createElement('div'))
                .attr("id", ChildID);
        var container = document.getElementById(ParentID);

        d.appendTo(container);
    }
    ;
    
    function Shuffle(array) {

        var currentIndex = array.length
                , temporaryValue
                , randomIndex
                ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    ;

    
});

