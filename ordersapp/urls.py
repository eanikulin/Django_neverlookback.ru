from django.urls import path
import ordersapp.views as ordersapp
from django.contrib.auth.decorators import login_required


app_name = 'ordersapp'

urlpatterns = [
    path('', login_required(ordersapp.OrderList.as_view()), name='main'),
    path('forming/complete/<int:pk>/', ordersapp.order_forming_complete, name='order_forming_complete'),
    path('create/', login_required(ordersapp.OrderItemCreate.as_view()), name='order_create'),
    path('read/<int:pk>/', login_required(ordersapp.OrderRead.as_view()), name='order_read'),
    path('update/<int:pk>/', login_required(ordersapp.OrderItemUpdate.as_view()), name='order_update'),
    path('delete/<int:pk>/', login_required(ordersapp.OrderDelete.as_view()), name='order_delete'),
    path('product/<int:pk>/price/', ordersapp.get_product_price),
]