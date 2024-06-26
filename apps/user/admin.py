from django import forms
from django.contrib import admin, auth
from django.contrib.auth.hashers import check_password, make_password

from apps.core.admin import ModelAdmin, admin_site
from apps.user.models import Courier, Dispatcher
from common.constants import RoleType

User = auth.get_user_model()


class AbstractUserAdmin(ModelAdmin):
    """ Abstract user admin """
    list_display = ('id', 'email', 'get_full_name', 'phone', 'get_role', 'is_active')
    search_fields = ['id', 'email', 'get_full_name']
    list_display_links = ['id', 'email']
    ordering = ("-id",)

    def get_fieldsets(self, request, obj=None):
        fieldsets = (
            ('Персональные данные', {"fields": (
                ("first_name", "last_name",),
                ("email", "phone",),
                ("gender", "avatar"),
                "password"
            )}
             ),
            ("Права доступа", {"fields": [
                ["is_active"],
            ]}),
        )
        if request.user.is_superuser:
            fieldsets[1][1]['fields'][0].append('is_staff')
            fieldsets[1][1]['fields'][0].append('is_superuser')
        return fieldsets

    def save_model(self, request, obj, form, change):
        if obj.pk:
            user_database = User.objects.get(pk=obj.pk)
            if not (check_password(form.data['password'], user_database.password) or user_database.password ==
                    form.data['password']):
                obj.password = make_password(obj.password)
            else:
                obj.password = user_database.password
        else:
            obj.password = make_password(obj.password)
        super().save_model(request, obj, form, change)


class DispatcherAdmin(AbstractUserAdmin):
    pass


class CourierAdmin(AbstractUserAdmin):
    pass


admin_site.register(Dispatcher, DispatcherAdmin)
admin_site.register(Courier, CourierAdmin)


admin_site.site_title = 'Курьерская служба CourierPlus'
admin_site.site_header = 'Курьерская служба CourierPlus'
admin_site.index_title = 'Администрирование CourierPlus'
