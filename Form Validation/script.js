function validateForm() {
    const name = document.getElementById("name").value;
    const regno = document.getElementById("regno").value;
    const year = document.getElementById("year").value;
	const sem = document.getElementById("sem").value;
	const acyear = document.getElementById("acyear").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
	const scode = document.getElementById("scode").value;
	const sname = document.getElementById("sname").value;
	const credit = document.getElementById("credit").value;	
    const subject = document.getElementById("subject").value;
   
    const nameError = document.getElementById("name-error");
    const regnoError = document.getElementById("regno-error");
    const yearError = document.getElementById("year-error");
	const semError = document.getElementById("sem-error");
	const acyearError = document.getElementById("acyear-error");
    const ageError = document.getElementById("age-error");
    const genderError = document.getElementById("gender-error");
	const scodeError = document.getElementById("scode-error");
	const snameError = document.getElementById("sname-error");
	const creditError = document.getElementById("credit-error");
    const subjectError = document.getElementById("subject-error");
  

    nameError.textContent = "";
    regnoError.textContent = "";
    yearError.textContent = "";
	semError.textContent = "";
	acyearError.textContent = "";
    ageError.textContent = "";
    genderError.textContent = "";
	scodeError.textContent = "";
	snameError.textContent = "";
	creditError.textContent = "";
    subjectError.textContent = "";
  

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent ="Please enter your name properly.";
        isValid = false;
    }
	
    if (regno === "") {
        regnoError.textContent ="Please enter your register number.";
        isValid = false;
    }

    if (year === "" ) {
        yearError.textContent ="Please select your year.";
        isValid = false;
    }
	if (sem === "") {
        semError.textContent ="Please select your Semester.";
        isValid = false;
    }
    if (acyear === "") {
        acyearError.textContent ="Please select your Academic year.";
        isValid = false;
    }       
	if (age=== "" || age.length <2) {
        ageError.textContent ="Please enter your age.";
        isValid = false;
    }
    if (!gender) {
            genderError.textContent ="Please Select  your gender.";
        isValid = false;
    }
    if (scode === "") {
        scodeError.textContent ="Please enter your subject code.";
        isValid = false;
    }
	if (sname === "") {
        snameError.textContent ="Please enter your subject name.";
        isValid = false;
    }
	if (credit === "") {
        creditError.textContent ="Please enter your Suject credit.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent ="Please select your course.";
        isValid = false;
    }
    return isValid;
}