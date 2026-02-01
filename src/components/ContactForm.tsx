"use client";

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    // Auto-dismiss success message after 5 seconds
    useEffect(() => {
        if (submitStatus === 'success') {
            const timer = setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

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
                        <input 
                            className="tt-form-control" 
                            type="text" 
                            name="Name" 
                            placeholder="" 
                            required 
                            disabled={isSubmitting}
                        />
                    </div>
                </div>
                <div className="tt-col-md-6">
                    <div className="tt-form-group">
                        <label>Email address <span className="required">*</span></label>
                        <input 
                            className="tt-form-control" 
                            type="email" 
                            name="Email" 
                            placeholder="" 
                            required 
                            disabled={isSubmitting}
                        />
                    </div>
                </div>
            </div>

            <div className="tt-form-group">
                <label>Subject <span className="required">*</span></label>
                <input 
                    className="tt-form-control" 
                    type="text" 
                    name="Subject" 
                    placeholder="" 
                    required 
                    disabled={isSubmitting}
                />
            </div>

            <div className="tt-form-group">
                <label>Select an option <span className="required">*</span></label>
                <select 
                    className="tt-form-control" 
                    name="option" 
                    required 
                    defaultValue=""
                    disabled={isSubmitting}
                >
                    <option value="" disabled>Please choose an option</option>
                    <option value="Say Hello">Say hello</option>
                    <option value="New Project">New project</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="tt-form-group">
                <label>Message <span className="required">*</span></label>
                <textarea 
                    className="tt-form-control" 
                    rows={6} 
                    name="Message" 
                    placeholder="" 
                    required
                    disabled={isSubmitting}
                ></textarea>
            </div>

            <small className="tt-form-text"><em>Fields marked with an asterisk (*) are required!</em></small>

            <div className="tt-btn tt-btn-light-outline margin-top-40">
                <button 
                    type="submit" 
                    data-hover={isSubmitting ? "Sending..." : "Send Message"} 
                    disabled={isSubmitting}
                    className={`relative transition-all duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    <span className={`inline-flex items-center gap-2 ${isSubmitting ? 'opacity-0' : ''}`}>
                        Send Message
                    </span>
                    {isSubmitting && (
                        <span className="absolute inset-0 flex items-center justify-center gap-2">
                            <svg 
                                className="animate-spin h-5 w-5" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                            >
                                <circle 
                                    className="opacity-25" 
                                    cx="12" 
                                    cy="12" 
                                    r="10" 
                                    stroke="currentColor" 
                                    strokeWidth="4"
                                ></circle>
                                <path 
                                    className="opacity-75" 
                                    fill="currentColor" 
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            <span>Sending...</span>
                        </span>
                    )}
                </button>
            </div>

            {/* Status Messages */}
            <div className={`mt-12 transition-all duration-300 ease-out ${submitStatus ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {submitStatus === 'success' && (
                    <div className="flex items-start gap-3 p-4">
                        <div>
                            <p className="text-emerald-400 font-medium">Message sent successfully!</p>
                            <p className="text-emerald-400/70 text-sm mt-0.5">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                        </div>
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="flex items-start gap-3 p-4">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p className="text-red-400 font-medium">Failed to send message</p>
                            <p className="text-red-400/70 text-sm mt-0.5">Something went wrong. Please try again or contact us directly via email.</p>
                            <button 
                                type="button" 
                                onClick={() => setSubmitStatus(null)} 
                                className="text-red-400 text-sm mt-2 underline hover:no-underline"
                            >
                                Dismiss
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </form>
    );
}
