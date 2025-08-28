"use client";

import { Field, Form, Formik } from "formik";

export const FooterSubscription = () => {
  return (
    <div className="flex flex-col max-sm:items-center max-sm:justify-center gap-2 sm:gap-3 lg:gap-5 max-lg:col-span-full lg:max-w-80 overflow-hidden">
      <p className="text-base sm:text-lg lg:text-xl text-white font-bold">
        Subscribe to Newsletter
      </p>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(e) => console.log({ e })}
      >
        <Form className="flex">
          <Field
            name="email"
            placeholder="Email"
            className="h-8 sm:h-10 max-sm:placeholder:text-xs max-sm:text-xs lg:h-11 px-3 placeholder:text-sm text-sm w-3/4 lg:w-[70%] bg-white rounded-s-xl outline-none"
          />
          <button className="bg-primary w-1/4 lg:w-[30%] text-white h-8 sm:h-10 max-sm:text-xs lg:h-11 px-5 text-sm rounded-e-xl flex items-center justify-center hover:bg-primary/80 cursor-pointer outline-none">
            Subscribe
          </button>
        </Form>
      </Formik>
    </div>
  );
};
