from django.db import models

class Genre(models.Model):
    name = models.CharField(max_length = 200, unique = True)
    image = models.URLField()

    def __unicode__(self):
        return self.name

class Event(models.Model):
    name = models.CharField(max_length = 200)
    onliner = models.CharField(max_length = 300)
    sponsor = models.URLField(blank = True)
    quote = models.TextField(blank = True)
    genre = models.ForeignKey(Genre)
    introduction = models.TextField()
    rules = models.TextField()
    maxPeople = models.IntegerField(null = True, blank = True)
    fileSubmission = models.BooleanField()
    judging = models.TextField(blank = True)
    prizes = models.TextField(blank = True)
    problemStatement = models.TextField(blank = True)
    register = models.TextField(blank = True)
    contacts = models.TextField()
    results = models.TextField(blank = True)
    image = models.URLField()

    def __unicode__(self):
        return self.name