import MailchimpSubscribe from "react-mailchimp-subscribe";

function MailchimpForm()
{
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
}

export default MailchimpForm;
