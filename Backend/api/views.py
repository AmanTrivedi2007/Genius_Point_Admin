from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializer import (
    RegisterSerializer,
    LoginSerializer
)


# =========================
# REGISTER API
# =========================

@api_view(["POST"])
def Register(request):

    serializer = RegisterSerializer(
        data=request.data
    )

    if serializer.is_valid():

        serializer.save()

        return Response({
            "success": True,
            "message": "Registration successful!"
        })

    return Response({
        "success": False,
        "message": "Registration failed.",
        "errors": serializer.errors
    }, status=400)


# =========================
# LOGIN API
# =========================

@api_view(["POST"])
def Login(request):

    serializer = LoginSerializer(
        data=request.data
    )

    if serializer.is_valid():

        user = serializer.validated_data["user"]

        role = user.profile.role

        return Response({
            "success": True,
            "message": "Login successful!",
            "role": role
        })

    return Response({
        "success": False,
        "message": "Invalid email or password.",
        "errors": serializer.errors
    }, status=401)