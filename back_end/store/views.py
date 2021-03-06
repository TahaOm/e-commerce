from django.shortcuts import render
from rest_framework import generics

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from . import models


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class Product(generics.RetrieveAPIView):
    lookup_field = 'slug'
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# class CategoryItemView(generics.ListAPIView):
#     serializer_class = ProductSerializer

#     def get_queryset(self):
#         return models.Product.objects.filter(category__slug=self.kwargs['slug'])

class CategoryItemView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return models.Product.objects.filter(
            category__in=Category.objects.get(
                slug=self.kwargs["slug"]).get_descendants(include_self=True)
        )


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.filter(level=1)
    serializer_class = CategorySerializer
