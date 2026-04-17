const contactAction = async ({ formData}) => {
    console.log("Processing contact form action...", formData);
    //const formData = await request.formData();
    const name = formData.name;
    const email = formData.email;
    const subject = formData.subject;
    const message = formData.message;

    const errors = {};
    if (!name) errors.name = "Name is required.";
    if (!email) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email format.";
    if (!subject) errors.subject = "Subject is required.";
    if (!message) errors.message = "Message is required.";

    if (Object.keys(errors).length > 0) {
        console.error("Contact Form Errors:", errors);
        return { errors };
    }

    const data = { name, email, subject, message };
    // Here you would typically handle the form submission, e.g., send an email or save to a database.
    console.log("Contact Form Submitted:", data);
    return { message: "Your message has been sent successfully!" };
}

export default contactAction;