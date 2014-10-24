from django.shortcuts import render
from django.http import HttpResponse
from myktj.models import event_reg, KolkataWorkshop
from event.models import Event
from django.contrib.auth.models import User
# Create your views here.
def register (request):
    numb=request.GET['id']
    usr=request.user.pk
    if  usr == None:
        return HttpResponse("Please Login First")
    try : 
        r=event_reg.objects.get(user=usr,event=Event.objects.get(id=numb))
    except:
        r=event_reg(user=User.objects.get(id=usr),event=Event.objects.get(id=numb))
        r.save()
        return HttpResponse("You are successfully registered")
    return HttpResponse("Already Registered") 
def register_w (request):
    usr=request.user.pk
    if  usr == None:
        return HttpResponse("Please Login First")
    try : 
        k=KolkataWorkshop.objects.get(user=User.objects.get(id=usr))
    except:
        k=KolkataWorkshop(user=User.objects.get(id=usr))
        k.save()
        return HttpResponse("You are successfully registered <br>Download the LINE App from <a target='_blank' href='http://bit.ly/1sAHRrC'>here</a>,<br>10 Lucky winners will get Exciting Prizes from Kshitij. ")
    return HttpResponse("Already Registered. <br>Download the LINE App from <a target='_blank' href='http://bit.ly/1sAHRrC'>here</a>,<br>10 Lucky winners will get Exciting Prizes from Kshitij. ") 