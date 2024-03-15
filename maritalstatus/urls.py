from django.urls import path
from .views import marital_status_choices

urlpatterns = [
    path('maritalstatus/', marital_status_choices, name='marital_status_choices'),
]