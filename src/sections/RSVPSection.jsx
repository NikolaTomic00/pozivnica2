function RSVPButton({ children, href }) {
  return (
    <a className="rsvp-button" href={href} target="_blank" rel="noreferrer">
      <span className="rsvp-button-content">{children}</span>
    </a>
  );
}

function RSVPSection() {
  return (
    <section className="rsvp-section" aria-label="RSVP">
      <div className="rsvp-inner">
        <h2 className="rsvp-title">Radujemo se vašem dolasku</h2>

        <p className="rsvp-text">
          Molimo vas da svoj dolazak potvrdite najkasnije do 15. septembra 2026.
          godine.
        </p>

        <span className="rsvp-ornament rsvp-ornament-top" aria-hidden="true" />

        <RSVPButton href="https://docs.google.com/forms/d/e/1FAIpQLSdmWj9fsw7zgAPd_51eBlPMMvcSGrxClSnLJPzPWzSSJNHqAQ/viewform?usp=dialog">
          Potvrdi dolazak
        </RSVPButton>

        <span className="rsvp-ornament rsvp-ornament-bottom" aria-hidden="true" />
      </div>
    </section>
  );
}

export default RSVPSection;
