from django.contrib.auth.base_user import BaseUserManager

from common.constants import RoleType


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """ Создает и сохраняет пользователя с введенным им email и паролем. """
        if not email:
            raise ValueError('email должен быть указан')
        email = self.normalize_email(email.lower())
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_client(self, email, password=None, **extra_fields):
        return self._create_user(email, password, **extra_fields)

    def create_courier(self, email, password=None, **extra_fields):
        extra_fields.setdefault('role', RoleType.COURIER.value)
        extra_fields.setdefault('is_staff', True)
        return self._create_user(email, password, **extra_fields)

    def create_dispatcher(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('role', RoleType.DISPATCHER.value)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('role', RoleType.SUPER_ADMIN.value)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')

        return self._create_user(email, password, **extra_fields)


class CourierManager(BaseUserManager):
    def get_queryset(self):
        query = super(CourierManager, self).get_queryset()
        return query.filter(role=RoleType.COURIER.value)
