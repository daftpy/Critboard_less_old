import { NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import BaseLayout from "../../components/layout/BaseLayout";
import FileForm from "../../components/submission/form/FileForm";
import FormSelection from "../../components/submission/form/FormSelection";
import LinkForm from "../../components/submission/form/LinkForm";

export interface ISetSelection {
  formSelection: boolean;
  fileForm: boolean;
  linkForm: boolean;
  [key: string]: any;
}

const Create: NextPage = () => {
  const router = useRouter();
  const params: ParsedUrlQuery = router.query;
  const [formSelection, setSelection] = useState<ISetSelection>({
    "formSelection": false,
    "fileForm": false,
    "linkForm": false
  });

  const selectForm = (selection: Object) => {
    // reset selection
    let emptySelection: ISetSelection = {
      "formSelection": false,
      "linkForm": false,
      "fileForm": false,
    }
    setSelection(emptySelection);
    // update the selection
    Object.keys(selection).forEach(key => {
      emptySelection[key] = Object.values(selection)[0];
      setSelection(emptySelection);
    });
  }

  useEffect(() => {
    /*
      We update state on initial render so the hideForm 
      state in the FormContainer component detects the 
      change and renders the formSelection.
    */
    selectForm({"formSelection": true})
  },[])

  return (
    <BaseLayout>
      {params.id ? (
        <>
          <FormSelection
            visibility={formSelection.formSelection}
            setSelection={selectForm}
          />
          <LinkForm
            setSelection={selectForm}
            visibility={formSelection.linkForm}
            requestId={params.id as string}
          />
          <FileForm
            setSelection={selectForm}
            visibility={formSelection.fileForm}
            requestId={params.id as string}
          />
        </>
      ) : (
        <h1>Try requesting feedback</h1>
      )}
    </BaseLayout>
  )
}

export default Create;