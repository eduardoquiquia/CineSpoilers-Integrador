from django.db import models

class Product(models.Model):
    CATEGORIA_CHOICES = [
        ('COMBOS', 'Combos'),
        ('CANCHITA', 'Canchita'),
        ('BEBIDAS', 'Bebidas'),
        ('SNACKS', 'Snacks'),
        ('COLECCIONABLES', 'Coleccionables'),
    ]

    ESTADO_CHOICES = [
        ('DISPONIBLE', 'Disponible'),
        ('AGOTADO', 'Agotado'),
        ('OCULTO', 'Oculto'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    # Categoría como Choice
    category = models.CharField(max_length=20, choices=CATEGORIA_CHOICES)
    
    # Inventario y Estado
    stock = models.PositiveIntegerField(default=0)
    state = models.CharField(max_length=15, choices=ESTADO_CHOICES, default='DISPONIBLE')
    
    # Imagen del producto (opcional pero recomendada)
    image_url = models.URLField(blank=True, null=True) 
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'products'
        verbose_name = 'product'
        verbose_name_plural = 'products'
        ordering = ['category', 'name']

    def __str__(self):
        return f"{self.name} - ${self.price}"