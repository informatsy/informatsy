# Generated by Django 3.2.5 on 2021-07-12 19:36

import django.core.validators
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_alter_accounts_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='accounts',
            name='gender',
            field=models.CharField(default=django.utils.timezone.now, max_length=20),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='accounts',
            name='password',
            field=models.CharField(max_length=500, validators=[django.core.validators.RegexValidator('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!#%*?&]{6,20}$', 'Password should reach required pattern', '')]),
        ),
    ]