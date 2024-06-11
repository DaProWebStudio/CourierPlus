import random

from django import forms
from django.contrib import admin, auth
from django.contrib.auth.hashers import check_password, make_password
from django.contrib.auth.models import Group
from django.utils.safestring import mark_safe
from django.contrib.auth.admin import GroupAdmin

from apps.order.models import Order
from apps.user.models import Courier

User = auth.get_user_model()


class OrderForm(forms.ModelForm):
    courier = forms.ModelChoiceField(
        label="Курьер",
        queryset=Courier.objects.all(),
    )

    class Meta:
        model = Order
        fields = '__all__'


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    """ Order admin """
    form = OrderForm
    list_display = ('id', 'name', 'sender_address', 'receiver_address', 'courier', 'status', 'created_at')
    search_fields = ['id', 'name', 'sender_address', 'receiver_address', 'courier']
    list_display_links = ['id', 'name']
    ordering = ("-id",)
