from django.db import models

class User(models.Model):
    GENERO_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
    ]
    
    ROL_CHOICES = [
        ('ADMIN', 'Administrador'),
        ('CLIENTE', 'Cliente'),
    ]

    ESTADO_CHOICES = [
        ('ACTIVO', 'Activo'),
        ('INACTIVO', 'Inactivo'),
    ]

    name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    
    gender = models.CharField(max_length=1, choices=GENERO_CHOICES)
    role = models.CharField(max_length=10, choices=ROL_CHOICES, default='CLIENTE')
    
    birth_date = models.DateField()
    state = models.CharField(max_length=10, choices=ESTADO_CHOICES, default='ACTIVO')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'users'
        ordering = ['-created_at']
        verbose_name = 'user'
        verbose_name_plural = 'users'

    def __str__(self):
        return f"{self.name} ({self.role})"