"use strict";
function activeTreeView() {
    const theme = document.querySelector('.catalog-treeview');
    theme.classList.remove('d-none');
    theme.classList.add('d-block');
}

$(function () {
    const t = $("html").hasClass("light-style") ? "default" : "default-dark",
        e = $("#catalog-treeview");
    activeTreeView()
    e.length && e.jstree({
        core: {
            themes: {
                name: t,
                icons: false,
            },
        },
        "search": {
            "case_insensitive": true,
            "show_only_matches": true
        },
        plugins: ["search"],
    }).bind("select_node.jstree", function (e, data) {
        const href = data.node.a_attr.href;
        const bookCount = data.node.a_attr['data-book-count'];
        if (href === '#')
            return '';
        if (bookCount <= 0)
            return '';
        window.open(href, '_self');
    })
    // $('#catalog-treeview').on('ready.jstree', function() {
    //     $("#catalog-treeview").jstree("open_all");
    // });
    $('#search-theme').keyup(function(){
        $('#catalog-treeview').jstree('search', $(this).val());
    });
});
