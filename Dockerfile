FROM python:3.12

ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1

RUN pip install --upgrade pip \
    && pip install poetry

RUN poetry config virtualenvs.create false

WORKDIR /app

COPY poetry.lock pyproject.toml ./

RUN poetry install

COPY . .

EXPOSE 8000