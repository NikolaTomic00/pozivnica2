import CountdownSection from "./sections/CountdownSection";
import GallerySection from "./sections/GallerySection";
import InvitationDetailsSection from "./sections/InvitationDetailsSection";
import LocationSection from "./sections/LocationSection";
import ProfilePictureSection from "./sections/ProfilePictureSection";
import RSVPSection from "./sections/RSVPSection";
import FooterSection from "./sections/FooterSection";
import TimelineSection from "./sections/TimelineSection";

export default function App() {
  return (
    <main className="invitation" aria-label="Wedding invitation">
      <ProfilePictureSection />
      <InvitationDetailsSection />
      <TimelineSection />
      <CountdownSection />
      <GallerySection />
      <RSVPSection />
      <LocationSection />
      <FooterSection />
    </main>
  );
}
