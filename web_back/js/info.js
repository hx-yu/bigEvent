// 此文加为获取用户信息js文件
$.get('http://localhost:8000/admin/getuser', function(res) {
    if (res.code == 200) {
        console.log(res);
        $('userImg').prop('src', res.data.user_pic);
        $('.username').text(res.data.nickname);
    }
})