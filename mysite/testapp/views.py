from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializer import UserSerializer
from .models import User 
# Create your views here.

class UserView (viewsets.ModelViewSet):
     serializer_class = UserSerializer
     queryset = User.objects.all()


def auth(request):
     return HttpResponse()