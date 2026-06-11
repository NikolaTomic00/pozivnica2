function ProfilePictureSection() {
  return (
    <section className="profile-section" aria-label="Couple profile picture">
      <div className="profile-frame">
        <div className="profile-photo-wrap">
          <div className="profile-photo-inner">
            <img
              className="profile-photo"
              src="/profilepic.png"
              alt="Nina and Milan"
            />
          </div>
        </div>

        <div className="profile-copy">
          <span className="ring-art" aria-hidden="true" />

          <h1 className="couple-names">
            <span>Nina</span>
            <span className="couple-ampersand">i</span>
            <span>Nemanja</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default ProfilePictureSection;
