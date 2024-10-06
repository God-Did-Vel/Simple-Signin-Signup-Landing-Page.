import React from "react";
import * as Component from "./Component";

function App() {
  const [signIn, toggle] = React.useState(true);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    console.log("Selected Language:", selectedLanguage);
  };
  return (
    <Component.Container>
      {/* Sign Up Container */}
      <Component.SignUpContainer signinIn={signIn}>
        <Component.Form>
          <Component.Title>Create Account</Component.Title>
          <Component.Input type="text" placeholder="Name" />
          <Component.Input type="email" placeholder="Email" />
          <Component.Input type="password" placeholder="Password" />
          <Component.Button>Sign Up</Component.Button>
        </Component.Form>
      </Component.SignUpContainer>

      {/* Sign In Container */}
      <Component.SignInContainer signinIn={signIn}>
        <Component.Form>
          <Component.Title>Sign In</Component.Title>
          <Component.Input type="email" placeholder="Email" />
          <Component.Input type="password" placeholder="Password" />
          <Component.Anchor href="#">Forgot your password?</Component.Anchor>
          <Component.Button>Sign In</Component.Button>
        </Component.Form>
      </Component.SignInContainer>

      {/* Overlay Container */}
      <Component.OverlayContainer signinIn={signIn}>
        <Component.Overlay signinIn={signIn}>
          {signIn ? (
            // Right Panel (Sign In view)
            <Component.RightOverlayPanel signinIn={signIn}>
              <Component.Title>Hello, Friend!</Component.Title>
              <Component.Paragraph>
                <b>
                  Enter your personal details and start your journey with us
                </b>
                !
              </Component.Paragraph>

              <Component.SelectContainer>
                {/* <label htmlFor="language-select">Select Language:</label> */}
                <select id="language-select" onChange={handleLanguageChange}>
                  <option value="en">
                    <b>Select Languages</b>
                  </option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="aa">Afar</option>
                  <option value="af">Abkhazian</option>
                  <option value="ar">Arabic</option>
                  <option value="bg">Bulgarian</option>
                  <option value="bh">Bihari</option>
                  <option value="bo">Tibetan</option>
                  <option value="cs">Czech</option>
                  <option value="da">Danish</option>
                  <option value="dz">Bhutani</option>
                  <option value="el">Greek</option>
                  <option value="eo">Esperanto</option>
                  <option value="et">Estonian</option>
                  <option value="fa">Persian</option>
                  <option value="fi">Finnish</option>
                  <option value="fj">Fiji</option>
                  <option value="ga">Irish</option>
                  <option value="gd">Scots Gaelic</option>
                  <option value="gl">Galician</option>
                  <option value="hi">Hindi</option>
                  <option value="he">Hebrew</option>
                  <option value="hr">Croatian</option>
                  <option value="hu">Hungarian</option>
                  <option value="hy">Armenian</option>
                  <option value="id">Indonesian</option>
                  <option value="is">Icelandic</option>
                  <option value="it+">Italian</option>
                  <option value="ja">Japanese</option>
                  <option value="jw">Javanese</option>
                  <option value="ka">Georgian</option>
                  <option value="kl">Greenlandic</option>
                  <option value="km">Cambodian</option>
                  <option value="ko">Korean</option>
                  <option value="ku">Kurdish</option>
                  <option value="la">Latin</option>
                  <option value="lo">Laothian</option>
                  <option value="lt">Lithuanian</option>
                  <option value="mk">Macedonian</option>
                  <option value="mn">Mongolian</option>
                  <option value="mo">Moldavian</option>
                  <option value="ms">Malay</option>
                  <option value="ne">Nepali</option>
                  <option value="nl">Dutch</option>
                  <option value="no">Norwegian</option>
                  <option value="pl">Polish</option>
                  <option value="pt">Portuguese</option>
                  <option value="ru">Russian</option>
                  <option value="ro">Romanian</option>
                  <option value="sk">Slovak</option>
                  <option value="sl">Slovenian</option>
                  <option value="sr">Serbian</option>
                  <option value="sq">Albanian</option>
                  <option value="sv">Swedish</option>
                  <option value="th">Thai</option>
                  <option value="tr">Turkish</option>
                  <option value="uk">Ukrainian</option>
                  <option value="uz">Uzbek</option>
                  <option value="vi">Vietnamese</option>
                  <option value="zh">Chinese</option>
                </select>
              </Component.SelectContainer>
              <Component.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Component.GhostButton>
            </Component.RightOverlayPanel>
          ) : (
            // Left Panel (Sign Up view)
            <Component.LeftOverlayPanel signinIn={signIn}>
              <Component.Title>Welcome Back!</Component.Title>
              <Component.Paragraph>
                <b>
                  To keep connected with us,<br></br> please login with your
                  personal info.
                </b>
              </Component.Paragraph>
              <Component.GhostButton
                style={{ marginTop: "20px" }}
                onClick={() => toggle(false)}
              >
                Sign In
              </Component.GhostButton>
            </Component.LeftOverlayPanel>
          )}
        </Component.Overlay>
      </Component.OverlayContainer>
    </Component.Container>
  );
}

export default App;
