from django.contrib import admin, auth

from apps.core.admin import ModelAdmin, admin_site
from apps.order import models
from apps.user.models import Courier
from common.constants import RoleType

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

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.role == RoleType.SUPER_ADMIN.value:
            return qs
        return qs.filter(courier_id=request.user.id)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "courier":
            kwargs["queryset"] = Courier.objects.all()  # Пример фильтрации по группе пользователей
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def has_delete_permission(self, request, obj=None):
        return False

    def get_readonly_fields(self, request, obj=None):
        if request.user.role != RoleType.SUPER_ADMIN.value:
            return [field.name for field in self.model._meta.fields]
        return self.readonly_fields

    def get_list_editable(self, request):
        if request.user.role == RoleType.SUPER_ADMIN.value:
            return ['courier', 'status']
        return ['status']

    def get_changelist_instance(self, request):
        self.list_editable = self.get_list_editable(request)
        return super().get_changelist_instance(request)


class OrderPendingAdmin(AbstractOrderAdmin):
    """ Order admin """
    list_editable = []

    def has_add_permission(self, request):
        if request.user.role == RoleType.COURIER.value:
            return False
        return super().has_add_permission(request)


class OrderInProgressAdmin(AbstractOrderAdmin):
    """ Order admin """
    list_editable = []

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
