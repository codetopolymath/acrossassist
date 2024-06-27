# Generated by Django 5.0.6 on 2024-06-25 12:53

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('policy_manager', '0002_alter_purchasedpolicy_id'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Claim',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('claim_type', models.CharField(choices=[('medical', 'Medical'), ('baggage', 'Baggage'), ('trip_cancellation', 'Trip Cancellation'), ('travel_delay', 'Travel Delay'), ('other', 'Other')], default='travel', max_length=20)),
                ('incident_date', models.DateField()),
                ('description', models.TextField()),
                ('claimed_amount', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('approved_amount', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('notes', models.TextField(blank=True, null=True)),
                ('updates', models.TextField(blank=True, null=True)),
                ('supporting_documents', models.FileField(blank=True, null=True, upload_to='supporting_documents/')),
                ('status', models.CharField(choices=[('submitted', 'Submitted'), ('pending', 'Pending Review'), ('approved', 'Approved'), ('denied', 'Denied'), ('partially_approved', 'Partially Approved')], default='submitted', max_length=20)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('policy', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='policy_manager.purchasedpolicy')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='purchased_claims', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
