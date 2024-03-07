from django.db import models
from django.contrib.auth.models import User


class Advert(models.Model):
    """
    Advert model, related to 'owner'
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    dog_name = models.CharField(max_length=255, blank=True)
    breed = models.CharField(max_length=255, blank=True)
    age = models.CharField(max_length=255, blank=True)
    quick_fact_1 = models.CharField(max_length=255, blank=True)
    quick_fact_2 = models.CharField(max_length=255, blank=True)
    quick_fact_3 = models.CharField(max_length=255, blank=True)
    quick_fact_4 = models.CharField(max_length=255, blank=True)
    quick_fact_5 = models.CharField(max_length=255, blank=True)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/', default='../default_advert_ypoyya', blank=True
    )
   
    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.dog_name}'