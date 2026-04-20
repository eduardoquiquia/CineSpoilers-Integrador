from rest_framework import viewsets
from .serializer import MovieSerializer
from .models import Movie

class MovieView(viewsets.ModelViewSet):
    queryset = Movie.objects.all() # que datos usar
    serializer_class = MovieSerializer # cómo transformarlos