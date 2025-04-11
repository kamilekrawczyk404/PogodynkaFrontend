import React, { useEffect, useState } from "react";
import Input from "@/components/Input";
import SubmitButton from "@/components/SubmitButton";
import ErrorMessage from "@/components/ErrorMessage";

const Form = ({
  title,
  submitButtonTitle,
  lowerText,
  lowerTextLinkText,
  globalError,
  fields,
  endpoint,
  onSubmit,
}) => {
  const [formFields, setFormFields] = useState([]);

  const validFormFields = () => {
    // ensure user fill all fields
    if (formFields.some((field) => field.value.length === 0)) {
      setFormFields((prev) =>
        prev.map((field) => {
          if (field.value.length === 0) {
            return {
              ...field,
              errorMessage: "This field must be filled",
            };
          }
          return field;
        }),
      );

      return false;
    }
    return true;
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!validFormFields()) {
      return;
    }

    try {
      const formData = formFields.reduce((acc, field) => {
        acc[field.name] = field.value;
        return acc;
      }, {});

      await onSubmit(formData, endpoint);
    } catch (error) {
      console.error("Error in form submission:", error);
    }
  };

  const onInputChange = (e, name) => {
    const oldField = formFields.filter((input) => input.name === name)[0];
    const oldFieldIndex = formFields.indexOf(oldField);

    setFormFields((prev) =>
      prev.toSpliced(oldFieldIndex, 1, {
        ...oldField,
        value: e.target.value,
        errorMessage: "",
      }),
    );
  };

  useEffect(() => {
    setFormFields(fields);
  }, [fields]);

  return (
    <form className={"flex flex-col gap-4 w-full"} onSubmit={onFormSubmit}>
      <h2 className={"text-3xl"}>{title}</h2>

      <ErrorMessage message={globalError} />
      {formFields.map((input, key) => (
        <div key={key} className={"flex flex-col gap-1 group"}>
          <Input
            id={key}
            value={input.value}
            name={input.name}
            type={input?.type || "text"}
            onChange={(e) => onInputChange(e, input.name)}
            placeholder={input.placeholder}
            className={"peer"}
            errorMessage={input.errorMessage}
            globalError={globalError}
          />
        </div>
      ))}

      <SubmitButton title={submitButtonTitle} />

      <p className={"text-sm"}>
        {lowerText}{" "}
        <span
          className={
            "text-purple-700 hover:underline hover:cursor-pointer font-semibold"
          }
        >
          {lowerTextLinkText}
        </span>
      </p>
    </form>
  );
};

export default Form;
