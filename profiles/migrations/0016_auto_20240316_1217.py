# Generated by Django 3.2.24 on 2024-03-16 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0015_alter_profile_marital_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='children',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='profile',
            name='home_status',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='profile',
            name='marital_status',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='profile',
            name='previously_owned',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='profile',
            name='sex',
            field=models.CharField(max_length=255),
        ),
    ]