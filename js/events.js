function getIt(){
  $('p').on("click", function() {
    alert("Hey!");
});
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('secondname');
    
});
}

$(document).ready(function(){

getIt();

});
