import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        const emailformData = {
            from_name: 'Syed Zulkharnain',
            to_name: formData.name,
            email: formData.email,
            message: formData.message
          };
          
        e.preventDefault();
    
        emailjs.send('service_asu11oo', 'template_trlhq5v', emailformData, 'SvtgseaIT5lIcBWU3')
          .then((response) => {
            console.log('Message sent successfully', response);
            alert('Your message has been sent!');
          })
          .catch((error) => {
            console.error('Error sending message', error);
            alert('Something went wrong. Please try again later.');
          });
    
        // Optionally, reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
    
      return (
        <div className="contact-form-section" id='contact'>
          <section id="contact-form-section" className="contact-form-section">
            <div className="form-container">
              <h1 className="section-title">Get In Touch</h1>
              <p className="section__text__p2">
                Have a question or want to work together? Fill out the form below, and I’ll get back to you as soon as possible.
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Enter your name"
                    className="form-input"
                    onChange={handleInputChange}
                    required
                  />
                </div>
    
                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    className="form-input"
                    onChange={handleInputChange}
                    required
                  />
                </div>
    
                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder="Write your message here"
                    className="form-textarea"
                    rows="6"
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
    
                {/* Submit Button */}
                <button type="submit" className="btn btn-color-2">Send Message</button>
              </form>
            </div>
          </section>
        </div>
      );
}

export default Contact;