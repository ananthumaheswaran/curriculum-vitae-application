import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <p className="footer-para">
        Join thousands of users who trust WeCreate for building impressive CVs
        that make a lasting impression.
      </p>
      <div className="footer-list">
        <div className="footer-list-item-section        ">
          <h2 className="footer-list-item-title">About Us</h2>
          <ul className="footer-list-items">
            <li className="footer-listItem">About</li>
            <li className="footer-listItem">Team</li>
            <li className="footer-listItem">Blog</li>
          </ul>
        </div>
        <div className="footer-list-item-section        ">
          <h2 className="footer-list-item-title">Support</h2>
          <ul className="footer-list-items">
            <li className="footer-listItem">Contact Us</li>
            <li className="footer-listItem">Support</li>
            <li className="footer-listItem">FAQ</li>
          </ul>
        </div>
        <div className="footer-list-item-section        ">
          <h2 className="footer-list-item-title">Legal</h2>
          <ul className="footer-list-items">
            <li className="footer-listItem">Privacy</li>
            <li className="footer-listItem">Terms</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">
        © {new Date().getFullYear()} WeCreate. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
