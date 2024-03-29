# Generated by Django 3.2.4 on 2024-03-19 12:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("profiles", "0018_alter_profile_owner"),
        ("adoptors", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="adoptor",
            name="owner",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="potential_adoptor",
                to="profiles.profile",
            ),
        ),
    ]
