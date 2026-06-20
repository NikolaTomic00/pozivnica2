import { assetPath } from "../lib/assetPath";

function ProfilePictureSection() {
  return (
    <section className="profile-section" aria-label="Couple profile picture">
      <div className="profile-frame">
        <div className="profile-photo-wrap">
          <div className="profile-photo-inner">
            <img
              className="profile-photo"
              src={assetPath("profilepic.png")}
              alt="Nina and Nemanja"
            />
            <div className="profile-overlay-copy">
              <p>Nina i Nemanja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePictureSection;
