// Override any existing form handlers
$(document).ready(function() {
    // Remove any existing form handlers
    $("#tt-contact-form").off('submit');
    
    // Add our EmailJS handler
    $("#tt-contact-form").on('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Get current time
        const now = new Date();
        const time = now.toLocaleString();
        
        // Get form data
        const formData = {
            to_email: "cinedisestudio@gmail.com", // Your business email (where you want to receive messages)
            subject: this.Subject.value,
            option: this.option.value,
            name: this.Name.value,
            time: time,
            message: this.Message.value,
            from_email: this.Email.value, // The sender's email (will be shown in the email you receive)
            reply_to: this.Email.value    // Allow you to reply directly to the sender
        };

        console.log('Sending email with data:', formData); // Debug log

        // Send email using EmailJS
        emailjs.send('service_bui5z4s', 'template_1zfk70o', formData)
            .then(function(response) {
                console.log('Email sent successfully:', response); // Debug log
                alert('Thank you! Your message has been sent successfully.');
                $("#tt-contact-form")[0].reset();
            }, function(error) {
                console.error('Failed to send message:', error); // Debug log
                alert('Sorry, there was an error sending your message. Please try again later.');
            });

        return false;
    });
}); 