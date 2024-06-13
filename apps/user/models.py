from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import gettext_lazy as _

from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill

from .managers import UserManager, CourierManager
from common import upload_to_file
from common.constants import RoleType, GenderType


class User(AbstractBaseUser, PermissionsMixin):
    """ Пользователь """
    ROLE_TYPE = (
        (RoleType.CLIENT.value, _('Клиент')),
        (RoleType.COURIER.value, _('Курьер')),
        (RoleType.DISPATCHER.value, _('Диспетчер')),
        (RoleType.SUPER_ADMIN.value, _('Админ')),
    )
    GENDERS = (
        (GenderType.MEN.value, "Мужчина"),
        (GenderType.WOMEN.value, "Женщина"),
    )
    last_name = models.CharField(_('Фамилия'), max_length=40, blank=True)
    first_name = models.CharField(_('Имя'), max_length=40, blank=True)
    email = models.EmailField(_('email'), unique=True)
    phone = models.CharField(_('Номер телефона'), max_length=255, unique=True)
    avatar = ProcessedImageField(verbose_name=_('Фото'), upload_to=upload_to_file.user_avatar,
                                 format='webp', processors=[ResizeToFill(500, 500)],
                                 options={'quality': 90}, null=True, blank=True)
    role = models.CharField(_("Роль пользователя"), max_length=40,
                            choices=ROLE_TYPE, default=RoleType.CLIENT.value)
    gender = models.CharField(_("Пол"), max_length=40, choices=GENDERS, default=GenderType.MEN.value)

    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['last_name', 'first_name']

    class Meta:
        db_table = 'User'
        verbose_name = _('Пользователь')
        verbose_name_plural = _('Пользователи')

    def __str__(self):
        return str(self.get_full_name())

    def get_full_name(self):
        """ Возвращает first_name, last_name с пробелом между ними. """
        return f"{self.first_name} {self.last_name}".strip()

    def get_role(self) -> RoleType:
        return dict(self.ROLE_TYPE)[self.role]

    def get_first_latter_from_name(self):
        if self.first_name and self.last_name:
            return f'{self.first_name[0]}{self.last_name[0]}'

    def save(self, *args, **kwargs):
        if not self.is_staff and self.role in [RoleType.COURIER.value, RoleType.DISPATCHER.value]:
            self.is_staff = True
        super().save(*args, **kwargs)


class Courier(User):
    objects = CourierManager()

    class Meta:
        proxy = True
        verbose_name = "Курьер"
        verbose_name_plural = "Курьеры"
