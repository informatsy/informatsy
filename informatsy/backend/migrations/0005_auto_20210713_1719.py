# Generated by Django 3.2.5 on 2021-07-13 11:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_auto_20210713_0106'),
    ]

    operations = [
        migrations.RenameField(
            model_name='accounts',
            old_name='firstName',
            new_name='first_name',
        ),
        migrations.RenameField(
            model_name='accounts',
            old_name='lastName',
            new_name='last_name',
        ),
    ]
