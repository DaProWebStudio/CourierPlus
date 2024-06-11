import re

from django import template
from django.urls import reverse, NoReverseMatch

register = template.Library()


@register.simple_tag(takes_context=True)
def active(context, pattern_or_url_name):
    pattern = reverse(pattern_or_url_name)
    path = context['request'].path
    if re.search(pattern, path):
        return 'active open'
    return ''
