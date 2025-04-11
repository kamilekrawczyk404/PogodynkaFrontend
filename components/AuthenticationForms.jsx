"use client";
import React, { useState } from "react";
import { styles } from "@/styles";
import LinedButtons from "@/components/LinedButtons";
import ActiveIndicator from "@/components/ActiveIndicator";
import { AnimatePresence, motion } from "framer-motion";
import Form from "@/components/Form";
import AnimatedContainer from "@/components/AnimatedContainer";
import { useDispatch, useSelector } from "react-redux";
import { login, setUser } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { showPopUp } from "@/redux/popUpSlice";

const AuthenticationForms = ({ className = "" }) => {
  const [selectedFormTypeIndex, setSelectedFormTypeIndex] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [forms, setForms] = useState([
    {
      type: "signUp",
      name: "Sign Up",
      title: "Create a new account",
      endpoint: "http://localhost:3000/api/auth/register",
      lowerText: "Already have account?",
      lowerTextLinkText: "Sign in",
      submitButtonTitle: "Sign up",
      globalError: "",
      fields: [
        {
          name: "Login",
          value: "",
          placeholder: "Enter your login",
          errorMessage: "",
        },
        {
          name: "Name",
          value: "",
          placeholder: "Enter your name",
          errorMessage: "",
        },
        {
          name: "Password",
          value: "",
          placeholder: "Enter your password",
          errorMessage: "",
          type: "password",
        },
      ],
    },
    {
      type: "singIn",
      name: "Sign In",
      title: "Login to your account",
      endpoint: "http://localhost:3000/api/auth/login",
      lowerText: "Don't have an account?",
      lowerTextLinkText: "Sing up",
      submitButtonTitle: "Sign In",
      globalError: "",
      fields: [
        {
          name: "Login",
          value: "",
          placeholder: "Enter your login",
          errorMessage: "",
        },
        {
          name: "Password",
          value: "",
          placeholder: "Enter your password",
          errorMessage: "",
          type: "password",
        },
      ],
    },
  ]);

  const handleFormSubmit = async (formData, endpoint) => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        if (selectedFormTypeIndex === 1) {
          dispatch(login(data));
          router.push("/");
          dispatch(
            showPopUp({ message: "You have been logged in!", type: "success" }),
          );
        } else {
          setSelectedFormTypeIndex(1);
          dispatch(
            showPopUp({
              message: "You have created your account.",
              type: "success",
            }),
          );
        }
      } else {
        const errorData = await response.json();

        setForms((prev) =>
          prev.toSpliced(selectedFormTypeIndex, 1, {
            ...prev[selectedFormTypeIndex],
            globalError: errorData?.error ? errorData.error : "",
            fields: prev[selectedFormTypeIndex].fields.map((field) => ({
              ...field,
              value: formData[field.name],
              errorMessage: errorData[field.name] ? errorData[field.name] : "",
            })),
          }),
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <AnimatedContainer
      className={`w-full h-fit flex flex-col gap-3 rounded-2xl ${styles.paddings} ${styles.bodyBgColor} ${styles.textDefault} ${className}`}
    >
      <LinedButtons
        className={"w-fit"}
        items={forms}
        render={(button) => (
          <ActiveIndicator
            key={button.name}
            layoutId={"formActiveButton"}
            active={
              selectedFormTypeIndex ===
              forms.findIndex((form) => form.name === button.name)
            }
          >
            <button
              type={"button"}
              onClick={() => setSelectedFormTypeIndex(forms.indexOf(button))}
              className={"hover:cursor-pointer"}
            >
              {button.name}
            </button>
          </ActiveIndicator>
        )}
      />
      <div className={"relative w-full h-full gap-4"}>
        {forms.map(
          (form, key) =>
            key === selectedFormTypeIndex && (
              <motion.div
                key={form.type}
                variants={{
                  initial: {
                    opacity: 0,
                    x: 100,
                    display: "hidden",
                  },
                  animate: {
                    opacity: 1,
                    x: 0,
                    display: "block",
                  },
                  exit: {
                    opacity: 0,
                    x: -200,
                  },
                }}
                initial="initial"
                animate={selectedFormTypeIndex === key ? "animate" : "initial"}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "spring",
                }}
                className={`h-full w-full ${
                  selectedFormTypeIndex === key ? "" : ""
                }`}
              >
                <Form {...form} onSubmit={handleFormSubmit} />
              </motion.div>
            ),
        )}
      </div>
    </AnimatedContainer>
  );
};

export default AuthenticationForms;
