import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      // Replace these with your actual EmailJS credentials
      const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const userID = process.env.NEXT_PUBLIC_USER_ID;

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formProps.name,
          from_email: formProps.email,
          phone_number: formProps.phone_number,
          message: formProps.message,
          to_name: "The DevSpark Team",
        },
        userID
      );

      setSubmitStatus({
        success: true,
        message: "Message sent successfully! We will get back to you soon.",
      });

      // Reset form
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout footer={2} dark>
      {/* Page Banner Start */}
      <PageBanner pageName={"Contact"} />
      {/* Page Banner End */}
      {/* Contact Form Area start */}
      <section className="contact-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">Contact Us</span>
                      <h2>Ready to Work Your Next Projects</h2>
                    </div>
                  </div>
                </div>
                <div className="row gap-80 pb-30">
                  <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5>Pakistan</h5>
                      <p>
                        Bartle House 9 Oxford Court Manchester England M2 3WQ
                      </p>
                      <a
                        className="mailto"
                        href="mailto:contact@thedevspark.com"
                      >
                        contact@thedevspark.com
                      </a>
                      <br />
                      <a className="callto" href="callto:+92303-2051930">
                        <i className="fas fa-phone" /> +92303-2051930
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5>England</h5>
                      <p>
                        Bartle House 9 Oxford Court Manchester England M2 3WQ
                      </p>
                      <a
                        className="mailto"
                        href="mailto:contact@thedevspark.com"
                      >
                        contact@thedevspark.com
                      </a>
                      <br />
                    </div>
                  </div>
                </div>
                <h4>Follow Us</h4>
                <div className="social-style-two pt-15">
                  <a href="https://www.facebook.com/share/1WQcTihJ69/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://x.com/TheDevSpark">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.instagram.com/dev_spark_agency?igsh=MTg2eHF6M25saXY0bw==">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/company/the-devspark/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">Get Free Quote</span>
                  <h3>Drop Us a Message</h3>
                </div>

                {/* Status Message */}
                {submitStatus.message && (
                  <div
                    className={`alert ${
                      submitStatus.success ? "alert-success" : "alert-danger"
                    } mb-4`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form
                  id="contactForm"
                  className="contactForm"
                  onSubmit={handleSubmit}
                  name="contactForm"
                >
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i className="far fa-phone" />
                        </label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          placeholder="Phone"
                          required
                          data-error="Please enter your Number"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope" />
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                          data-error="Please enter your Email Address"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="far fa-pencil" />
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two w-100"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message us"}{" "}
                          <i className="far fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container-fluid">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.5471242411695!2d-2.2465254242916046!3d53.476553364974265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1ea183342fd%3A0x2f9daf0df37fb41e!2sBartle%20House%2C%209%20Oxford%20Ct%2C%20Manchester%20M2%203WQ%2C%20UK!5e0!3m2!1sen!2s!4v1758796483736!5m2!1sen!2s&t=p"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Location Map Area End */}
      {/* footer area start */}
    </Layout>
  );
};
export default Contact;
