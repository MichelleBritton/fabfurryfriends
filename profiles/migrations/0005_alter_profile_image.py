# Generated by Django 3.2.24 on 2024-03-06 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0004_alter_profile_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='../default_profile_lyldgl', upload_to='images/'),
        ),
    ]