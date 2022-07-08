from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser, FormParser, MultiPartParser
from critboard.submissions.models import FileSubmissionData, LinkSubmissionData, SubmissionRequest
from critboard.submissions.serializers import FileSubmissionSerializer, LinkSubmissionSerializer, SubmissionRequestSerializer


class SubmissionRequestList(APIView):
    """
    List all submission requests.
    """
    parser_classes = [JSONParser]
    def get(self, request, format=None):
        submission_requests = SubmissionRequest.objects.filter(private=False)
        serializer = SubmissionRequestSerializer(submission_requests, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SubmissionRequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)


class FileSubmissionList(APIView):
    """
    List all file submissions.
    """
    parser_classes = [FormParser, MultiPartParser]
    def get(self, request, format=None):
        file_submissions = FileSubmissionData.objects.all()
        serializer = FileSubmissionSerializer(file_submissions, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FileSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)


class LinkSubmissionList(APIView):
    """
    List all link submissions.
    """
    def get(self, request, format=None):
        link_submissions = LinkSubmissionData.objects.all()
        serializer = LinkSubmissionSerializer(link_submissions, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = LinkSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)
