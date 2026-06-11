import InvitationDetailsSection from "./sections/InvitationDetailsSection";
import ProfilePictureSection from "./sections/ProfilePictureSection";

export default function App() {
  return (
    <main className="invitation" aria-label="Wedding invitation">
      <ProfilePictureSection />
      <InvitationDetailsSection />
    </main>
  );
}
