from django.urls import path, include
from rest_framework import routers
from testapp import views 

router =  routers.DefaultRouter()
router.register( r'user' , views.UserView , 'user')

urlpatterns = [
    path('api/v1/', include(router.urls))
]