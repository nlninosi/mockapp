# Generated by Django 5.1.dev20231109130319 on 2023-11-13 02:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.UUIDField(primary_key='true', serialize=False)),
            ],
        ),
    ]