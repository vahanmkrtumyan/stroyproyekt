import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const [state, handleSubmit] = useForm("xrgdbelr");
  if (state.succeeded) {
    return (
      <p style={{ textAlign: "center", fontSize: "30px", color: "white" }}>
        {t("messageSent")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <div className="form-field">
            <input type="text" name="name" placeholder={t("name")} />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="form-field">
            <input type="text" name="lastname" placeholder={t("lastName")} />
            <ValidationError
              prefix="Lastname"
              field="lastname"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="form-field">
            <input type="email" name="email" placeholder={t("email")} />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="form-field">
            <textarea name="message" placeholder={t("message")}></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="contact-form-action">
            <button
              className="form-button"
              type="submit"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
