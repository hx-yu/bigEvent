// 此文件为文章发布、编辑、删除js文件
var article = {
    release: function(fd, callback) {
        $.ajax({
            type: 'post',
            url: APIURL.article_release,
            data: fd,
            contentType: false,
            processData: false,
            success: function(res) {
                callback(res);
            }
        });
    }
}