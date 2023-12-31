import { useState } from "react";
import PersonalInfoForm from "./personal-info/PersonalInfoForm";
import PersonalDetails from "./personal-info/PersonalDetails";
import EducationForm from "./education-info/EducationForm";
import EducationDetails from "./education-info/EducationDetails";
import ExperienceForm from "./experiences-info/ExperienceForm";
import ExperienceDetails from "./experiences-info/ExperienceDetails";
import ExampleData from "./ExampleData";
const Core = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    headline: "",
    phone: "",
    email: "",
    address: "",
    aboutMe: "",
  });
  const [education, setEducation] = useState([]);
  const [
    isEducationHeadingInCVLayoutVisible,
    setIsEducationHeadingInCVLayoutVisible,
  ] = useState(false);
  const [experience, setExperience] = useState([]);
  const [
    isExperienceHeadingInCVLayoutVisible,
    setIsExperienceHeadingInCVLayoutVisible,
  ] = useState(false);
  return (
    <div>
      <div className="core-container">
        <div className="form-layout">
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <EducationForm
            education={education}
            setEducation={setEducation}
            isHeadingVisible={isEducationHeadingInCVLayoutVisible}
            setIsHeadingVisible={setIsEducationHeadingInCVLayoutVisible}
          />
          <ExperienceForm
            experience={experience}
            setExperience={setExperience}
            isHeadingVisible={isExperienceHeadingInCVLayoutVisible}
            setIsHeadingVisible={setIsExperienceHeadingInCVLayoutVisible}
          />
        </div>
        <div className="cv-layout">
          <div className="cv-section">
            <PersonalDetails personalInfo={personalInfo} />
            <EducationDetails
              education={education}
              isVisible={isEducationHeadingInCVLayoutVisible}
            />
            <ExperienceDetails
              experience={experience}
              isVisible={isExperienceHeadingInCVLayoutVisible}
            />
          </div>
        </div>
      </div>
      <div className="example-section">
        <ExampleData
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
        />
      </div>
    </div>
  );
};

export default Core;
