function play(){
  const lyrics = [
    "Bawat ngiti, bawat luha",
    "Bawat gising, bawat pikit",
    "Bawat hangin na tinatanggap",
    "Bawat buga",
    
    "At habang ika'y yinayakap nang maigi",
    "Binubulong ang dalanging 'wag sana maglaho sa hangin",
    "Ang bawat piyesa na bumubuo sa 'yo",
    "Bawat piyesang nawa'y mapasaakin habang-buhay",
    
    "Dito ka na lang habang-buhay",
    "Dito ka na lang habang-buhay",
    "Dito ka na lang habang-buhay",
    "Habang-buhay",
    
    "At kahit na hindi na nagkikita",
    "Parating iniisip ang mga",
    "Segundong ikaw ang aking nakakasama, sinta",
    
    "At habang ika'y yinayakap nang maigi",
    "Binubulong ang dalanging 'wag sana maglaho sa hangin",
    "Ang bawat piyesa na bumubuo sa 'yo",
    "Bawat piyesang nawa'y mapasaakin habang-buhay",
    
    "Dito ka na lang habang-buhay",
    "Dito ka na lang habang-buhay",
    "Dito ka na lang habang-buhay",
    "Habang-buhay",
    
    "At 'wag kang bibitaw, 'wag kang mawawala",
    "Oh, aking dinadala ang bawat piyesa ng ikaw",
    "Ano'ng gagawin kung wala ka?",
    "Ano'ng gagawin kung wala ka?",
    "Ano'ng gagawin kung wala ka?",
    "Kung wala ka?",
    
    "Dito ka na lang habang-buhay",
    "Dito ka na lang habang-buhay",
    "Dito ka na lang habang-buhay",
    "Habang-buhay",
    
    "Habang-buhay",
    "Habang-buhay",
    "Habang-buhay",
    "Habang-buhay"
  ];
  
  let line = 0;
  const speed = 5000;
  
  function show(){
    if(line < lyrics.length){
      document.getElementById("piyasa").textContent += lyrics[line] + "\n";
      line++
      setTimeout(show, speed);
    }
  }
  
  show();
}

let word = "Im also disappointed that I cant give you small things like flowers, or even just more of my time. My focus on academics, trying to keep up with you, has made it hard to manage my time well. I want to support you the way your friends do, but I struggle to ask for help. In the end, I just wish I could be there for you in the way I always imagined.";


$(document).ready(function(){
  let num = 0;

  $("#open").click(function(){
      num++;

      if(num === 1){
        $("#titlepage").css({
          "transform": "rotateY(-150deg)", 
          "margin-left": "-2px", 
          "transition": "1s ease"
        }).text('');

        $("#backcover").css({
          "box-shadow": "0px 0px transparent",
          "transition": "0.7s ease"
        })

        $("#titlepage").css({"z-index": "auto"});

        $("#side").css({
          "margin-left": "-15px",
          "z-index": "-1",
          "transition": "0.7s ease"
        });
        
      }else if(num === 2){
        $("#pagetext1").css({"transform": "rotateY(-150deg)", 
        "background-color": "white",
        "box-shadow": "0 0 "
      }).text('');
        $("#pagetext2").css({
          "display": "block",
          "transition": "0.7s ease",
        });
        $("#n-page").hide();
        $("#s-page").css({
          "display": "block",
          "transition": "0.7s ease"
        });

        $(".page").css({
        "box-shadow": "0px 0px transparent",
        "transition": "0.5s ease"
        });

      }else if(num === 3){
        $("#pagetext2").css({
          "transform": "rotateY(-150deg)",
          "transition": "0.7s ease",
           "box-shadow": "2px 2px white, 5px 5px black "
        }).text('');
        $("#pagetext3").css({
          "display": "block", 
          "transition": "0.7s ease"
        });

        $("#pagetext2").css({
           "box-shadow": "2px 2px white, 5px 5px black"
        })
      }else if(num === 4){
        $("#pagetext3").css({
            "transform": "rotateY(-150deg)",
            "transition": "0.7s ease"
        }).text('');
        $(".panis").css({
            "visibility":"visible"
        }).text();

        $("#text8").text('hello po');
        $("#text9").text(word)
    
        $(".page").css({
            "box-shadow": "0px 0px transparent",
            "transition": "0.5s ease"  // <-- Missing comma was here
        });
        }else{
        location.reload();
      }
  });






});