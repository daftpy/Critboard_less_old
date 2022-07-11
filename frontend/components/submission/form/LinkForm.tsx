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

interface IFormErrors {
  title: string[] | null;
  description: string[] | null;
  link: string[] | null;
  permission: string[] | null;
  private: string[] | null;
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
  const [formErrors, setFormErrors] = useState<IFormErrors>({
    "title": null,
    "description": null,
    "link": null,
    "permission": null,
    "private": null
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
        let errors = Object.assign({}, formErrors);
        // clear old errors
        for (let [key, value] of Object.entries(formErrors)) {
          errors[key] = null;
        }
        setFormErrors(errors);
        // set new errors
        for (let [key, value] of Object.entries(res.response.data)) {
          errors[key] = value;
        }
        setFormErrors(errors);
      });
  }

  return (
    <FormContainer visibility={visibility} setSelection={setSelection} action={postFormData}>
          <h2>Link Submission</h2>
          <TextInput
            label="Title"
            type='text'
            id='title'
            setData={setData}
            {...(formErrors.title ? {errors: formErrors.title} : {})}
          />
          <TextArea
            label="Description"
            id="description"
            setData={setData}
            {...(formErrors.description ? {errors: formErrors.description} : {})}
          />
          <TextInput
            label="Link"
            type='text'
            id='link'
            setData={setData}
            {...(formErrors.link ? {errors: formErrors.link} : {})}
          />
          <PermissionInput
            id="permission"
            setData={setData}
            {...(formErrors.permission ? {errors: formErrors.permission} : {})}
          />
          <PrivateInput
            id="private"
            setData={setData}
          />
    </FormContainer>
  )
}

export default LinkForm;