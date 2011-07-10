$(function() {
   
  window.JQUERY_PROGRESS_BAR = {
    init:function(){
      JQUERY_PROGRESS_BAR.progressBar();
    },
    progressBar:function(){
      var progressDiv = '<div class="progressOuterDiv"'+
      'style="width:200px;height:20px;border:1px solid black">' +
      '<div class="progressInnerDiv"' +
      'style="height:20px;background:red;width:0%;"' +
      '</div>' +
      '</div>';
      $('body').append(progressDiv);
      var initialWidth = $('.progressInnerDiv').css('width');
      var currentProgress = parseInt($('.progressInnerDiv').css('width'));      
      var progressTime = setInterval(function(){
        currentProgress += 1;
        if(currentProgress <= '95'){
          $('.progressInnerDiv').css('width', currentProgress + '%');
        }else{
          clearInterval(progressTime);
        }
      },10);
    }
  }
  
  JQUERY_PROGRESS_BAR.init();
  
});