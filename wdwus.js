
var k = 0
var j = 0
var OGLength = 0;
var OGtext = ""
// A $( document ).ready() block.
$( document ).ready(function() {
    OGtext = $('#wd').text();
    OGLength = OGtext.length;
    $('#wd').text("");
    $("#wd").css({"visibility": "visible"});

    generateWordLength();
});


//first we generate a word a random string at about = the length of the original string
function generateWordLength() {
    k+=2;
    if(k === 2){
        k == OGtext.length/4;
    }
     if(k >= OGtext.length)
    {
       
            insertOGtext();
    }
    else{
            $('#wd').text(randomChars(k));
    }
    
    if( k < OGLength){
        setTimeout( generateWordLength, 100 );
    }
}

// now we insert 1 char at a time from the original text
function insertOGtext() {
   
    if(j === OGtext.length)
    {
            $('#wd').text(OGtext);
    }
    else{
           var w = $('#wd').text();
           w =  w.replaceAt(j, OGtext[j]);
           $('#wd').text(w);
    }
    j+=1;
    if( j < OGLength ){
        setTimeout( insertOGtext, 20 );
    }
  
}



   
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function randomChars(charLength)
{
     var text = "";
    //abcdefghijklmnopqrstuvwxyz
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*\{}.,/][+-_=?><~";

    for( var i=0; i < charLength; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    console.log(text);
    return text;
}