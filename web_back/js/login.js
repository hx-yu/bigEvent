// 此文加为用户登录js文件
$('.input_sub').click(function() {
    var userName = $('.input_txt').val().trim();
    var userPassword = $('.input_pass').val().trim();
    $.post('http://localhost:8000/admin/login', { user_name: userName, password: userPassword }, function(res) {
        console.log(res);
        if (res.code == 200) {
            location.href = './index.html';
        } else if (res.code == 400) {
            alert(res.msg);
        }
    })
});