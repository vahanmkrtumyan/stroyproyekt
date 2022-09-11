import React from "react";
// import ContactForm from "../ContactFrom";
import { useTranslation } from "react-i18next";
import "./style.css";

const Contactpage = () => {
  const { t } = useTranslation();
  return (
    <section className="contact-page-area">
      <div className="container">
        <div className="row align-items-center">
          {/* <div className="col-lg-12">
            <div className="contact-form">
              <div className="site-heading" data-aos="fade-up">
                <h3 className="sub-title">Get Quote</h3>
                <h2 className="section-title">{t("writeUs")}</h2>
              </div>
              <ContactForm />
            </div>
          </div> */}
          <div className="col-lg-5 col-sm-6">
            <div className="contact-page-left">
              {/* <h3>Contact info</h3> */}
              <div className="contact-info">
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h5>{t("address")}</h5>
                    <p>{t("addressText")}</p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h5>{t("phone")}</h5>
                    <p>(+374) 95 68 50 07</p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <h5>{t("email")}</h5>
                    <p>info@stroyproyekt.am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-6">
            <div className="contact-page-right">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12189.792673742995!2d44.493969104855815!3d40.19909268704176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd3fcbd4212b%3A0x3bbd25124fcb0e7f!2s12a%20Vagharsh%20Vagharshyan%20St%2C%20Yerevan%200012%2C%20Armenia!5e0!3m2!1sen!2s!4v1662907586269!5m2!1sen!2s"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
