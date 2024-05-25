import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="text-muted">
          <ul>
            Resources
            <li>Find A Store</li>
            <li>Become A Member</li>
            <li>Send Us Feedback</li>
          </ul>
          <ul>
            Help
            <li>Get Help</li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us</li>
          </ul>
          <ul>
          About Glasgow
            <li>About Glasgow</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>
      <div>
      <span className="text-muted">© 2024 Glasgow, Inc. All rights reserved </span>
      </div>
    </footer>
  </>
  
);
};

export default Footer