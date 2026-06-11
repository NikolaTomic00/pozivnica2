import { MapPin } from "lucide-react";

const churchMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Crkva%20Prenosa%20mo%C5%A1tiju%20Svetog%20oca%20Nikolaja%20Pe%C4%87inci";
const kristalMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Sve%C4%8Dana%20Sala%20Kristal%20Ora%C4%8Dko%20polje%20bb%20Pe%C4%87inci";

function TimelineIcon({ className }) {
  return <span className={`timeline-icon ${className}`} aria-hidden="true" />;
}

function TimelineEvent({ iconClass, title, address, time, mapUrl }) {
  return (
    <article className="timeline-event">
      <TimelineIcon className={iconClass} />

      <h2>{title}</h2>
      <p className="timeline-address">{address}</p>
      <p className="timeline-time">{time}</p>

      <a className="timeline-map-button" href={mapUrl} target="_blank" rel="noreferrer">
        <MapPin aria-hidden="true" size={17} strokeWidth={2.2} />
        Pogledaj na mapi
      </a>
    </article>
  );
}

function TimelineSection() {
  return (
    <section className="timeline-section" aria-label="Raspored događaja">
      <div className="timeline-inner">
        <TimelineEvent
          iconClass="timeline-icon-rings"
          title="Crkveno venčanje"
          address={
            <>
              Crkva Prenosa moštiju
              <br />
              Svetog oca Nikolaja, Pećinci
            </>
          }
          time="13:00h"
          mapUrl={churchMapUrl}
        />

        <TimelineEvent
          iconClass="timeline-icon-toast"
          title="Svečana proslava"
          address={
            <>
              Svečana Sala „Kristal”
              <br />
              Oračko polje bb, Pećinci
            </>
          }
          time="16:30h"
          mapUrl={kristalMapUrl}
        />

        <TimelineEvent
          iconClass="timeline-icon-couple"
          title="Građansko venčanje"
          address={
            <>
              Svečana Sala „Kristal”
              <br />
              Oračko polje bb, Pećinci
            </>
          }
          time="17:30h"
          mapUrl={kristalMapUrl}
        />
      </div>
    </section>
  );
}

export default TimelineSection;
