function close_model(){
    window.close();
}
           
function open_model() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ.")
}

function btn_spyquedelique(){

    console.log("appuyer")


    var front = document.getElementById('font');// on récupère l'élément
    var paraff = document.getElementsByTagName('P');
    var headf = document.getElementsByTagName('h1');
    var headf2 = document.getElementsByTagName('h2');

        front.style.backgroundColor =("magenta"); // couleur background
      
        for(var i = 0; i < paraff.length; i++) 
            paraff[i].style.color = "#0000FF";
        
        for(var i = 0; i < headf.length; i++) 
            headf[i].style.color = "#008000"; // police paragraphe
      
       for(var i = 0; i < headf2.length; i++) 
            headf2[i].style.color = "#008000";

        for(var i = 0; i < paraff.length; i++) 
            paraff[i].style.fontFamily = "Papyrus,fantasy";

         for(var i = 0; i < headf2.length; i++) 
            headf2[i].style.fontFamily = "Comic Sans";
         
    
     console.log ("sa marche ");

}
   

