from django.urls import path
from adoptors import views

urlpatterns = [
    path('adoptors/', views.AdoptorList.as_view()),
]