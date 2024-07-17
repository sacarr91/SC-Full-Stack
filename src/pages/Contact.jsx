import { useState } from 'react';
import { validateEmail } from '../utils/helpers'
import '../utils/style.css'

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container text-center">
            <h3>
                <br></br>
                Hello {name}!
            </h3>
            <form className="form" onSubmit={handleFormSubmit}>
                <div>
                    <div>
                        <label htmlFor='namearea'>
                            Your Name:
                        </label>
                    </div>
                    <input
                        id='namearea'
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        required={true}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor='emailarea'>
                            Your Email:
                        </label>
                    </div>
                    <input
                        id='emailarea'
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        required={true}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor='messagearea'>
                            Your Message:
                        </label>
                    </div>
                    <div>
                        <textarea
                            id='messagearea'
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type='message'
                            required={true}
                        />
                    </div>
                </div>
                <button type="submit">Send Message</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
};


export default Contact;