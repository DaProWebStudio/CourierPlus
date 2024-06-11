from django.contrib import admin
from django.contrib.admin.helpers import ActionForm

from apps.order.models import Order
from common.constants import OrderStatus


class CustomAdminSite(admin.AdminSite):
    index_template = 'admin/index.html'

    def index(self, request, extra_context=None):
        orders = Order.objects.all()
        extra_context = {
            'order': {
                'count': orders.count(),
                'pending': orders.filter(status=OrderStatus.PENDING.value).count(),
                'in_transit': orders.filter(status=OrderStatus.IN_TRANSIT.value).count(),
                'delivered': orders.filter(status=OrderStatus.DELIVERED.value).count(),
                'cancelled': orders.filter(status=OrderStatus.CANCELLED.value).count(),
            },
        }

        return super(CustomAdminSite, self).index(request, extra_context)


admin_site = CustomAdminSite()


class CustomActionForm(ActionForm):
    def __init__(self, *args, **kwargs):
        super(ActionForm, self).__init__(*args, **kwargs)
        for visible in self.visible_fields():
            visible.field.widget.attrs['id'] = 'inputGroupSelect04'
            visible.field.widget.attrs['class'] = 'form-select'


def get_classes_for_field(field):
    classes = {
        "CharField": "form-control",
        "IntegerField": "form-control",
        "FileField": "form-control",
        "ImageField": "form-control",
        "ModelChoiceField": "ModelChoiceField",
        "TypedChoiceField": "TypedChoiceField",
        "BooleanField": "form-check-input",
        "Select": "form-select",
    }
    return classes.get(field)

class ModelAdmin(admin.ModelAdmin):
    action_form = CustomActionForm
