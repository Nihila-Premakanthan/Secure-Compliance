import React from "react";
import Footer from "../../pages/auth/Footer";
import Navbar from "../../Components/Navbar";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          fontFamily: "Sans",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: "20px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "3.4rem",
                lineHeight: "1.6",
                textAlign: "flex-end",
                fontWeight: "bold",
              }}
            >
              Introduction
            </p>
            <p
              style={{
                fontSize: "2.4rem",
                lineHeight: "1.6",
                textAlign: "flex-end",
              }}
            >
              This Privacy Policy outlines how Sector Guard ("we", "us", or
              "our") collects, uses, and shares information about you through
              our digital platforms, including our website. By using our
              Services, you agree to the processing of your information as
              described in this policy. If you have any questions, you can
              contact us at privacy@sectorguard.com.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginBottom: "20px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "3.4rem",
                lineHeight: "1.6",
                textAlign: "flex-end",
                fontWeight: "bold",
              }}
            >
              Information We Collect
            </p>
            <p
              style={{
                fontSize: "2.4rem",
                lineHeight: "1.6",
                textAlign: "flex-end",
              }}
            >
              Personal Information: We collect personal information you provide,
              such as your name, email address, and job title when you register,
              contact us, or interact with our services. Automatic Data
              Collection: We automatically collect certain information when you
              visit our website, such as IP address, browser type, and usage
              details. How We Use Your Information To Provide Services: We use
              your information to operate, maintain, and provide the features
              and functionality of our services. Communication: We use your
              information to communicate with you, including sending service or
              support messages. Improvements: We analyze usage and trends to
              improve our website and services. Sharing Your Information We may
              share information with third-party service providers to help us
              provide our services, such as hosting and maintenance, error
              monitoring, debugging, performance monitoring, billing, customer
              relationship, database storage, and management. We do not share
              your information with third parties for their marketing purposes
              without your consent. Data Security We implement security measures
              designed to protect your data from unauthorized access,
              alteration, or destruction. Your Rights You may have the right to
              access, correct, or delete your personal information. You can
              typically exercise these rights by logging in to your account
              settings or contacting us directly. Changes to This Policy We may
              update this policy from time to time. If we make significant
              changes, we will notify you through the website interface or via
              email. Contact Us If you have questions or concerns about this
              policy, please contact us at privacy@sectorguard.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
