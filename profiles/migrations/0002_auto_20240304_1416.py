# Generated by Django 3.2.24 on 2024-03-04 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='activities',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='address',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='age',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='children_age',
            field=models.CharField(blank=True, max_length=25),
        ),
        migrations.AlterField(
            model_name='profile',
            name='daily_life',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='describe_garden',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='describe_house',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='dog_left_alone',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='email',
            field=models.EmailField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='profile',
            name='name',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='profile',
            name='other_pets',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='phone',
            field=models.CharField(blank=True, max_length=11),
        ),
        migrations.AlterField(
            model_name='profile',
            name='preferred_age',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='profile',
            name='when',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='where_dog_live',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='why',
            field=models.TextField(blank=True),
        ),
    ]
