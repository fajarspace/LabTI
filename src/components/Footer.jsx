import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer py-3 fixed-bottom mt-4">
        <div className="container">
          <a
            style={{ textDecoration: "underline" }}
            target="_blank"
            href="https://fajarspace.gitbook.io/praktikum-api/"
          >
            API Documentation
          </a>
        </div>
        <div className="container">
          © 2023 &nbsp;{" "}
          <a target="_blank" href="https://lab.bangsa.web.id">
            Laboratorium UPB
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
