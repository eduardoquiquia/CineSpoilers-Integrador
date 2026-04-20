from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    release_date = models.DateField(null=True, blank=True)
    image_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'movies'
        ordering = ['release_date']
        verbose_name = 'movie'
        verbose_name_plural = 'movies'

    def __str__(self):
        return self.title