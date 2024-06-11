from django.contrib.admin.views.main import PAGE_VAR
from django.template import Library
from django.utils.html import format_html
from django.utils.safestring import mark_safe

register = Library()


@register.simple_tag
def custom_paginator_number(cl, i):
    """
    Generate an individual page index link in a paginated list.
    """
    if i == cl.paginator.ELLIPSIS:
        return format_html('<li class="page-item disabled"><a class="page-link">{}</a></li>', cl.paginator.ELLIPSIS)
    elif i == cl.page_num:
        return format_html('<li class="page-item active"><a class="page-link">{}</a></li>', i)
    else:
        return format_html(
            '<li class="page-item"><a class="page-link" href="{}"{}>{}</a></li>',
            cl.get_query_string({PAGE_VAR: i}),
            mark_safe(' class="end"' if i == cl.paginator.num_pages else ""),
            i,
        )
