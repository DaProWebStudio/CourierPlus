from typing import List

from django.db.models import Manager
from common.constants import OrderStatus


def get_order_manager(statuses: List[OrderStatus]) -> object:
    class OrderManager(Manager):
        """ Manager for order """
        def get_queryset(self):
            query = super(OrderManager, self).get_queryset()
            return query.filter(status__in=statuses)
    return OrderManager()
