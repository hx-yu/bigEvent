// 此文加为用户登录js文件
$('.input_sub').click(function() {
    var userName = $('.input_txt').val().trim();
    var userPassword = $('.input_pass').val().trim();
    if (userName == '' || userPassword == '') {
        $('#warning').text('用户名或密码不能为空');
        $('#myModal').modal('show');
        return;
    }
    $.post('http://localhost:8000/admin/login', { user_name: userName, password: userPassword }, function(res) {
        console.log(res);
        if (res.code == 200) {
            location.href = './index.html';
        } else if (res.code == 400) {
            $('#warning').text(res.msg);
            $('#myModal').modal('show');
        }
    })
});