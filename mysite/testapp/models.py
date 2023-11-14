from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(unique='true', max_length=25, blank=False, default='nonspecified')
    password = models.CharField(max_length=20, blank=False, default='nonspecified')
    email = models.CharField(unique='true', max_length=100, blank=False, default='nonspecified')
    id = models.UUIDField(primary_key='true')
    def __str__(self) -> str:
        return self.name