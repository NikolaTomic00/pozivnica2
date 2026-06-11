function ProfilePictureSection() {
  return (
    <section className="profile-section" aria-label="Couple profile picture">
      <div className="profile-frame">
        <div className="profile-photo-wrap">
          <img
            className="profile-photo"
            src="/profilepic.png"
            alt="Nina and Milan"
          />
          <span className="profile-photo-fade" aria-hidden="true" />
        </div>

        <div className="profile-copy">
          <span className="ring-art" aria-hidden="true" />

          <div className="names-stack">
            <h1 className="couple-names">
              <span>Nina</span>
              <span className="couple-ampersand">i</span>
              <span>Milan</span>
            </h1>

            <div className="couple-names couple-names-shine" aria-hidden="true">
              <span>Nina</span>
              <span className="couple-ampersand">i</span>
              <span>Milan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePictureSection;
