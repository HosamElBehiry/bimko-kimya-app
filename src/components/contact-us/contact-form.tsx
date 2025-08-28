"use client";

import { Field, Form, Formik } from "formik";

export const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 lg:gap-6">
        <Field
          className="border h-9 sm:h-10 max-sm:placeholder:text-sm max-sm:text-sm lg:h-12 rounded-xl px-6 outline-none"
          name="firstname"
          placeholder="First Name"
        />
        <Field
          className="border h-9 sm:h-10 max-sm:placeholder:text-sm max-sm:text-sm lg:h-12 rounded-xl px-6 outline-none"
          name="lastname"
          placeholder="Last Name"
        />
        <Field
          className="border h-9 sm:h-10 max-sm:placeholder:text-sm max-sm:text-sm lg:h-12 rounded-xl px-6 outline-none col-span-full"
          name="email"
          placeholder="Email"
        />
        <Field
          className="border h-9 sm:h-10 max-sm:placeholder:text-sm max-sm:text-sm lg:h-12 rounded-xl px-6 outline-none col-span-full"
          name="message"
          placeholder="Message"
        />
        <button className="col-span-full w-full font-bold bg-primary text-black/50 h-9 max-sm:text-sm sm:h-10 lg:h-12 rounded-xl px-6 flex items-center justify-center hover:bg-primary/80 cursor-pointer outline-none">
          Send Message
        </button>
      </Form>
    </Formik>
  );
};
