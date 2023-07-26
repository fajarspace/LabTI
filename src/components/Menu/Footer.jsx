import React from "react";

const Footer = () => {
  return (
    <>
      <footer style={{}} className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <nav className="d-flex"></nav>
            </div>
            <div className="col-md-6">
              <p className="copyright d-flex justify-content-end">
                © 2023 &nbsp;{" "}
                <a target="_blank" href="https://lab.bangsa.web.id">
                  Laboratorium UPB
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
