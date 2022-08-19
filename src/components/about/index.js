import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

import bg from "../../img/about-bg.png";
import img1 from "../../img/about-1.png";
import img2 from "../../img/about-2.jpg";

import "./style.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-area" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left" data-aos="fade-right">
              <div className="site-heading">
                {/* <h3 className="sub-title">{t("about")}</h3> */}
                <h2 className="section-title">{t("about")}</h2>
              </div>
              <p>
                Մեր ընկերությունը սկսել է իր գործունեությունը 2015 թվականին և
                անցած տարիների ընթացքում հաջողությամբ ավարտին է հասցրել մի շարք
                նախագծային աշխատանքներ Ռուսաստանի Դաշնությունում։
              </p>
              <p>
                Մեր նպատակն է ապահովել մեր հաճախորդներին հնարամիտ, օպտիմալ և
                ժամանակակից նախագծային լուծումներով, ուստի «Ստրոյպրոյեկտ» ՓԲԸ-ի
                մասնագետներն անընդհատ ուսումնասիրում և վերլուծում են
                շինարարական, ճարտարապետական և դիզայներական նորագույն միջազգային
                միտումները, ընտրում են լավագույնը և իրագործում։ Վստահեցնում ենք
                Ձեզ, որ մեր թիմը լինելով նպատակասլաց և ճշտապահ` առաջադրված
                խնդիրները լուծում է ժամանակին և հաճախորդի պահանջներին
                համապատասխան:
              </p>
              <p>
                Մեր ընկերության նպատակն է յուրացնել նոր դիրքեր ոչ միայն
                Ռուսաստանի Դաշնության, այլև Եվրասիական Տնտեսական Միության անդամ
                բոլոր երկրների շուկաներում։
              </p>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-counter">
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={14} duration={5} />
                  </span>
                </h2>
                <p>
                  Years of <br />
                  experience
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={12} duration={4} />
                  </span>
                  +
                </h2>
                <p>
                  Projects <br />
                  Completed
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={180} duration={5} />
                  </span>
                  +
                </h2>
                <p>
                  Awards <br />
                  Winning
                </p>
              </div>
            </div>
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={img2} alt="img" />
              <img className="about_img_2" src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
