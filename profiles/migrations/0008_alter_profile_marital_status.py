# Generated by Django 3.2.24 on 2024-03-15 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("profiles", "0007_auto_20240315_1308"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="marital_status",
            field=models.IntegerField(
                choices=[
                    (1, "Single"),
                    (2, "Married"),
                    (3, "Widowed"),
                    (4, "Divorced"),
                    (5, "Separated"),
                    (6, "Cohabiting"),
                ],
                default=1,
            ),
        ),
    ]
