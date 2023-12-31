import Collapse from "../Collapse";
import { isFormValid } from "../FormValidation";
import Button from "../Button";
const EducationForm = ({ education, setEducation, setIsHeadingVisible }) => {
  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        school: "",
        degree: "",
        graduationYear: "",
        location: "",
      },
    ]);
    setIsHeadingVisible(true);
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
    setIsHeadingVisible(false);
  };

  const handleEducationInputChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleClearEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      school: "",
      degree: "",
      graduationYear: "",
      location: "",
    };
    setEducation(updatedEducation);
  };
  const handleEducationSubmit = (e) => {
    e.preventDefault();

    if (isFormValid(education)) {
      console.log("Education details submitted", education);
    } else {
      alert("Fill all the fields in the form before submitting");
    }
  };
  return (
    <div className="inputSection">
      <h2 className="sectionTitle">Education</h2>
      <form onSubmit={handleEducationSubmit} className="infoInputForm">
        {education.map((education, index) => (
          <Collapse key={index} title={education.school}>
            <div key={index}>
              <label htmlFor={`school${index}`} className="infoInputLabel">
                School
              </label>
              <input
                id={`school${index}`}
                name={`school${index}`}
                className="infoInputField"
                type="text"
                placeholder="School/ University"
                value={education.school}
                onChange={(e) =>
                  handleEducationInputChange(index, "school", e.target.value)
                }
              />
              <label htmlFor={`degree${index}`} className="infoInputLabel">
                Degree
              </label>
              <input
                id={`degree${index}`}
                name={`degree${index}`}
                className="infoInputField"
                type="text"
                placeholder="Degree"
                value={education.degree}
                onChange={(e) =>
                  handleEducationInputChange(index, "degree", e.target.value)
                }
              />
              <label
                htmlFor={`graduationYear${index}`}
                className="infoInputLabel"
              >
                Graduation
              </label>
              <input
                id={`graduationYear${index}`}
                name={`graduationYear${index}`}
                className="infoInputField"
                type="text"
                placeholder="Year of Graduation"
                value={education.graduationYear}
                onChange={(e) =>
                  handleEducationInputChange(
                    index,
                    "graduationYear",
                    e.target.value
                  )
                }
              />
              <label htmlFor={`location${index}`} className="infoInputLabel">
                Location
              </label>
              <input
                id={`location${index}`}
                name={`location${index}`}
                className="infoInputField"
                type="text"
                placeholder="City, Country"
                value={education.location}
                onChange={(e) =>
                  handleEducationInputChange(index, "location", e.target.value)
                }
              />
              <div className="inner-btn-container">
                <Button
                  typeOf={"button"}
                  onClick={() => handleDeleteEducation(index)}
                  classForStyling="btn-delete"
                  buttonText="Delete"
                />

                <Button
                  typeOf={"button"}
                  onClick={() => handleClearEducation(index)}
                  classForStyling="btn-clear"
                  buttonText="Clear"
                />
              </div>
            </div>
          </Collapse>
        ))}
        <div className="outer-btn-container">
          <Button
            typeOf={"button"}
            onClick={handleAddEducation}
            classForStyling="btn-add"
            buttonText="Add"
          />
          <Button
            typeOf={"submit"}
            classForStyling="btn-save"
            buttonText="Save"
          />
        </div>
        {/* <button type="button" onClick={handleAddEducation} className="btn">
          Add Education
        </button> */}
      </form>
    </div>
  );
};

export default EducationForm;
