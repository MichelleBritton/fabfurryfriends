# Generated by Django 3.2.24 on 2024-03-15 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("profiles", "0008_alter_profile_marital_status"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="children",
            field=models.CharField(
                choices=[("A", "No"), ("B", "Yes")], default="A", max_length=1
            ),
        ),
        migrations.AlterField(
            model_name="profile",
            name="home_status",
            field=models.CharField(
                choices=[("A", "Owned"), ("B", "Rented")], default="A", max_length=1
            ),
        ),
        migrations.AlterField(
            model_name="profile",
            name="marital_status",
            field=models.CharField(
                choices=[
                    ("A", "Single"),
                    ("B", "Married"),
                    ("C", "Widowed"),
                    ("D", "Divorced"),
                    ("E", "Separated"),
                    ("F", "Cohabiting"),
                ],
                default="A",
                max_length=1,
            ),
        ),
        migrations.AlterField(
            model_name="profile",
            name="previously_owned",
            field=models.CharField(
                choices=[("A", "No"), ("B", "Yes")], default="A", max_length=1
            ),
        ),
        migrations.AlterField(
            model_name="profile",
            name="sex",
            field=models.CharField(
                choices=[("A", "Either"), ("B", "Dog"), ("C", "Bitch")],
                default="A",
                max_length=1,
            ),
        ),
    ]
