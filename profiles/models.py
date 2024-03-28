from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User


class Profile(models.Model):
    """
    Model to store data regarding user profile
    """

    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=255, blank=True)
    email = models.EmailField(max_length=255, blank=True)
    phone = models.CharField(max_length=11, blank=True)
    address = models.TextField(blank=True)
    marital_status = models.CharField(max_length=255, blank=True)
    age = models.IntegerField(null=True, blank=True)
    children = models.CharField(max_length=255, blank=True)
    children_age = models.CharField(max_length=25, blank=True)
    daily_life = models.TextField(blank=True)
    other_pets = models.TextField(blank=True)
    describe_house = models.TextField(blank=True)
    describe_garden = models.TextField(blank=True)
    home_status = models.CharField(max_length=255, blank=True)
    where_dog_live = models.TextField(blank=True)
    dog_left_alone = models.TextField(blank=True)
    previously_owned = models.CharField(max_length=255, blank=True)
    why = models.TextField(blank=True)
    sex = models.CharField(max_length=255, blank=True)
    preferred_age = models.CharField(max_length=255, blank=True)
    when = models.TextField(blank=True)
    activities = models.TextField(blank=True)
    image = models.ImageField(upload_to="images/",
                              default="../default_profile_lyldgl")

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.owner}'s profile"


# Ensure that every time a user is created, a signal
# will trigger the Profile model to be created
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(owner=instance)


post_save.connect(create_profile, sender=User)
