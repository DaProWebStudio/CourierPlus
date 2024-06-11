from enum import Enum


class RoleType(Enum):
    CLIENT: str = 'CLIENT'
    COURIER: str = 'COURIER'
    DISPATCHER: str = 'DISPATCHER'
    SUPER_ADMIN: str = 'SUPER_ADMIN'


class GenderType(Enum):
    MEN: str = 'MEN'
    WOMEN: str = 'WOMEN'


class OrderStatus(Enum):
    PENDING: str = 'PENDING'
    IN_TRANSIT: str = 'IN_TRANSIT'
    DELIVERED: str = 'DELIVERED'
    CANCELLED: str = 'CANCELLED'


