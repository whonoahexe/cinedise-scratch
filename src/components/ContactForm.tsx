"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const form = e.currentTarget;
        const now = new Date();
        const time = now.toLocaleString();

        // Mapping based on contact-form.js
        const templateParams = {
            to_email: "cinedisestudio@gmail.com",
            subject: (form.elements.namedItem('Subject') as HTMLInputElement).value,
            option: (form.elements.namedItem('option') as HTMLSelectElement).value,
            name: (form.elements.namedItem('Name') as HTMLInputElement).value,
            time: time,
            message: (form.elements.namedItem('Message') as HTMLTextAreaElement).value,
            from_email: (form.elements.namedItem('Email') as HTMLInputElement).value,
            reply_to: (form.elements.namedItem('Email') as HTMLInputElement).value
        };

        emailjs.send('service_bui5z4s', 'template_1zfk70o', templateParams, 'OlOVU80KMUttQfRAk')
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                setIsSubmitting(false);
                form.reset();
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <form onSubmit={sendEmail} className="tt-form-minimal anim-fadeinup">
            <div className="tt-row">
                <div className="tt-col-md-6">
                    <div className="tt-form-group">
                        <label>Name <span className="required">*</span></label>
                        <input className="tt-form-control" type="text" name="Name" placeholder="" required />
                    </div>
                </div>
                <div className="tt-col-md-6">
                    <div className="tt-form-group">
                        <label>Email address <span className="required">*</span></label>
                        <input className="tt-form-control" type="email" name="Email" placeholder="" required />
                    </div>
                </div>
            </div>

            <div className="tt-form-group">
                <label>Subject <span className="required">*</span></label>
                <input className="tt-form-control" type="text" name="Subject" placeholder="" required />
            </div>

            <div className="tt-form-group">
                <label>Select an option <span className="required">*</span></label>
                <select className="tt-form-control" name="option" required defaultValue="">
                    <option value="" disabled>Please choose an option</option>
                    <option value="Say Hello">Say hello</option>
                    <option value="New Project">New project</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="tt-form-group">
                <label>Message <span className="required">*</span></label>
                <textarea className="tt-form-control" rows={6} name="Message" placeholder="" required></textarea>
            </div>

            <small className="tt-form-text"><em>Fields marked with an asterisk (*) are required!</em></small>

            <div className="tt-btn tt-btn-light-outline margin-top-40">
                <button type="submit" data-hover="Send Message" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>

            {submitStatus === 'success' && <p className="text-success margin-top-20">Thank you! Your message has been sent successfully.</p>}
            {submitStatus === 'error' && <p className="text-danger margin-top-20">Failed to send message. Please try again.</p>}
        </form>
    );
}
