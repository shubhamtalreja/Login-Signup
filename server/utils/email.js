const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options) => {
  const msg = {
    to: options.to,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email successfully sent to ${options.to}`);
  } catch (error) {
    console.error('Error sending email:', error);

    if (error.response) {
      console.error(error.response.body);
    }
    
    throw new Error('Email could not be sent.');
  }
};

module.exports = sendEmail;