export const isFormValid = (formData) => {
  return formData.every((data) =>
    Object.values(data).every((value) => value.trim() !== "")
  );
};
