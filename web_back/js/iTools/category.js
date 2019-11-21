// 此文件为文章分类js文件
var category = {
    show: function(callback) {
        $.get(APIURL.category_show, function(res) {
            callback(res);
        });
    },
    del: function(id, callback) {
        $.post(APIURL.category_del, { 'id': id }, function(res) {
            callback(res);
        });
    }
}