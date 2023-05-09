import React, {useState} from 'react';
import {getSubscriptionMessage} from "../../services";
import './subscription.css';

const Subscription = () => {
  const [emailValue, setEmailValue] = useState('');
  const [successfulResponse, setSuccessfulResponse] = useState('');

  function sendEmail(event) {
    event.preventDefault();
    getSubscriptionMessage(emailValue)
      .then((response) => response.json())
      .then((data) => {
        setSuccessfulResponse(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (successfulResponse.message !== undefined) {
    return <div className="successful-response">{successfulResponse.message}!</div>;
  }

  return (
    <div className="subscription container">
      <div className="subscription-inner">
        <div className="subscription-title">
          <h3 className="title-text">SIGN UP FOR UPDATES</h3>
        </div>
        <div className="subscription-describe">
          <p className="describe-text">Sign up for exclusive early sale access and tailored new arrivals.</p>
        </div>
        <form className="subscription-form" onSubmit={(event) => sendEmail(event)}>
          <input
            autoComplete="on"
            required
            id="footer-subscription-form-email"
            className="subscription-input"
            placeholder="Your email address"
            type="email"
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          />
          <button type="submit" className="subscription-button">JOIN</button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;