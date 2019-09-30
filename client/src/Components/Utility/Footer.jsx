import React from "react"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="info_list">
        <div className="info_items">
        <i class="fas fa-street-view"></i>
          <p>123 Sesame St
            Charlote, NC 28215</p>
        </div>
        <div className="info_items">
        <i class="fas fa-id-badge"></i>
          <p>(704)-232-8701</p>
        </div>
        <div className="info_items">
        <i class="fas fa-envelope-open-text"></i>
          <p>Luis.galeasjr@gmail.com</p>
        </div>
      </div>
      <div className="bio">
        <h3>About Horizon</h3>
        <p>[insert info here] [insert info here] [insert info here] [insert info here] v [insert info here]</p>
        <div className="social">
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-github-square"></i>
        </div>
      </div>
    </footer>
  )
}
export default Footer