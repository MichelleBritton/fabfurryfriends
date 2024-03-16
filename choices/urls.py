from django.urls import path
from .views import marital_status_choices
from .views import closed_choices
from .views import home_status_choices
from .views import preferred_sex_choices

urlpatterns = [
    path('choices/marital_status_choices', marital_status_choices, name='marital_status_choices'),
    path('choices/closed_choices', closed_choices, name='closed_choices'),
    path('choices/home_status_choices', home_status_choices, name='home_status_choices'),
    path('choices/preferred_sex_choices', preferred_sex_choices, name='preferred_sex_choices'),
]