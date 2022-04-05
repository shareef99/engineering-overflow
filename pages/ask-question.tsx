import { Formik, FormikHelpers } from "formik";
import React from "react";

interface Props {}

interface FormValues {
  title: string;
  details: string;
  tags: Array<string>;
}

const AskQuestion = (props: Props) => {
  return (
    <section>
      <h2 className="my-8">Ask a Question</h2>
      <Formik
        initialValues={{ title: "", details: "", tags: [] }}
        onSubmit={(values, {}: FormikHelpers<FormValues>) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-4 mb-12">
            <div className="flex flex-col">
              <label htmlFor="title" className="mb-2 flex flex-col">
                <span className="font-semibold">Title:</span>
                <span className="font-normal text-sm">
                  Ask question like you are asking to a person
                </span>
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-primary-text-60 rounded p-2 shadow-lg font-medium"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="details" className="mb-2 flex flex-col">
                <span className="font-semibold">Details</span>
                <span className="font-normal text-sm">
                  Explain your question in detail.
                </span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                value={values.details}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-primary-text-60 rounded p-2 shadow-lg font-medium"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="tags" className="mb-2 flex flex-col">
                <span className="font-semibold">Tags</span>
                <span className="font-normal text-sm">
                  Add tags to describe your question(maximum 3 tags).
                </span>
              </label>
              <input
                id="tags"
                name="tags"
                type="text"
                value={values.tags}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border border-primary-text-60 rounded p-2 shadow-lg font-medium"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-text-80 text-primary-bg p-2 rounded-md font-medium mt-4"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default AskQuestion;
