from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password

from rest_framework import serializers

from .models import Profile


# =========================
# REGISTER
# =========================

class RegisterSerializer(serializers.Serializer):

    name = serializers.CharField(
        max_length=100
    )

    email = serializers.EmailField()

    password = serializers.CharField(
        write_only=True,
        validators=[validate_password]
    )

    def validate_email(self, value):

        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                "Email already exists."
            )

        return value

    def create(self, validated_data):

        user = User.objects.create_user(
            username=validated_data["email"],
            email=validated_data["email"],
            first_name=validated_data["name"],
            password=validated_data["password"]
        )

        Profile.objects.create(
            user=user
        )

        return user


# =========================
# LOGIN
# =========================

class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()

    password = serializers.CharField(
        write_only=True
    )

    def validate(self, data):

        user = authenticate(
            username=data["email"],
            password=data["password"]
        )

        if user is None:
            raise serializers.ValidationError(
                "Invalid email or password."
            )

        data["user"] = user

        return data