export interface ISubmissionContent {
  title: string;
  description: string;
  link?: string;
  file?: any;
  createdAt: Date;
}

export interface IOpenRequest {
  id: string;
  createdAt: Date;
  submissionType: string | null;
  isPremium: boolean;
}

export interface ISubmission {
  id: string;
  submissionType: string;
  isReviewed: boolean;
  createdAt: Date;
  submissionContent: ISubmissionContent;
  isPremium: boolean;
}

export async function getOpenRequests(): Promise<IOpenRequest[]> {
  // fetch open requests
  const res = await fetch('http://localhost:8000/submissions/');
  let result: IOpenRequest[] = [];
  const data = await res.json();
  data.forEach(function (item: any) {
    result.push({
      id: item.id,
      createdAt: item.created_at,
      submissionType: item.submission_type,
      isPremium: item.is_premium
    });
  });
  console.log('result', result);
  return result;
}

export async function getSubmissions(): Promise<ISubmission[]> {
  let result: ISubmission[] = [];
  const res = await fetch('http://localhost:8000/submissions/');
  const data = await res.json();
  data.forEach(function (item: any) {
    if (item.submission_type === 'file') {
      result.push({
        id: item.id,
        submissionType: item.submission_type,
        isReviewed: item.is_reviewed,
        createdAt: item.created_at,
        submissionContent: {
          title: item.submission_content.title,
          description: item.submission_content.description,
          file: item.submission_content.file,
          createdAt: item.submission_content.created_at
        },
        isPremium: item.is_premium
      });
    } else if (item.submission_type == 'link') {
      result.push({
        id: item.id,
        submissionType: item.submission_type,
        isReviewed: item.is_reviewed,
        createdAt: item.created_at,
        submissionContent: {
          title: item.submission_content.title,
          description: item.submission_content.description,
          link: item.submission_content.link,
          createdAt: item.submission_content.created_at
        },
        isPremium: item.is_premium
      })
    }
  });
  console.log(result);
  return result;
}