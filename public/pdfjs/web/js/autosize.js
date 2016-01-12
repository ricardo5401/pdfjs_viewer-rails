$(document).ready(function(){
    setSelectBoxByIndex();
    $(window).on('orientationchange', function(event) {
        setSelectBoxByIndex(); //back to autoZoom if user change a different option
    });
});
function setSelectBoxByIndex() {
  document.getElementById("scaleSelect").options[0].selected = 'selected';
  alert(document.getElementById("scaleSelect").options[0].text);
  //autoZoom
}