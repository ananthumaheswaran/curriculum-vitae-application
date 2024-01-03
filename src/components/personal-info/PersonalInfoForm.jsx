import Button from "../Button";

const PersonalInfoForm = ({ personalInfo, setPersonalInfo }) => {
  const handleClearPersonalInfoData = () => {
    setPersonalInfo({
      name: "",
      headline: "",
      phone: "",
      email: "",
      address: "",
      aboutMe: "",
    });
  };
  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    console.log("Personal Info is submitted", personalInfo);
  };
  return (
    <div className="inputSection">
      <h2 className="sectionTitle">Personal Details</h2>
      <form
        onSubmit={handlePersonalInfoSubmit}
        className="personalInfoInputForm"
      >
        <label htmlFor="name" className="infoInputLabel">
          Full Name
        </label>
        <input
          className="infoInputField"
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={personalInfo.name}
          autoComplete="on"
          required
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, name: e.target.value })
          }
        />

        <label htmlFor="headline" className="infoInputLabel">
          Headline
        </label>
        <input
          className="infoInputField"
          id="headline"
          type="text"
          placeholder="Enter the Job role"
          value={personalInfo.headline}
          autoComplete="on"
          required
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, headline: e.target.value })
          }
        />

        <label htmlFor="tel" className="infoInputLabel">
          Phone
        </label>
        <input
          className="infoInputField"
          id="tel"
          type="tel"
          placeholder="Enter phone number"
          value={personalInfo.phone}
          autoComplete="on"
          required
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, phone: e.target.value })
          }
        />

        <label htmlFor="email" className="infoInputLabel">
          Email
        </label>
        <input
          id="email"
          className="infoInputField"
          type="email"
          placeholder="Enter email address"
          value={personalInfo.email}
          autoComplete="on"
          required
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
        />

        <label htmlFor="address" className="infoInputLabel">
          Address
        </label>
        <input
          id="address"
          className="infoInputField"
          type="text"
          placeholder="City, State/Country"
          value={personalInfo.address}
          autoComplete="on"
          required
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, address: e.target.value })
          }
        />
        <label htmlFor="aboutMe" className="infoInputLabel">
          About yourself
        </label>
        <textarea
          id="aboutMe"
          name="aboutMe"
          className="infoInputField-des"
          type="text"
          rows="5"
          placeholder="Describe yourself"
          value={personalInfo.aboutMe}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, aboutMe: e.target.value })
          }
        />

        <div className="btn-container">
          <Button
            typeOf={"button"}
            onClick={handleClearPersonalInfoData}
            classForStyling="btn-clear"
            buttonText="Clear"
          />

          <Button
            typeOf={"submit"}
            classForStyling="btn-save"
            buttonText="Save"
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
