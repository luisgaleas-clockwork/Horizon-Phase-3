import React from "react"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="info_list">
        <div className="info_items">
        <i class="fas fa-location-arrow"></i>
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
    </footer>
  )
}
export default Footer