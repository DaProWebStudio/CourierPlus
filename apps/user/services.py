from typing import List

from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType

from common.constants import RoleType


def get_permissions_for_role(role: RoleType) -> List[Permission]:
    permissions: List = []
    models: List[str] = ['orderpending', 'orderhistory', 'orderinprogress']
    actions: List[str] = ['view', 'add', 'change']
    if role == RoleType.DISPATCHER.value:
        models.append('courier')
        actions.append('delete')
    for model in models:
        codenames: List[str] = [f"{action}_{model}" for action in actions]
        content_type = ContentType.objects.filter(model=model)
        if content_type.exists():
            content_type = content_type.first()
            permissions.extend(
                Permission.objects.filter(
                    codename__in=codenames,
                    content_type_id=content_type.id,
                )
            )
    return permissions
