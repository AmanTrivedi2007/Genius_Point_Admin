from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["POST"])
def register(request):

    name = request.data.get("name")
    email = request.data.get("email")

    print("Name:", name)
    print("Email:", email)

    return Response({
        "message": "Registration received!"
    })