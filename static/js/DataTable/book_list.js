"use strict";
$(function() {
    let e, s, a;
    a = (isDarkStyle ? (e = config.colors_dark.borderColor,
    s = config.colors_dark.bodyBg,
    config.colors_dark) : (e = config.colors.borderColor,
    s = config.colors.bodyBg,
    config.colors)).headingColor;
    var t, n = $(".datatables-products");
    const permAdd = n[0].attributes['data-perm-add'].nodeValue;
    const permChange = n[0].attributes['data-perm-change'].nodeValue;
    function countColumns() {
        let columnLength = getColumns().length - 1;
        if (permChange === "True") {
            --columnLength
        }
        console.log(columnLength)
        return [...Array(columnLength).keys()].map(i => i + 1)
    }
    function getColumns() {
        let columns = [
            {data: "id"},
            {data: "ubn"},
            {data: "title"},
            {data: "bbk"},
            {data: "thematic"},
            {data: "language"},
            {data: "year"},
        ]
        if (permChange === "True") {
            columns.push(
                {data: ''}
            )
        }
        return columns
    }
    function getColumnDefs() {
        let columnDefs = [{
            className: "control",
            searchable: !1,
            orderable: !1,
            responsivePriority: 2,
            targets: 0,
            render: function(t, e, s, a) {
                return ""
            }
        }, {
            targets: 1,
            orderable: 1,
            responsivePriority: 1,
            render: function(t, e, s, a) {
                const id = s.id;
                return `${id}`
            }
        }, {
            targets: 2,
            responsivePriority: 1,
            render: function(t, e, s, a) {
                const n = s.title
                  , o = s.url
                  , i = s.src;
                return '<a href="'+ o +'" class="d-flex justify-content-start align-items-center product-name"><div class="avatar-wrapper"><div class="avatar avatar me-2 rounded-2 bg-label-secondary">' + (i ? '<img src="/media/' + i + '" alt="' + n + '" height="82" class="rounded-2">' : '<span class="avatar-initial rounded-2 bg-label-">' + "</span>") + '</div></div><div class="d-flex flex-column"><h6 class="text-body text-nowrap mb-0">' + n + '</h6></div></a>'
            }
        }, {
            targets: 3,
            responsivePriority: 1,
            render: function(t, e, s, a) {
                if (!s.bbk) {
                    return '---'
                }
                const code = s.bbk.code
                    , title = s.bbk.title
                return `${code} ${title}`
            }
        }, {
            targets: 4,
            responsivePriority: 1,
            render: function(t, e, s, a) {
                if (!s.thematic) {
                    return '---'
                }
                const code = s.thematic.code
                    , title = s.thematic.title
                return `${code} ${title}`
            }
        }, {
            targets: 6,
            responsivePriority: 1,
            render: function(t, e, s, a) {
                const year = s.year;
                return `${year} год`
            }
        }]
        if (permChange === "True") {
            columnDefs.push(
                {
                    targets: -1,
                    title: "Действие",
                    searchable: !1,
                    orderable: !1,
                    render: function(t, e, s, a) {
                        const ubn = s.ubn,
                              url = `/admin_panel/books/update/${ubn}/`
                        return '<div class="d-flex align-items-sm-center justify-content-sm-center"><a href="'+ url +'" class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></a></div>'
                    }
                }
            )
        }
        return columnDefs
    }

    function getButtons() {
        let buttons = [{
            extend: "collection",
            className: "btn btn-label-secondary dropdown-toggle me-3",
            text: '<i class="bx bx-export me-1"></i>Экспорт',
            buttons: [{
                extend: "print",
                text: '<i class="bx bx-printer me-2" ></i>Print',
                className: "dropdown-item",
                exportOptions: {
                    columns: countColumns(),
                    format: {
                        body: function(t, e, s) {
                            var a;
                            return t.length <= 0 ? t : (t = $.parseHTML(t),
                            a = "",
                            $.each(t, function(t, e) {
                                void 0 !== e.classList && e.classList.contains("product-name") ? a += e.lastChild.firstChild.textContent : void 0 === e.innerText ? a += e.textContent : a += e.innerText
                            }),
                            a)
                        }
                    }
                },
                customize: function(t) {
                    $(t.document.body).css("color", a).css("border-color", e).css("background-color", s),
                    $(t.document.body).find("table").addClass("compact").css("color", "inherit").css("border-color", "inherit").css("background-color", "inherit")
                }
            }, {
                extend: "csv",
                text: '<i class="bx bx-file me-2" ></i>Csv',
                className: "dropdown-item",
                exportOptions: {
                    columns: countColumns(),
                    format: {
                        body: function(t, e, s) {
                            var a;
                            return t.length <= 0 ? t : (t = $.parseHTML(t),
                            a = "",
                            $.each(t, function(t, e) {
                                void 0 !== e.classList && e.classList.contains("product-name") ? a += e.lastChild.firstChild.textContent : void 0 === e.innerText ? a += e.textContent : a += e.innerText
                            }),
                            a)
                        }
                    }
                }
            }, {
                extend: "excel",
                text: '<i class="bx bxs-file-export me-2"></i>Excel',
                className: "dropdown-item",
                exportOptions: {
                    columns: countColumns(),
                    format: {
                        body: function(t, e, s) {
                            var a;
                            return t.length <= 0 ? t : (t = $.parseHTML(t),
                            a = "",
                            $.each(t, function(t, e) {
                                void 0 !== e.classList && e.classList.contains("product-name") ? a += e.lastChild.firstChild.textContent : void 0 === e.innerText ? a += e.textContent : a += e.innerText
                            }),
                            a)
                        }
                    }
                }
            }, {
                extend: "pdf",
                text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
                className: "dropdown-item",
                exportOptions: {
                    columns: countColumns(),
                    format: {
                        body: function(t, e, s) {
                            var a;
                            return t.length <= 0 ? t : (t = $.parseHTML(t),
                            a = "",
                            $.each(t, function(t, e) {
                                void 0 !== e.classList && e.classList.contains("product-name") ? a += e.lastChild.firstChild.textContent : void 0 === e.innerText ? a += e.textContent : a += e.innerText
                            }),
                            a)
                        }
                    }
                }
            }, {
                extend: "copy",
                text: '<i class="bx bx-copy me-2" ></i>Copy',
                className: "dropdown-item",
                exportOptions: {
                    columns: countColumns(),
                    format: {
                        body: function(t, e, s) {
                            var a;
                            return t.length <= 0 ? t : (t = $.parseHTML(t),
                            a = "",
                            $.each(t, function(t, e) {
                                void 0 !== e.classList && e.classList.contains("product-name") ? a += e.lastChild.firstChild.textContent : void 0 === e.innerText ? a += e.textContent : a += e.innerText
                            }),
                            a)
                        }
                    }
                }
            }]
        }]
        if (permAdd === 'True') {
            buttons.push(
                {
                    text: '<i class="bx bx-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Добавить книгу</span>',
                    className: "add-new btn btn-primary",
                    action: function() {
                        window.location.href = "/dashboards/books/add/"
                    }
                }
            )
        }
        return buttons
    }
    n.length && (t = n.DataTable({
        ajax: "/api/v1/books/",
        columns: getColumns(),
        columnDefs: getColumnDefs(),
        order: [1, "desc"],
        dom: '<"card-header d-flex rounded-0 flex-wrap py-md-0"<"me-5 ms-n2 pe-5"f><"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-3 mb-sm-0"lB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
        lengthMenu: [7, 10, 20, 50, 70, 100],
        language: {
            sLengthMenu: "_MENU_",
            search: "",
            searchPlaceholder: "Поиск книг",
            info: "Отображение _START_ до _END_ от _TOTAL_ книг"
        },

        buttons: getButtons(),
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(t) {
                        return "Подробности о " + t.data().title
                    }
                }),
                type: "column",
                renderer: function(t, e, s) {
                    s = $.map(s, function(t, e) {
                        return "" !== t.title ? '<tr data-dt-row="' + t.rowIndex + '" data-dt-column="' + t.columnIndex + '"><td>' + t.title + ":</td> <td>" + t.data + "</td></tr>" : ""
                    }).join("");
                    return !!s && $('<table class="table"/><tbody />').append(s)
                }
            }
        },
    }),
    $(".dataTables_length").addClass("mt-0 mt-md-3 me-3"),
    $(".dt-buttons > .btn-group > button").removeClass("btn-secondary")),
    $(".datatables-products tbody").on("click", ".delete-record", function() {
        t.row($(this).parents("tr")).remove().draw()
    }),
    setTimeout(()=>{
        $(".dataTables_filter .form-control").removeClass("form-control-sm"),
        $(".dataTables_length .form-select").removeClass("form-select-sm")
    }
    , 300)
});
