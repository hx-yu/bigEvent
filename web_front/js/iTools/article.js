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
    }
}