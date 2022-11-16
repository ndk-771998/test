$(".register #formValidate").validate({
    rules:{
        fullname : "required",
        sex : "required",
        email:{
            required:true,
            email:true
        },
        password:{
            required:true,
        },
        birthday:{
            required:true
        }
    },
    messages:{
        fullname:'・氏名を入力してください',
        email:{
            required:"・メールアドレスを入力してください",
            email:"・有効なメールアドレスを入力してください"
        },
        password:{
            required:"・パスワードを入力してください",
        },
        birthday : {
            required:"・年齢を入力してください"
        },
        sex : {
            required:"・性別を選んでください"
        }
    },
    highlight: function (element, errorClass) {
        $(element).closest('.check-validate').addClass('has-error');
    },
    unhighlight: function (element, errorClass) {
        $(element).closest('.check-validate').removeClass('has-error');
    },
});
$(".register #formValidate .submit").click(function(e){
    e.preventDefault();
    if($("#formValidate").valid()){
        
    }
    else{
        $('.modal').fadeIn();
        $(".error").each(function () {
            $('.modal .message').append($(this));
        });
    }
});
$('.modal .btn_close, .modal .btn_outline').on('click', function(){
    $('.modal').fadeOut();
    setTimeout(()=> {
        $('.modal .message').empty();
    },500);
})
//login formValidate form 1
$(".login #formValidate").validate({
    rules:{
        fullname : "required",
        email:{
            required:true,
            email:true
        }
    },
    messages:{
        email:{
            required:"メールアドレスは正しい形式で入力してください",
            email:"メールアドレスは正しい形式で入力してください"
        },
        password:{
            required:"パスワードは正しい形式で入力してください",
        }
    },
    highlight: function (element, errorClass) {
        $(element).closest('.check-validate').addClass('has-error');
    },
    unhighlight: function (element, errorClass) {
        $(element).closest('.check-validate').removeClass('has-error');
    },
});
$(".login #formValidate .submit").click(function(e){
    e.preventDefault();
    if($("#formValidate").valid()){
    }
    else{
        $('.modal').fadeIn();
        $(".error").each(function () {
            $('.modal .message').append($(this));
        });
    }
});
//change-password
$(".change_password #formValidate").validate({
    rules:{
        email:{
            required:true,
            email:true
        }
    },
    messages:{
        email:{
            required:"メールアドレスは正しい形式で入力してください",
            email:"メールアドレスは正しい形式で入力してください"
        }
    },
    highlight: function (element, errorClass) {
        $(element).closest('.check-validate').addClass('has-error');
    },
    unhighlight: function (element, errorClass) {
        $(element).closest('.check-validate').removeClass('has-error');
    },
});
$(".change_password #formValidate .btn_large").click(function(e){
    e.preventDefault();
    if($("#formValidate").valid()){
    }
    else{
        $('.modal').fadeIn();
        $(".error").each(function () {
            $('.modal .message').append($(this));
        });
    }
});