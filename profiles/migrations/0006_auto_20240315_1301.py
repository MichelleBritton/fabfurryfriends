# Generated by Django 3.2.24 on 2024-03-15 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("profiles", "0005_alter_profile_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="home_status",
            field=models.IntegerField(choices=[(1, "Owned"), (2, "Rented")]),
        ),
        migrations.AlterField(
            model_name="profile",
            name="marital_status",
            field=models.CharField(
                choices=[
                    ("Single", "Single"),
                    ("Married", "Married"),
                    ("Widowed", "Widowed"),
                    ("Divorced", "Divorced"),
                    ("Separated", "Separated"),
                    ("Cohabiting", "Cohabiting"),
                ],
                max_length=255,
            ),
        ),
        migrations.AlterField(
            model_name="profile",
            name="previously_owned",
            field=models.IntegerField(choices=[(1, "No"), (2, "Yes")]),
        ),
    ]
