# Generated by Django 3.2.24 on 2024-03-09 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adverts', '0003_rename_name_advert_dog_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='advert',
            name='sex',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]