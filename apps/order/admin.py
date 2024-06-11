from django.contrib import admin, auth

from apps.core.admin import ModelAdmin, admin_site
from apps.order import models
from apps.user.models import Courier

User = auth.get_user_model()


class AbstractOrderAdmin(ModelAdmin):
    list_display = ('id', 'name', 'sender_address', 'receiver_address', 'price', 'courier', 'status', 'created_at')
    search_fields = ['id', 'name', 'sender_address', 'receiver_address']
    list_display_links = ['id', 'name']
    ordering = ("-id",)
    fieldsets = (
        (
            'Персональные данные', {
                "fields": (
                    "name",
                    ("sender_address", "receiver_address"),
                    ("price", "pays_for"),
                    ("courier", "status"),
                    'created_at'
                )
            }
        ),
    )
    readonly_fields = ('created_at',)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "courier":
            kwargs["queryset"] = Courier.objects.all()  # Пример фильтрации по группе пользователей
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def has_delete_permission(self, request, obj=None):
        return False


class OrderPendingAdmin(AbstractOrderAdmin):
    """ Order admin """
    list_editable = ['courier', 'status']


class OrderInProgressAdmin(AbstractOrderAdmin):
    """ Order admin """
    list_editable = ['courier', 'status']

    def has_add_permission(self, request):
        return False


class OrderHistoryAdmin(AbstractOrderAdmin):
    """ Order admin """
    pass

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False


admin_site.register(models.OrderPending, OrderPendingAdmin)
admin_site.register(models.OrderInProgress, OrderInProgressAdmin)
admin_site.register(models.OrderHistory, OrderHistoryAdmin)
