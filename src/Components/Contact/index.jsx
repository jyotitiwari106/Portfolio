import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post("https://getform.io/f/anllzgqa", values);
      toast.success("Your message has been sent");
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 p-4"
    >
      <h1 className="text-3xl font-bold mb-3">Contact Me</h1>
      <p>Please fill out this form below to contact me</p>

      <div className="flex flex-col justify-center items-center mt-5 gap-3">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4 bg-slate-200 md:w-96 px-8 py-6 rounded-xl p-4">
              <h1>Send Your Message</h1>

              <div>
                <label className="block text-gray-700">Full Name</label>
                <Field
                  type="text"
                  name="name"
                  className="shadow appearance-none rounded p-3 w-full text-gray-700 leading-tight"
                  placeholder="Enter Your Full Name"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="shadow appearance-none rounded p-3 w-full text-gray-700 leading-tight"
                  placeholder="Enter Your Email Address"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  className="shadow appearance-none rounded p-3 w-full text-gray-700 leading-tight"
                  placeholder="Enter Your Query"
                />
                <ErrorMessage
                  name="message"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-black text-white p-2 w-[30%] hover:bg-gray-600 duration-100 ${
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
