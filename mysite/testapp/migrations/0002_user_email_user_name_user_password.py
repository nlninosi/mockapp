# Generated by Django 5.1.dev20231109130319 on 2023-11-13 04:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.CharField(default='nonspecified', max_length=100, unique='true'),
        ),
        migrations.AddField(
            model_name='user',
            name='name',
            field=models.CharField(default='nonspecified', max_length=25, unique='true'),
        ),
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='nonspecified', max_length=20),
        ),
    ]