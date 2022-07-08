import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FileInput from './fields/FileInput';
import PermissionInput from './fields/PermissionInput';
import PrivateInput from './fields/PrivateInput';
import TextArea from './fields/TextArea';
import TextInput from './fields/TextInput';
import FormContainer from './FormContainer';

interface IProps {
  visibility: boolean;
  setSelection: (selectionObject: Object) => void;
  requestId: string;
}

interface IFormData {
  title: string | null;
  description: string | null;
  file: string | null;
  permission: boolean | null;
  private: boolean | null;
  request_id?: string;
  [key: string]: any;
}

const FileForm: React.FC<IProps> = ({visibility, setSelection, requestId}) => {
  const Router = useRouter();
  const [formData, setFormData] = useState<IFormData>({
    "title": null,
    "description": null,
    "file": null,
    "permission": null,
    "private": null,
    "request_id": requestId
  });

  const setData = (inputData: Object) => {
    let currentFormData: IFormData = {...formData};
    let key = Object.keys(inputData)[0];
    currentFormData[key] = Object.values(inputData)[0];
    setFormData(currentFormData);
  }

  const postData = () => {
    let postData = new FormData;
    for (let [key, value] of Object.entries(formData)) {
      postData.append(key, value);
    };
    console.log(postData);
    axios.post(
      'http://localhost:8000/submissions/file/',
      postData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
      .then(res => {
        console.log('Success!', res);
        Router.push('/');
      })
      .catch(res => {
        console.log('Fail!', res);
      });
  }
  return (
    <FormContainer visibility={visibility} setSelection={setSelection} action={postData}>
          <h2>File Submission</h2>
          <TextInput
            label="Title"
            type='text'
            id='title'
            setData={setData}
          />
          <TextArea
            label="Description"
            id="description"
            setData={setData}
          />
          <FileInput
            id="file"
            setData={setData}
          />
          <PermissionInput
            id="permission"
            setData={setData}
          />
          <PrivateInput
            id="private"
            setData={setData}
          />
    </FormContainer>
  )
}

export default FileForm;