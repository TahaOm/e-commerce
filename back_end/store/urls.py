from django.urls import path
from . import views

app_name = 'store'
urlpatterns = [
    path('api/list/', views.ProductListView.as_view(), name='product_list'),
    path('api/category/', views.CategoryListView.as_view(), name='category_list'),
    path('api/<slug:slug>/', views.Product.as_view(), name='product'),
    path('api/category/<slug:slug>/',
         views.CategoryItemView.as_view(), name='category_item'),
]
