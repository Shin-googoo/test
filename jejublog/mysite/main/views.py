from django.shortcuts import render
from .models import Blog

def index(request):
    return render(request, 'index.html')

def blog(request):
    blogs = Blog.objects.all()
    context = {
        'blogs':blogs
    }
    return render(request, 'blog.html', context)

def blogdetail(request, pk):
    blog = Blog.objects.get(pk=pk)
    context = {
        'blog':blog
    }
    return render(request, 'blogdetail.html', context)

def templatetag(request):
    context = {
        'one': [10, 20, 30, 40, 50],
        'two': 'lee',
        'three': 'hojun',
        'four': True,
        'five': {'one': 10, 'two': 20}
    }
    return render(request, 'templatetag.html', context)
