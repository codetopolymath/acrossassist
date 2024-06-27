# Generated by Django 5.0.6 on 2024-06-25 11:31

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='PurchasedPolicy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('policy_number', models.CharField(db_index=True, max_length=50, unique=True)),
                ('policy_details', models.JSONField(default=dict)),
                ('effective_date', models.DateField()),
                ('expiry_date', models.DateField()),
                ('premium_amount', models.DecimalField(db_index=True, decimal_places=2, max_digits=10)),
                ('policy_type', models.CharField(choices=[('travel', 'Travel Insurance'), ('health', 'Health Insurance'), ('2wheeler', '2 Wheeler Insurance'), ('other', 'Other Insurance')], db_index=True, default='other', max_length=20)),
                ('status', models.CharField(choices=[('active', 'Active'), ('expired', 'Expired'), ('cancelled', 'Cancelled')], db_index=True, default='active', max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='purchased_policies', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['expiry_date'],
            },
        ),
    ]
