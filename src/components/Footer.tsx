import React from "react";

import "../styles/footer.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="#">About Developer</a>
        <span>/</span>
        <a href="#">Contact</a>
      </div>
      <div className="footer-copyright">
        <p>Cosmix © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
