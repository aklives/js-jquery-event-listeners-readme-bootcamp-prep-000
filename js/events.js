function getIt(){
  $('p').on("click", function() {
    alert("Hey!");
});
}

function frameIt(){
  $('img').on('load', function(){
    $('img').class = 'tasty';
    
});
}

$(document).ready(function(){

getIt();

});
