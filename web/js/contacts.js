//Центрируем аватарку ------------------------ Старт
function avaCentred($avaSel,$parent){
    $($avaSel).each(function(){
        var parentWidth = $($parent).width(),
                imgWidth = $(this).width(),
                leftMargin = (parentWidth - imgWidth) / 2;
        //alert ('1');
        if (imgWidth > $(this).height()) {
            //    $(this).css("marginLeft", leftMargin);
            $(this).css("maxHeight","75px").css("maxWidth","none");
        }
        else {
            $(this).css("maxWidth","75px").css("maxHeight","none");
        }
    });
    
}
//Центр. аватарку-----------------------          Конец

function ajaxFeedback(path) { //Ajax отправка формы
   // $("#submit5f").on("click", function(){
   if (window.FormData === undefined) {
    // Сообщаем отсталым браузерам, что они отсталые :-) Либо делаем альтернативную загрузку.
    var message = $('#feedbackdb-form').serialize();
    }else{
       // event.preventDefault();
        var  message = new FormData($('#feedbackdb-form')[0]);
    }
    
    $.ajax({
            type: "POST",
            url: path+"phpreq/feedb.php",                
            data: message,
            contentType: false,
            processData: false, 
            cache: false,
            headers: { 'cache-control': 'no-cache' }, // fix for IOS6 (not tested)
            success: function(data) {               
                $('.feedback-form').slideUp(1000);//hide();
                $('#feedbackdb-form')[0].reset();
                $('#feedback-ok h1').slideDown(1000).delay(3000).slideUp(1000);
                //Переход на 1-ю страницу после отправки формы
               setTimeout(function() {
                   if (window.location.hash == '#page1'){
                        loadPage('#page1');
                    }else{
                        window.location.hash = '#page1'
                    }
                }, 2000);                                                                  
            /*     if (window.location.pathname == '/feedback-dev.php'){ 
                    avaCentred(".img-avatar",".avatar");			
                } */
            },
            error:  function(xhr, str){
                    alert("Возникла ошибка!");
            }
    });

}

// ----- ОТПРАВКА 4-x форм ----
function ajax(id,path) { //Ajax отправка формы
	var msg = $(id).serialize();
	$.ajax({
		type: "POST",
		url: path+"phpreq/send.php",
		data: msg,
		success: function(data) {
            $(".results").html(data).show(data);
            $(id)[0].reset();  
         if (id == '#feedbackForm') {
         //Если отправилось ок
            $('#submit3f').hide();
            $('#name3f').attr('disabled', true);
            $('#email3f').attr('disabled', true);
            $('#message3f').attr('disabled', true);
            $('#courses3f').attr('disabled', true);
         }
         if (id == '#contact-form') {            
                setTimeout( function() {                    
                    $(".results").delay(1500).fadeOut(500);
                    $("#contact2").modal('hide');
                }, 2500);
            }
            if (id == '#callback-form'){
                setTimeout( function() {                    
                    $(".results").delay(1500).fadeOut(500);
                    $("#callback").modal('hide');
                }, 2500);
            }
            if (id == '#freelesson-form'){
                setTimeout( function() {                    
                    $(".results").delay(1500).fadeOut(500);
                    $("#freelesson").modal('hide');
                }, 2500);
            }
         
            /*$(id + " .results").show();*/
		},
		error:  function(xhr, str){
			alert("Возникла ошибка!");
		}
	});
}

jQuery.fn.notExists = function() { //Проверка на существование элемента
	return $(this).length==0;
}

function resetf(idform){
    $(idform)[0].reset();
    $(idform +' .help-block').hide();
    $(idform + ' .input-group').removeClass('has-error');
    $(idform + ' .form-group').removeClass('has-error');
    
    
}


// Проверка для contact-form
$(document).ready(function(){ 
// Feedback---------------------------------               Start

//Comments Avatar align
	$(".btn-danger").fadeOut();
	//Show or Hide Feedback Form
	$("#show-form").click(function(){
			$("#feedbackdb-form").slideToggle("slow");

			$(this).text(function(i, text){
			  return text === "Показать форму" ? "Скрыть форму" : "Показать форму";
	  })
	});


	function readURL(input) {
			if (input.files && input.files[0]) {
					var reader = new FileReader();

					reader.onload = function (e) {
							$('#avatar').attr('src', e.target.result);
					}
					reader.readAsDataURL(input.files[0]);
			}
	}

	//Form Avatar Align and Preview
	$("#avatar-input").change(function(){
			readURL(this);
			$(".btn-file").fadeOut();
			$(".btn-danger").fadeIn();

			$("#avatar").hide().load(function(){
					var parentWidth = $(this).parent().width(),
							imgWidth = $(this).width(),
							imgHeight = $(this).height(),
							leftMargin = (parentWidth - imgWidth) / 2;

					if (imgWidth > imgHeight) {
							$(this).css("marginLeft", leftMargin).width("auto").height("100%");
					}
					else {
							$(this).width("100%").height("auto");
					}
			}).fadeIn(500);
	});

	//Delete Avatar Button
	$(".btn-danger").click(function(){
			if($('#avatar').attr('src').indexOf('avatar') < 0) {
					$("#avatar").css("marginLeft","").fadeOut(100).attr("src","images/avatars/avatar.jpg").fadeIn(100);
					$(".btn-danger").fadeOut();
					$(".btn-file").fadeIn();
			};
	});
//Feedback----------------------------                                  END
	
//Валидация формы   
// Проверка для contact-form -------------------------------------------START
	
	$(".img-avatar").each(function(){
		var parentWidth = $(".avatar").width(),
			imgWidth = $(this).width(),
			leftMargin = (parentWidth - imgWidth) / 2;

		if (imgWidth > $(this).height()) {
			$(this).css("marginLeft", leftMargin);
		}
		else {
			$(this).css("maxWidth","75px").css("maxHeight","none");
		}
	});
	
	$("#submit1f").validation(
		$("#name1f").validate({
			test: "blank letters", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),
		$("#email1f").validate({
			test: "blank email",
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),		
		$("#message1f").validate({
			test: "blank", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		})
	);
// Проверка для contact-form -----------------------                     END   
// Проверка для callback-form -----------------------                  START
$("#submit2f").validation(
		$("#name2f").validate({
			test: "blank letters", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),
		$("#phone2f").validate({
			test: "blank phone",
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),		
		$("#message2f").validate({
			test: "blank", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		})
	);
// Проверка для callback-form -----------------------                     END  
// Проверка для feedbackForm-----------------------                  START
$("#submit3f").validation(
		$("#name3f").validate({
			test: "blank letters", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),
		$("#email3f").validate({
			test: "blank email",
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),		
		$("#message3f").validate({
			test: "blank", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		})       
	);
// Проверка для feedbackForm -----------------------                     END  
// Проверка для freelesson-form-----------------------                  START
$("#submit4f").validation(
		$("#name4f").validate({
			test: "blank letters", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),
		$("#email4f").validate({
			test: "blank email",
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),
        $("#phone4f").validate({
			test: "blank phone",
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),		
        $("#courses4f").validate({
			test: "blank", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		})
	);
// Проверка для freelesson-form -----------------------                     END  
// Проверка для freedback-form-----------------------                  START
$("#submit5f").validation(
		$("#name5f").validate({
			test: "blank letters", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),
		$("#email5f").validate({
			test: "blank email",
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),
        $("#courses5f").validate({
			test: "blank", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),
       $("#message5f").validate({
			test: "blank", 
			invalid: function(){
				$(this).parent('.input-group').siblings('.help-block').show();
                $(this).parent('.input-group').addClass('has-error');
			},
			valid: function(){
				$(this).parent('.input-group').siblings('.help-block').hide();
                $(this).parent('.input-group').removeClass('has-error');
			}
		}),
        $("#starValue").validate({
                    test: "blank digits", 
                    invalid: function(){
                        $(this).siblings('.star-span span').show();
                        $(this).parent('div').parent('raw').addClass('has-error');
                    },
                    valid: function(){
                        $(this).siblings('.star-span span').hide();
                        $(this).parent('div').parent('raw').removeClass('has-error');
                    }
                })           
	);
// Проверка для freedback-form -----------------------                     END  

// Листинг страниц---------------------------                           Start

checkURL();
	$('ul li a.page-num').click(function (e){
			checkURL(this.hash);
	});
	//filling in the default content
	default_content = $('div.view-out').html();
	setInterval("checkURL()",10);

//-------------------
 
});

// Листинг страниц
var default_content="";
var lasturl="";

function checkURL(hash)
{
	if(!hash) {
		hash=window.location.hash;	
	}
	if(hash != lasturl)
	{
		lasturl=hash;
	
		// FIX - if we've used the history buttons to return to the homepage,
		// fill the pageContent with the default_content		
		if(hash==""){
			$('div.view-out').html(default_content);
		}else{
			loadPage(hash);
		}
	}
}


function loadPage(url)
{
	url=url.replace('#page','');
	$('#loading').css('visibility','visible');	
	$.ajax({
		type: "GET",
		url: "phpreq/feedb.php",
		data: 'page='+url,
		dataType: "html",
		success: function(msg){
			
			if(parseInt(msg)!=0)
			{                            
				$('div.view-out').html(msg);
				$('#loading').css('visibility','hidden');
                               // $('body, html').animate({scrollTop:0}, 3000);
			}
		}
		
	});

}
// Листинг страниц -----------------                                        END

$(document).ready(function() {
   
 });