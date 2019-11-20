// 此文加为用户对象js文件
var user = {
    login: function(callback) {
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
                callback(res);
            })
        });
    },
    logout: function(callback) {
        $('#btnLogout').click(function() {
            var flag = confirm('确认退出？');
            if (flag) {
                $.post('http://localhost:8000/admin/logout', function(res) {
                    callback(res);
                });
            }

        });
    },
    getInfo: function(callback) {
        $.get('http://localhost:8000/admin/getuser', function(res) {
            callback(res);
        })
    }
};