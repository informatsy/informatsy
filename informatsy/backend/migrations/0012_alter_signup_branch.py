# Generated by Django 3.2.4 on 2021-06-22 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_auto_20210622_2041'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signup',
            name='Branch',
            field=models.CharField(blank=True, choices=[('Civil', 'Civil'), ('Mechanical', 'Mechanical'), ('Electricals', 'Electricals'), ('Computer Science', 'Computer Science')], max_length=50),
        ),
    ]
