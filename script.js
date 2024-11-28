var acc = document.getElementsByClassName("Acardion");
    var i;
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
        for(j=0; j<acc.length;j++){
            if(j!==i)//اگه روی گزینه دیگه ای کلیک کرد بلافاصله قبلیو ببند
            acc[j].nextElementSibling.style.maxHeight = null;      
            }
      var panel = this.nextElementSibling;
      if(panel.style.maxHeight){
          panel.style.maxHeight=null
      }
      else{
     panel.style.maxHeight=panel.scrollHeight +'px'
      }
    });
  }
