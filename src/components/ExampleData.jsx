import Button from "./Button";
const ExampleData = ({
  personalInfo,
  setPersonalInfo,
  education,
  setEducation,
  experience,
  setExperience,
}) => {
  //  Function for add example data to the education form

  const handleLoadExampleData = () => {
    setPersonalInfo({
      ...personalInfo,
      name: "Albert Pattinson",
      headline: "Full Stack Developer",
      phone: "+1 (555) 123-4567",
      email: "albert.pattinson@example.com",
      address: "Cityville, Iowa",
      aboutMe:
        "I'm a dedicated web developer proficient in both front-end and back-end technologies. With a passion for innovation, I specialize in crafting user-friendly websites that elevate online experiences. My expertise lies in creating seamless and dynamic web solutions to meet evolving user needs, ensuring a compelling digital presence.",
    });
    setEducation([
      ...education,
      {
        school: "Fictional University",
        degree: "Bachelor of Science in Imaginary Studies",
        graduationYear: "2023",
        location: "Dream City, Fantasy Country",
      },
      {
        school: "Technical University",
        degree: "Master of Science in Quantum Computing",
        graduationYear: "2024",
        location: "Innovation City, Techland",
      },
    ]);

    setExperience([
      ...experience,
      {
        company: "Fictional Innovations",
        position: "Senior Software Developer",
        employmentType: "Full-time",
        location: "Dream City, Fantasy Country",
        locationType: "Remote",
        startDate: "2021-03-15 ",
        endDate: "2023-11-30",
        description:
          "In my role at Fictional Innovations, I served as a Senior Fantasy Developer, crafting imaginative solutions for mythical challenges. Based in Dream City, Fantasy Country, I seamlessly integrated magic into my code, contributing to groundbreaking projects. My expertise lies in transforming creative concepts into functional and enchanting technological realities.",
      },
      {
        company: "InnoTech Solutions",
        position: "Junior Software Developer",
        employmentType: "Full-time",
        location: "Innovation City, Techland",
        locationType: "On-site",
        startDate: " 2020-01-01",
        endDate: "  2022-12-31",
        description:
          "Pioneered quantum algorithms, advancing the forefront of computing capabilities. Collaborated with a multidimensional team to push the boundaries of technological innovation.",
      },
    ]);
  };

  // Function for clear example data from the education form

  const handleClearExampleData = () => {
    setPersonalInfo({
      name: "",
      headline: "",
      phone: "",
      email: "",
      address: "",
      aboutMe: "",
    });

    // Filter out only the example data in the education array
    const updatedEducation = education.filter((item) => {
      return (
        item.school !== "Fictional University" &&
        item.school !== "Technical University"
      );
    });

    // Filter out only the example data in the experience array
    const updatedExperience = experience.filter((item) => {
      return (
        item.company !== "Fictional Innovations" &&
        item.company !== "InnoTech Solutions"
      );
    });

    setEducation(updatedEducation);
    setExperience(updatedExperience);
  };

  return (
    <div className="example-data">
      <Button
        typeOf={"button"}
        onClick={handleLoadExampleData}
        classForStyling="btn-exampleData"
        buttonText="Demo Data"
      />
      <Button
        typeOf={"button"}
        onClick={handleClearExampleData}
        buttonText="Clear"
        classForStyling="btn-exampleData"
      />
    </div>
  );
};

export default ExampleData;
