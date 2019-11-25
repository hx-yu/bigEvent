// 此文件为服务器接口地址js文件
var baseURL = 'http://localhost:8000';
var APIURL = {
    logIn: baseURL + '/admin/login',
    logOut: baseURL + '/admin/logout',
    getInfo: baseURL + '/admin/getuser',

    category_show: baseURL + '/admin/category_search',
    category_add: baseURL + '/admin/category_add',
    category_del: baseURL + '/admin/category_delete',
    category_edit: baseURL + '/admin/category_edit',

    article_release: baseURL + '/admin/article_publish',
    article_search: baseURL + '/admin/search',
    article_del: baseURL + '/admin/article_delete',
    article_edit: baseURL + '/admin/article_edit',

    comment_add: baseURL + '/post_comment',
    comment_get: baseURL + '/get_comments'
}