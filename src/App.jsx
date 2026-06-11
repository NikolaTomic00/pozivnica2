import InvitationDetailsSection from "./sections/InvitationDetailsSection";
import ProfilePictureSection from "./sections/ProfilePictureSection";
import TimelineSection from "./sections/TimelineSection";

export default function App() {
  return (
    <main className="invitation" aria-label="Wedding invitation">
      <ProfilePictureSection />
      <InvitationDetailsSection />
      <TimelineSection />
    </main>
  );
}
