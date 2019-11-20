// 此文加为用户退出js文件
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