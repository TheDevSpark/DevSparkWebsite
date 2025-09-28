import { Fragment, useState } from "react";
import emailjs from "emailjs-com";

const SideBar = () => {
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
      // Use environment variables
      const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateID =
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "template_sidebar_appointment"; // You can create a specific template for sidebar appointments
      const userID = process.env.NEXT_PUBLIC_USER_ID;

      // Validate environment variables
      if (!serviceID || !templateID || !userID) {
        throw new Error("Email configuration is missing");
      }

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formProps.name || formProps.text,
          from_email: formProps.email,
          message: formProps.message,
          to_name: "The DevSpark Team",
          appointment_type: "Sidebar Appointment",
          date: new Date().toLocaleString(),
          source: "Website Sidebar Form",
        },
        userID
      );

      setSubmitStatus({
        success: true,
        message:
          "Appointment request sent successfully! We'll contact you soon.",
      });

      // Reset form
      e.target.reset();

      // Close sidebar after successful submission (optional)
      setTimeout(() => {
        document.querySelector("body").classList.remove("side-content-visible");
      }, 2000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send appointment request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSidebar = () => {
    document.querySelector("body").classList.remove("side-content-visible");
  };

  return (
    <Fragment>
      <div className="form-back-drop" onClick={closeSidebar}></div>
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={closeSidebar}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>

          {/* Status Message */}
          {submitStatus.message && (
            <div
              className={`alert ${
                submitStatus.success ? "alert-success" : "alert-danger"
              } mb-3`}
              style={{
                padding: "10px 15px",
                borderRadius: "5px",
                fontSize: "14px",
                margin: "0 15px 15px",
              }}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Appointment Form */}
          <div className="appointment-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="theme-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit now"}
                </button>
              </div>
            </form>
          </div>

          {/* Social Icons */}
          <div className="social-style-one">
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
      </section>
    </Fragment>
  );
};

export default SideBar;
