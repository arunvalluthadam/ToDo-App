from django.db import models
from django.template.defaultfilters import slugify

# Create your models here.
class ToDoContent(models.Model):
	title = models.CharField(max_length=200)
	slug = models.SlugField(unique=True, null=True, blank=True)
	content = models.TextField(null=True, blank=True)
	# done = models.BooleanField(default=False)
	date = models.DateField(auto_now_add=True)

	def __unicode__(self):
		return self.title

	class Meta:
		verbose_name = "To Do Content"
		verbose_name_plural = "To Do Contents"

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(ToDoContent, self).save(*args, **kwargs)