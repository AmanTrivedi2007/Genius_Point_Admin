from django.urls import path,include
from .views import Login,Register


urlpatterns = [
    path('login/', Login,name="Login Page"),
    path('register/', Register,name="Login Page"),
]