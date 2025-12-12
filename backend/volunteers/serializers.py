from rest_framework import serializers
from .models import Volunteer

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Volunteer
        fields="__all__"
        extra_kwargs = {
            "password": {"write_only": True},  # don’t return password

            "role": {"read_only": True},
            "is_active": {"read_only": True},
        }
    def create(self, validated_data):
        validated_data["role"] = "volunteer"  # fixed role
        password = validated_data.pop("password")
        volunteer = Volunteer(**validated_data)
        volunteer.set_password(password)
        volunteer.save()
        return volunteer