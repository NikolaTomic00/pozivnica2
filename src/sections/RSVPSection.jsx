function CheckIcon() {
  return (
    <svg className="rsvp-check-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function RSVPButton({ children, href }) {
  return (
    <a className="rsvp-button" href={href}>
      <svg
        className="rsvp-button-border"
        viewBox="0 0 220 58"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="rsvp-button-border-gradient"
            x1="0"
            x2="220"
            y1="0"
            y2="58"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b68d48" />
            <stop offset="0.5" stopColor="#7b6e6a" />
            <stop offset="1" stopColor="#e0ad4f" />
          </linearGradient>
        </defs>
        <path
          className="rsvp-button-border-path"
          d="M 29 1 A 28 28 0 0 0 1 29 A 28 28 0 0 0 29 57 L 191 57 A 28 28 0 0 0 219 29 A 28 28 0 0 0 191 1 Z"
          fill="none"
          stroke="url(#rsvp-button-border-gradient)"
          strokeDasharray="370 560"
          strokeDashoffset="370"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>

      <span className="rsvp-button-content">{children}</span>
    </a>
  );
}

function RSVPSection() {
  return (
    <section className="rsvp-section" aria-label="RSVP">
      <div className="rsvp-inner">
        <p className="rsvp-text">
          Molimo vas da potvrdite dolazak klikom na dugme ispod.
        </p>

        <span className="rsvp-ornament rsvp-ornament-top" aria-hidden="true" />

        <RSVPButton href="https://docs.google.com/forms/d/e/1FAIpQLSdmWj9fsw7zgAPd_51eBlPMMvcSGrxClSnLJPzPWzSSJNHqAQ/viewform?usp=dialog">
          <CheckIcon />
          Potvrdi dolazak
        </RSVPButton>

        <span className="rsvp-ornament rsvp-ornament-bottom" aria-hidden="true" />
      </div>
    </section>
  );
}

export default RSVPSection;
