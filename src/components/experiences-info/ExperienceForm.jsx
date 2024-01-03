import Collapse from "../Collapse";
import { isFormValid } from "../FormValidation";
import Button from "../Button";
const ExperienceForm = ({ experience, setExperience, setIsHeadingVisible }) => {
  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        company: "",
        position: "",
        employmentType: "",
        location: "",
        locationType: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
    setIsHeadingVisible(true);
  };
  const handleDeleteExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
    setIsHeadingVisible(false);
  };

  const handleClearExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      company: "",
      position: "",
      employmentType: "",
      location: "",
      locationType: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setExperience(updatedExperience);
  };

  const handleExperienceInputChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    if (isFormValid(experience))
      console.log("Experince details is submitted", experience);
    else alert("Fill all the fields in the form before submitting");
  };

  return (
    <div className="inputSection">
      <h2 className="sectionTitle">Experience</h2>

      <form onSubmit={handleExperienceSubmit} className="infoInputForm">
        {experience.map((experience, index) => (
          <Collapse key={index} title={experience.position}>
            <div key={index}>
              <label htmlFor={`job${index}`} className="infoInputLabel">
                Title
              </label>
              <input
                id={`job${index}`}
                name={`job${index}`}
                className="infoInputField"
                type="text"
                placeholder="Enter Job title"
                value={experience.position}
                onChange={(e) =>
                  handleExperienceInputChange(index, "position", e.target.value)
                }
              />
              <label htmlFor={`company${index}`} className="infoInputLabel">
                Company
              </label>
              <input
                id={`company${index}`}
                name={`company${index}`}
                className="infoInputField"
                type="text"
                placeholder="Enter company name"
                value={experience.company}
                onChange={(e) =>
                  handleExperienceInputChange(index, "company", e.target.value)
                }
              />
              <label
                htmlFor={`employmentType${index}`}
                className="infoInputLabel"
              >
                Employment type
              </label>
              <select
                id={`employmentType${index}`}
                name={`employmentType${index}`}
                className="infoInputField"
                value={experience.employmentType}
                onChange={(e) =>
                  handleExperienceInputChange(
                    index,
                    "employmentType",
                    e.target.value
                  )
                }
              >
                <option value="">Please select</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Freelance">Freelance</option>
                <option value="Internship">Internship</option>
                <option value="Trainee">Trainee</option>
              </select>
              <label htmlFor={`location${index}`} className="infoInputLabel">
                Location
              </label>
              <input
                id={`location${index}`}
                name={`location${index}`}
                className="infoInputField"
                type="text"
                placeholder="City, Country"
                value={experience.location}
                onChange={(e) =>
                  handleExperienceInputChange(index, "location", e.target.value)
                }
              />
              <label
                htmlFor={`locationType${index}`}
                className="infoInputLabel"
              >
                Location type
              </label>
              <select
                id={`locationType${index}`}
                name={`locationType${index}`}
                className="infoInputField"
                value={experience.locationType}
                onChange={(e) =>
                  handleExperienceInputChange(
                    index,
                    "locationType",
                    e.target.value
                  )
                }
              >
                <option value="">Please select</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
              <label htmlFor={`startDate${index}`} className="infoInputLabel">
                Start date
              </label>
              <input
                id={`startDate${index}`}
                name={`startDate${index}`}
                className="infoInputField"
                type="date"
                placeholder="dd/mm/yyyy"
                value={experience.startDate}
                onChange={(e) =>
                  handleExperienceInputChange(
                    index,
                    "startDate",
                    e.target.value
                  )
                }
              />
              <label htmlFor={`endDate${index}`} className="infoInputLabel">
                End date
              </label>
              <input
                id={`endDate${index}`}
                name={`endDate${index}`}
                className="infoInputField"
                type="date"
                placeholder="dd/mm/yyyy"
                value={experience.endDate}
                onChange={(e) =>
                  handleExperienceInputChange(index, "endDate", e.target.value)
                }
              />
              <label htmlFor={`description${index}`} className="infoInputLabel">
                Description
              </label>
              <textarea
                id={`description${index}`}
                name={`description${index}`}
                className="infoInputField-des"
                type="text"
                rows="5"
                placeholder="Enter job description"
                value={experience.description}
                onChange={(e) =>
                  handleExperienceInputChange(
                    index,
                    "description",
                    e.target.value
                  )
                }
              />
              <div className="inner-btn-container">
                <Button
                  typeOf="button"
                  onClick={() => handleDeleteExperience(index)}
                  classForStyling="btn-delete"
                  buttonText="Delete"
                />

                {/* <button
                type="button"
                onClick={() => handleDeleteExperience(index)}
                className="btn-delete"
              >
                Delete
              </button> */}

                <Button
                  typeOf="button"
                  onClick={() => handleClearExperience(index)}
                  classForStyling="btn-clear"
                  buttonText="Clear"
                />

                {/* <button
                type="button"
                onClick={() => handleClearExperience(index)}
                className="btn-clear"
              >
                clear
              </button> */}
              </div>
              {/* <button className="btn-save" type="submit">
                Save
              </button> */}
            </div>
          </Collapse>
        ))}

        <div className="outer-btn-container">
          <Button
            typeOf="button"
            onClick={handleAddExperience}
            classForStyling="btn-add"
            buttonText="Add"
          />

          <Button
            typeOf="submit"
            classForStyling="btn-save"
            buttonText="Save"
          />
        </div>
        {/* <button type="button" onClick={handleAddExperience} className="btn">
          Add Experience
        </button> */}
      </form>
    </div>
  );
};

export default ExperienceForm;
