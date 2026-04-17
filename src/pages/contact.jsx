
import { useState } from "react";
import { Link, Form } from "react-router";
import contactAction from "../components/ContactAction";

const CONTACT_NUMBER = import.meta.env.VITE_CONTACT_NUMBER;
const CONTACT_NUMBER_WITH_COUNTRY_CODE = import.meta.env.VITE_CONTACT_NUMBER_WITH_COUNTRY_CODE;

const ContactPage = () => {
    const [errors, setErrors] = useState({});
    const [inputValue, setInputValue] = useState({ name: '', email: '', subject: '', message: '' });
    const [actionData, setActionData] = useState(null);
    const submitContact = async (e) => {
        console.log("Submitting contact form...", e.currentTarget);
        e.preventDefault();
        const result = await contactAction({ formData: inputValue });
        setErrors(result.errors || {});
        setActionData(result);
    };


    return ( 
        <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                📨 Contact me 
            </h2>
            {actionData?.message && (
                <div className="mb-4 p-4 bg-green-600 text-white rounded-md text-center">
                    {actionData?.message}
                </div>
            )}

            {/* <Form method="post" className="space-y-6"> */}
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={inputValue.name}
                        onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={inputValue.email}
                        onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={inputValue.subject}
                        onChange={(e) => setInputValue({ ...inputValue, subject: e.target.value })}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={inputValue.message}
                        onChange={(e) => setInputValue({ ...inputValue, message: e.target.value })}
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                <div className="text-center mb-5">
                    <button
                        type="button"
                        onClick={submitContact}
                        className="inline-flex items-center px-4 py-2 border border-transparent 
                        text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 cursor-pointer
                        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                        focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                </div>

                <div className="text-center mb-5">
                    <Link to="/" className="text-sm text-gray-400 hover:text-gray-300">
                        ← Back to Home
                    </Link>
                    <Link to={`tel:${CONTACT_NUMBER}`} className="ml-4 text-sm text-gray-400 hover:text-gray-300">
                        ☎ Contact Info : {`${CONTACT_NUMBER_WITH_COUNTRY_CODE}`}
                    </Link>    
                </div>
                <div className="text-center mb-5 mt-4">
                    <Link aria-label="Chat on WhatsApp" to={`https://wa.me/${CONTACT_NUMBER}`} className="text-center inline-block text-sm text-gray-400 hover:text-gray-300">
                        <img alt="Chat on WhatsApp" src="/images/WhatsAppButtonGreenLarge.png" />
                    </Link>        
                </div>
            {/* </Form> */}

        </div>
     );
}
 
export default ContactPage;