from django.urls import path
from .views import marital_status_choices
from .views import test_choices

urlpatterns = [
    path('choices/marital_status_choices', marital_status_choices, name='marital_status_choices'),
    path('choices/test_choices', test_choices, name='test_choices'),
]