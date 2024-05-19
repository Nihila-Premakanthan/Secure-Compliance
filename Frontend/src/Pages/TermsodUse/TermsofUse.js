import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../auth/Footer";

const Termsofsue = () => {
  return (
    <>
    <Navbar/>
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
            Terms
          </p>
          <p
            style={{
              fontSize: "2.4rem",
              lineHeight: "1.6",
              textAlign: "flex-end",
            }}
          >
            By accessing the website of Sector Guard, you agree to be bound by
            these Terms of Use, all applicable laws and regulations, and agree
            that you are responsible for compliance with any applicable local
            laws. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site. The materials
            contained on this website are protected by applicable copyright and
            trademark law.
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
            Use License
          </p>
          <p
            style={{
              fontSize: "2.4rem",
              lineHeight: "1.6",
              textAlign: "flex-end",
            }}
          >
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Sector Guard’s website for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license, you
            may not: Modify or copy the materials; Use the materials for any
            commercial purpose, or for any public display (commercial or
            non-commercial); Attempt to decompile or reverse engineer any
            software contained on Sector Guard’s website; Remove any copyright
            or other proprietary notations from the materials; or Transfer the
            materials to another person or "mirror" the materials on any other
            server. This license shall automatically terminate if you violate
            any of these restrictions and may be terminated by Sector Guard at
            any time. Upon terminating your viewing of these materials or upon
            the termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
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
            Disclaimer{" "}
          </p>

          <p
            style={{
              fontSize: "2.4rem",
              lineHeight: "1.6",
              textAlign: "flex-end",
            }}
          >
            The materials on Sector Guard’s website are provided on an 'as is'
            basis. Sector Guard makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights. Further, Sector
            Guard does not warrant or make any representations concerning the
            accuracy, likely results, or reliability of the use of the materials
            on its website or otherwise relating to such materials or on any
            sites linked to this site.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Termsofsue;
