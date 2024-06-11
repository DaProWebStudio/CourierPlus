from enum import Enum


class RoleType(Enum):
    CLIENT: str = 'CLIENT'
    COURIER: str = 'COURIER'
    DISPATCHER: str = 'DISPATCHER'
    SUPER_ADMIN: str = 'SUPER_ADMIN'


class GenderType(Enum):
    MEN: str = 'MEN'
    WOMEN: str = 'WOMEN'

