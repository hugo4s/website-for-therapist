import React, { useEffect } from 'react';
import './ContactComponent.css';

const ContactComponent = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.6333, lng: -8.7333 }, // Gafanha da Encarnação coordinates
        zoom: 14,
      });

      new window.google.maps.Marker({
        position: { lat: 40.6333, lng: -8.7333 }, // Gafanha da Encarnação coordinates
        map,
        title: 'Gafanha da Encarnação',
      });
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      window.initMap = initMap;
    }
  }, []);

  return (
    <div className="contact-container">
      <div id="map" className="map"></div>
      <div className="contact-info">
        <h2>TELEFONE</h2>
        <a href='918789654'>+351 918789654</a> {/* Example phone number */}
        <h2>EMAIL</h2>
        <p><a href="mailto:info@example.com">info@example.com</a></p> {/* Example email */}
        <h2>ENDEREÇO</h2>
        <p>Rua Aleatória, 123<br />Gafanha da Encarnação, Portugal</p> {/* Example address */}
      </div>
    </div>
  );
};

export default ContactComponent;
