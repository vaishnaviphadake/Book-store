import React from "react";

function Footer() {
  const footerStyle = { left: 0, bottom: 0 };

  var showDate = new Date();

  var currentDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear() +
    " " +
    showDate.getHours() +
    ":" +
    (showDate.getMinutes() + 0);
  return (
    // <div className="mb-0 mr-0">
    //   <p className="">{currentDate}</p>
    // </div>
    <div>
      <footer className="text-right text-lg-start bg-light text-muted fixed-bottom">
        <div className="text-right  p-3 text-reset fw-bold">
          © 2021 Vaishnavi: {currentDate}
          {/* <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a> */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
