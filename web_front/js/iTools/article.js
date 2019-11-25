// 此文件为文章发布、编辑、删除js文件
var article = {
    search: function(callback) {
        $.get(APIURL.article_search, { 'perpage': 5, 'page': 1, state: '已发布' }, function(res) {
            callback(res);
        });
    },
    find: function(id, callback) {
        $.get(APIURL.article_search, { 'id': id }, function(res) {
            callback(res);
        });
    },
    // 添加评论
    add: function(id, name, content, callback) {
        $.post(APIURL.comment_add, { 'id': id, 'name': name, 'content': content }, function(res) {
            callback(res);
        });
    },
    // 获取评论
    get: function(id, callback) {
        $.get(APIURL.comment_get, { 'id': id }, function(res) {
            callback(res);
        });
    }
}