from django import forms
from django.contrib import admin, auth

from apps.user.models import Courier
from common.constants import RoleType

User = auth.get_user_model()


class CourierForm(forms.ModelForm):
    ROLE_TYPE = (
        (RoleType.COURIER.value, 'Курьер'),
    )
    role = forms.ChoiceField(
        label="Роль",
        choices=ROLE_TYPE,
    )

    class Meta:
        model = Courier
        fields = '__all__'


@admin.register(Courier)
class CourierAdmin(admin.ModelAdmin):
    """ Courier admin """
    form = CourierForm
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
                ["role", "is_active"],
            ]}),
        )
        if request.user.is_superuser:
            fieldsets[1][1]['fields'][0].append('is_staff')
            fieldsets[1][1]['fields'][0].append('is_superuser')
        return fieldsets
