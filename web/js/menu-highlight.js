
      $(document).ready(function(){
 		  var str=location.href.toLowerCase();
          
            if (str.slice(-1) == '/'){
                str = str + 'index.php';
            } 
        $('#cssmenu li a').each(function() {
                if (str.indexOf(this.href.toLowerCase()) > -1) {
					$("li.highlight").removeClass("highlight");
                        $(this).parent().addClass("highlight"); 
                   }
                 }); 
			})
            
            $('#cssmenu li a:first-child').addClass("highlight");