   window.onload = function() {
	   
	   var obtn= document.querySelector('.elevator-button');
    //文档高度
    var clientHeight=document.documentElement.clientHeight;
    var time=null;
    var isTop=true, cancelScroll = false;

    function showBackTop(){
    	
        var osTop=document.documentElement.scrollTop||document.body.scrollTop;
        if(osTop>=400 || osTop>=clientHeight){
            obtn.style.display='block';
        }else{
            obtn.style.display='none';
        }
    }
    showBackTop();
    window.onscroll=showBackTop;
    
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    duration: 500 // milliseconds
  });
}
