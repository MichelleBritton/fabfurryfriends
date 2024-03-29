# Generated by Django 3.2.4 on 2024-03-18 22:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("profiles", "0016_auto_20240316_1217"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="owner",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="owner_profile",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
