import React from "react";
import "../style/Contact.css"

export default function Contact() {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [acceptedTerms, setAcceptedTerms] = React.useState(false);

    const handleSubmit = (event) => {
        console.log(`
        Email: ${email}
        Name: ${name}
        Accepted Terms: ${acceptedTerms}
      `);

        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign up for the Newsletter: </h1>
            <label>
                Full Name:
          <input
                    name="name"
                    type="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />
            </label>

            
            <label>
                Email:
          <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
            </label>

            <label>
                <input
                    name="acceptedTerms"
                    type="checkbox"
                    onChange={e => setAcceptedTerms(e.target.value)}
                    required />
          I accept the terms of service
        </label>

            <button className="con-btn">Submit</button>
        </form>
    );
}
