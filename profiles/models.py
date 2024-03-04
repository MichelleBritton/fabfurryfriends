from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User

# Marital Status options
MARITAL = (
    (1, 'Single'),
    (2, 'Married'),
    (3, 'Widowed'),
    (4, 'Divorced'),
    (5, 'Separated'),
    (6, 'Cohabiting'),
)

# Yes/No options
YN = (
    (1, 'No'),
    (2, 'Yes'),
)

# Home Status options
HOME = (
    (1, 'Owned'),
    (2, 'Rented'),
)

# Preferred Sex options
SEX = (
    (1, 'Either'),
    (2, 'Dog'),
    (3, 'Bitch'),
)


class Profile(models.Model):
    """ 
    Model to store data regarding user profile
    """
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    phone = models.CharField(max_length=11)
    address = models.TextField()
    marital_status = models.IntegerField(choices=MARITAL, default=1)
    age = models.IntegerField()
    children = models.IntegerField(choices=YN, default=1)
    children_age = models.CharField(max_length=25)
    daily_life = models.TextField()
    other_pets = models.TextField()
    describe_house = models.TextField()
    describe_garden = models.TextField()
    home_status = models.IntegerField(choices=HOME, default=1)
    where_dog_live = models.TextField()
    dog_left_alone = models.TextField()
    previously_owned = models.IntegerField(choices=YN, default=1)
    why = models.TextField()
    sex = models.IntegerField(choices=SEX, default=1)
    preferred_age = models.CharField(max_length=255)
    when = models.TextField()
    activities = models.TextField()
    image = models.ImageField(
        upload_to='images/', default='../default_profile_red_nyvnez'
    )

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.owner}'s profile"



# Ensure that every time a user is created, a signal 
# will trigger the Profile model to be created
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(owner=instance)



post_save.connect(create_profile, sender=User)

