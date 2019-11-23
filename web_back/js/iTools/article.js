// 此文件为文章发布、编辑、删除js文件
var article = {
    show: function(pages, callback) {
        $.get(APIURL.article_search, { 'page': pages },

            function(res) {
                callback(res);
            });
    },
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
    },
    del: function(id, callback) {
        $.post(APIURL.category_del, { 'id': id }, function(res) {
            callback(res);
        });
    }
}