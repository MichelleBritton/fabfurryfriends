# Generated by Django 3.2.24 on 2024-03-06 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adverts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advert',
            name='age',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='advert',
            name='breed',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='advert',
            name='name',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='advert',
            name='quick_fact_1',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='advert',
            name='quick_fact_2',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='advert',
            name='quick_fact_3',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='advert',
            name='quick_fact_4',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='advert',
            name='quick_fact_5',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
