"use client";

import { Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";

export const FooterSubscription = () => {
  const t = useTranslations("common");
  return (
    <div className="flex flex-col max-sm:items-center max-sm:justify-center gap-2 sm:gap-3 lg:gap-5 max-lg:col-span-full lg:max-w-80 overflow-hidden">
      <p className="text-base sm:text-lg lg:text-xl text-secondary font-bold">
        {t("Subscribe to Newsletter")}
      </p>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(e) => console.log({ e })}
      >
        <Form className="flex">
          <Field
            name="email"
            placeholder={t("Email")}
            className="h-8 sm:h-10 max-sm:placeholder:text-xs max-sm:text-xs lg:h-11 px-3 placeholder:text-sm text-sm w-3/4 lg:w-[70%] bg-[#D9D9D9] rounded-s-md outline-none"
          />
          <button className="bg-[#446717] w-1/4 lg:w-[30%] text-white h-8 sm:h-10 max-sm:text-xs lg:h-11 px-5 text-sm rounded-e-md flex items-center justify-center hover:bg-primary/80 cursor-pointer outline-none">
            {t("Subscribe")}
          </button>
        </Form>
      </Formik>
    </div>
  );
};
