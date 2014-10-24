from django.shortcuts import render, redirect

from event.models import *
from journal.models import *
from myktj.models import *
from sponsor.models import *


def index(request, event = False):
 	menuDesc = MenuDescription.objects.all()
 	updates = Update.objects.all()
 	sponsTicker = TickerSpons.objects.all()
	
	years = Year.objects.all()
	
	genres = Genre.objects.all()
	allEvents = Event.objects.all()
	
	exhibitions = Exhibition.objects.all()
	
	workshops = Workshop.objects.all()
	
	guests = Guest.objects.all()

	megashows = Megashow.objects.all()

	contactPost = ContactPost.objects.all()
	contacts = Contact.objects.all()


	cntxt = {
	'menuDesc': menuDesc,
	'updates' : updates,
	'sponsTicker' : sponsTicker,
	'years' : years,
	'genres' : genres,
	'allEvents': allEvents,
	'exhibitions' : exhibitions,
	'workshops' : workshops,
	'guests' : guests,
	'megashows' : megashows,
	'contactPost' : contactPost,
	'contacts' : contacts,
	}

	return render(request,'index.html',cntxt)
def lineapp(request ):
	return redirect("http://bit.ly/1sAHRrC")