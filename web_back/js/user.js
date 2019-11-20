// 此文加为用户对象js文件
var user = {
    login: function(userName, userPassword) {
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
    },
    logout: function() {
        $('#btnLogout').click(function() {
            var flag = confirm('确认退出？');
            if (flag) {
                $.post('http://localhost:8000/admin/logout', function(res) {
                    if (res.code == 200) {
                        location.href = 'login.html';
                    }
                });
            }

        });
    },
    getInfo: function() {
        $.get('http://localhost:8000/admin/getuser', function(res) {
            if (res.code == 200) {
                console.log(res);
                $('userImg').prop('src', res.data.user_pic);
                $('.username').text(res.data.nickname);
            }
        })
    }
};