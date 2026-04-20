from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all() # que datos usar
    serializer_class = ProductSerializer # cómo transformarlos