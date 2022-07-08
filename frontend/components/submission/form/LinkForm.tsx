import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
  link: string | null;
  permission: boolean | null;
  private: boolean | null;
  request_id?: string;
  [key: string]: any;
}

const LinkForm: React.FC<IProps> = ({visibility, setSelection, requestId}) => {
  const Router = useRouter();
  const [formData, setFormData] = useState<IFormData>({
    "title": null,
    "description": null,
    "link": null,
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

  const postFormData = () => {
    console.log('posting')
    let postData: string = JSON.stringify(formData);
    axios.post(
      'http://localhost:8000/submissions/link/',
      postData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => {
        console.log('Success!', res);
        Router.push('/');
      })
      .catch(res => {
        console.log('Fail!', res)
      })
  }

  return (
    <FormContainer visibility={visibility} setSelection={setSelection} action={postFormData}>
          <h2>Link Submission</h2>
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
          <TextInput
            label="Link"
            type='text'
            id='link'
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

export default LinkForm;