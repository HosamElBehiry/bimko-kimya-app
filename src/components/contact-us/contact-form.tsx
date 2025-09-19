"use client";

import { Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";

export const ContactForm = () => {
  const t = useTranslations("contact");
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
          placeholder={t("First Name")}
        />
        <Field
          className="border h-9 sm:h-10 max-sm:placeholder:text-sm max-sm:text-sm lg:h-12 rounded-xl px-6 outline-none"
          name="lastname"
          placeholder={t("Last Name")}
        />
        <Field
          className="border h-9 sm:h-10 max-sm:placeholder:text-sm max-sm:text-sm lg:h-12 rounded-xl px-6 outline-none col-span-full"
          name="email"
          placeholder={t("Email")}
        />
        <Field
          className="border max-sm:placeholder:text-sm max-sm:text-sm rounded-xl px-6 py-3 outline-none col-span-full"
          name="message"
          as="textarea"
          rows={10}
          placeholder={t("Message")}
        />
        <button className="col-span-full w-full font-bold bg-primary text-black/50 h-9 max-sm:text-sm sm:h-10 lg:h-12 rounded-xl px-6 flex items-center justify-center hover:bg-primary/80 cursor-pointer outline-none">
          {t("Send Message")}
        </button>
      </Form>
    </Formik>
  );
};
