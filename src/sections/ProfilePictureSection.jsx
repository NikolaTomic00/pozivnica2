import { useState } from "react";
import { assetPath } from "../lib/assetPath";

function ProfilePictureSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="profile-section" aria-label="Couple profile picture">
      <div className={`profile-frame${isLoaded ? " is-loaded" : ""}`}>
        <div className="profile-photo-wrap">
          <div className="profile-photo-inner">
            <img
              className="profile-photo"
              src={assetPath("profilepic.png")}
              alt="Nina and Nemanja"
              onLoad={() => setIsLoaded(true)}
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
