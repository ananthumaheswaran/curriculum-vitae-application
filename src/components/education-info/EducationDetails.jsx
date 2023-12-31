const EducationDetails = ({ education, isVisible }) => {
  const hasEducation = education.length > 0;
  return (
    <div className="educationInfoSection">
      {(isVisible || hasEducation) && (
        <h2 className="educationInfo-title">EDUCATION</h2>
      )}
      <div className="educationInfo-list">
        {education.map((education, index) => (
          <div key={index}>
            <div className="educationSectionLine1">
              <div className="educationInfo-listItem-title">
                {education.school}
              </div>
              <div className="educationInfo-listItem">{education.location}</div>
            </div>
            <div className="educationSectionLine2">
              <div className="educationInfo-listItem-sub">
                {education.degree}
              </div>
              <div className="educationInfo-listItem">
                {education.graduationYear}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationDetails;
