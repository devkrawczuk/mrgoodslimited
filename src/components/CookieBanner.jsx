import CookieConsent from "react-cookie-consent";

function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="mrGoodsLimitedCookies"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      declineButtonStyle={{ color: "#fff", fontSize: "13px" }}
      expires={150}
    >
      We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
      <a href="/cookies-policy" style={{ color: "#FFD700" }}>Learn more</a>
    </CookieConsent>
  );
}

export default CookieBanner;