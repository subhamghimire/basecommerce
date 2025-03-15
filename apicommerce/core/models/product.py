from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='products/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    class Meta:
        db_table  = 'products'
        
    def __str__(self):
        return self.title