from django.contrib.auth import get_user_model
from django.db import models

from apps.order.managers import get_order_manager
from common.constants import OrderStatus


User = get_user_model()


class Order(models.Model):
    """Order model for courier service"""
    PAYS_FOR_CHOICES = (
        ("SENDER", "Отправитель"),
        ("RECEIVER", "Получатель"),
    )
    STATUS_CHOICES = (
        (OrderStatus.PENDING.value, "В обработке"),
        (OrderStatus.IN_TRANSIT.value, "В пути"),
        (OrderStatus.DELIVERED.value, "Доставлено"),
        (OrderStatus.CANCELLED.value, "Отменено"),
    )
    name = models.CharField("Название", max_length=100)
    sender_address = models.CharField("Адрес отправителя", max_length=255)
    receiver_address = models.CharField("Адрес отправителя", max_length=255)
    price = models.DecimalField("Стоимость заказа", max_digits=10, decimal_places=2)
    pays_for = models.CharField("Кто оплачивает услугу", max_length=255, choices=PAYS_FOR_CHOICES)
    status = models.CharField("Статус заказа", max_length=255, choices=STATUS_CHOICES)
    comment = models.TextField("Комментарии к заказу", blank=True, null=True)
    courier = models.ForeignKey(User, on_delete=models.PROTECT, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "order"
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"


class OrderPending(Order):
    objects = get_order_manager(
        [OrderStatus.PENDING.value]
    )

    class Meta:
        proxy = True
        verbose_name = "В обработке"
        verbose_name_plural = "В обработке"


class OrderInProgress(Order):
    objects = get_order_manager(
        [OrderStatus.IN_TRANSIT.value]
    )

    class Meta:
        proxy = True
        verbose_name = "В работе"
        verbose_name_plural = "В работе"


class OrderHistory(Order):
    objects = get_order_manager(
        [OrderStatus.DELIVERED.value, OrderStatus.CANCELLED.value]
    )

    class Meta:
        proxy = True
        verbose_name = "История"
        verbose_name_plural = "История"
