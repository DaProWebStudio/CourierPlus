from django.contrib.auth import get_user_model
from django.db import models

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
    pays_for = models.CharField("Кто оплачивает услугу", max_length=255, choices=PAYS_FOR_CHOICES)
    status = models.CharField("Статус заказа", max_length=255, choices=STATUS_CHOICES)
    comment = models.TextField("Комментарии к заказу", blank=True, null=True)
    courier = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "order"
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"
