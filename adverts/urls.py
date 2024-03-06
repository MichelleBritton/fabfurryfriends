from django.urls import path
from adverts import views


urlpatterns = [
    path('adverts/<int:pk>/', views.AdvertCreate.as_view()),
]