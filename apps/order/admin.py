from django.contrib import admin, auth

from apps.order import models
from apps.user.models import Courier

User = auth.get_user_model()


class AbstractOrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'sender_address', 'receiver_address', 'price', 'courier', 'status', 'created_at')
    search_fields = ['id', 'name', 'sender_address', 'receiver_address']
    list_display_links = ['id', 'name']
    ordering = ("-id",)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "courier":
            kwargs["queryset"] = Courier.objects.all()  # Пример фильтрации по группе пользователей
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    # Оставить возможность удалять, если нужно
    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(models.OrderPending)
class OrderAdmin(AbstractOrderAdmin):
    """ Order admin """
    list_editable = ['courier', 'status']


@admin.register(models.OrderInProgress)
class OrderAdmin(AbstractOrderAdmin):
    """ Order admin """
    list_editable = ['courier', 'status']

    def has_add_permission(self, request):
        return False


@admin.register(models.OrderHistory)
class OrderAdmin(AbstractOrderAdmin):
    """ Order admin """
    pass

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False
