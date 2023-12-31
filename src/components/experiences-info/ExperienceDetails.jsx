const ExperienceDetails = ({ experience, isVisible }) => {
  const hasExperience = experience.length > 0;
  return (
    <div className="experienceInfoSection">
      {(isVisible || hasExperience) && (
        <h2 className="experienceInfo-title">EXPERIENCE</h2>
      )}
      {experience.map((experience, index) => (
        <div key={index}>
          <p className="experienceInfo-content-title">{experience.position}</p>
          <p className="experienceInfo-content-sub">
            {experience.company}

            <strong> · </strong>

            {experience.employmentType}
          </p>
          <p className="experienceInfo-content">
            {experience.startDate} · {experience.endDate}
          </p>
          <p className="experienceInfo-content">
            {experience.location}

            <strong> · </strong>

            {experience.locationType}
          </p>

          <p className="experienceInfo-content-des">{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceDetails;
