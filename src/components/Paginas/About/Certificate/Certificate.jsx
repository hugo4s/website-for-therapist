import React from 'react';
import './Certificate.css';
import certificateImage from './../../../../assets/certificate.jpg'; // Replace with the actual path to your certificate image

const Certificate = () => {
  return (
    <div className="certificate-wrapper">
      <div className="certificate-image">
        <img src={certificateImage} alt="Certificate" />
      </div>
      <div className="certificate-text">
        <h2>Certificate of Achievement</h2>
        <p>This certificate is awarded to</p>
        <h3>John Doe</h3>
        <p>for successfully completing the</p>
        <h4>React Development Course</h4>
        <p>on</p>
        <h4>July 21, 2024</h4>
        <p>
          This certification demonstrates a commitment to excellence in the field of
          React development and signifies a deep understanding of modern web development practices.
        </p>
      </div>
    </div>
  );
};

export default Certificate;
