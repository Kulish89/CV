import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import style from "./main/contacts/Contacts.module.scss";
import TextareaAutosize from "react-textarea-autosize";

type FormValuesType = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};
type FormikErrorsType = {
  name?: string;
  phoneNumber?: string;
  email?: string;
  message?: string;
};

// ========================================================

const MyForm = ({
  setIsSending,
}: {
  setIsSending: (isSending: boolean) => void;
}) => {
  const formik = useFormik({
    initialValues: { name: "", phoneNumber: "", email: "", message: "" },
    validate: (values) => {
      const errors: FormikErrorsType = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.name) {
        errors.name = "Required";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setIsSending(true);
      emailjs
        .send(
          "service_r6ht33q",
          "template_ay27pwk",
          values,
          "YWy8zsG0i5jr2R-VT"
        )
        .then((res) => {
          setIsSending(false);
          setSubmitting(false);
          resetForm();
          alert("Your message sent!");
        })
        .catch((error) => {
          setIsSending(false);
          setSubmitting(false);
          console.log("Error! Please try again later!");
        });
    },
  });
  return (
    <div className={style.form_wrapper}>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.form_item}>
          <label htmlFor="name" className={style.form_label}>
            your name
          </label>
          <input
            id="name"
            type="text"
            className={
              formik.errors.name && formik.touched.name
                ? style.form_errorInput + " " + style.form_input
                : style.form_input
            }
            {...formik.getFieldProps("name")}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <div className={style.error_message}>{formik.errors.name}</div>
          )}
        </div>
        <div className={style.form_item}>
          <label htmlFor="phoneNumber" className={style.form_label}>
            phone number
          </label>
          <input
            id="phoneNumber"
            type="text"
            className={style.form_input}
            {...formik.getFieldProps("phoneNumber")}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={style.form_item}>
          <label htmlFor="email" className={style.form_label}>
            email
          </label>
          <input
            id="email"
            type="email"
            className={
              formik.errors.email && formik.touched.email
                ? style.form_errorInput + " " + style.form_input
                : style.form_input
            }
            {...formik.getFieldProps("email")}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className={style.error_message}>{formik.errors.email}</div>
          )}
        </div>
        <div className={style.form_item}>
          <label htmlFor="message" className={style.form_label}>
            your message
          </label>
          <TextareaAutosize
            id="message"
            className={style.form_input + " " + style.form_textarea}
            {...formik.getFieldProps("message")}
          />
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={style.form_button}
        >
          send message
        </button>
      </form>
    </div>
  );
};

export default MyForm;
