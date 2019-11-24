// 此文件为文章发布、编辑、删除js文件
var article = {
    show: function(temporaryState, temporaryType, pages, callback) {
        $.get(APIURL.article_search, { 'page': pages, 'type': temporaryType, 'state': temporaryState },

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
        console.log(id);
        $.get(APIURL.article_del, { 'id': id }, function(res) {
            callback(res);
        });
    },
    search: function(id, callback) {
        $.get(APIURL.article_search, { 'id': id }, function(res) {
            callback(res);
        });
    },
    edit: function(fd, callback) {
        $.ajax({
            type: 'post',
            url: APIURL.article_edit,
            data: fd,
            contentType: false,
            processData: false,
            success: function(res) {
                callback(res);
            }
        });
    }
}