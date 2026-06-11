function LocationSection() {
  return (
    <section className="location-section" aria-label="Lokacija svečane proslave">
      <div className="location-inner">
        <div className="location-map-frame">
          <iframe
            className="location-map"
            title="Mapa - Svečana Sala Kristal, Pećinci"
            src="https://www.google.com/maps?q=Sve%C4%8Dana%20Sala%20Kristal%2C%20Ora%C4%8Dko%20polje%20bb%2C%20Pe%C4%87inci&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
