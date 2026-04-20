from rest_framework import viewsets
from .serializer import UserSerializer
from .models import User

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all() # que datos usar
    serializer_class = UserSerializer # cómo transformarlos