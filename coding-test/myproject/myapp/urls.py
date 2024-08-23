from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_user, name='register_user'),
    path('profile/', views.get_user_profile, name='get_user_profile'),
]
