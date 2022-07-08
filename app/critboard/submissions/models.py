from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType
from django.core.exceptions import ValidationError
from django.core.validators import URLValidator
import uuid


class SubmissionRequest(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    private = models.BooleanField(default=False)
    submission_type = models.CharField(
        max_length=4,
        blank=True,
        null=True,
        choices=[
            ('file', 'file'),
            ('link', 'link')
        ]
    )
    is_reviewed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_premium = models.BooleanField(default=False)

    # Submission Data Relation
    content_type = models.ForeignKey(ContentType, null=True, on_delete=models.CASCADE)
    object_id = models.CharField(max_length=255, null=True)
    content_object = GenericForeignKey("content_type", "object_id")


class FileSubmissionData(models.Model):
    title = models.CharField(max_length=48, blank=False, null=False)
    description = models.CharField(max_length=255, blank=False, null=False)
    file = models.FileField()
    submission_request = GenericRelation(SubmissionRequest)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class LinkSubmissionData(models.Model):
    title = models.CharField(max_length=48, blank=False)
    description = models.CharField(max_length=255, blank=False, null=False)
    link = models.CharField(max_length=255, blank=False, null=False)
    submission_request = GenericRelation(SubmissionRequest)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def clean(self):
        validate = URLValidator()
        try:
            validate(self.link)
        except ValidationError as e:
            raise ValidationError({"link": e})
