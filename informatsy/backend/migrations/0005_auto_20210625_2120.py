# Generated by Django 3.2.4 on 2021-06-25 15:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_course_notes_yearorsem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='course', to='backend.course'),
        ),
        migrations.AlterField(
            model_name='notes',
            name='yearOrSem',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='yearOrSem', to='backend.yearorsem'),
        ),
    ]