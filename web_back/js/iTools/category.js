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
    },
    add: function(name, slug, callback) {
        $.post(APIURL.category_add, { 'name': name, 'slug': slug }, function(res) {
            callback(res)
        });
    },
    edit: function(id, name, slug, callback) {
        $.post(APIURL.category_edit, { 'id': id, 'name': name, 'slug': slug }, function(res) {
            callback(res);
        });
    }
}