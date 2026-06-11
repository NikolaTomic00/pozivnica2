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
            <img
              className="profile-name-overlay"
              src={assetPath("ringwithname.png")}
              alt=""
              aria-hidden="true"
            />
            <div className="profile-overlay-copy">
              <p>Nina i Nemanja</p>
              <span>26.09.2026.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePictureSection;
