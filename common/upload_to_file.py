from common.translit import get_english_translit as translit


def user_avatar(instance, filename: str) -> str:
    filename: str = f'{translit(instance.get_full_name())}.{filename.split(".")[-1]}'
    return f"users/{instance.role}/avatars/{filename}"

