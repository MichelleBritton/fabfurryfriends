from django.db import models
from django.contrib.auth.models import User
from adverts.models import Advert


class Adoptor(models.Model):
    """
    Adoptor model
    """

    owner = models.ForeignKey(
        User, related_name="potential_adoptor", on_delete=models.CASCADE
    )
    advert = models.ForeignKey(Advert, related_name="adopt", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        unique_together = ["owner", "advert"]

    def __str__(self):
        return f"{self.owner} {self.advert}"
