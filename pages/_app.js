import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/globals.css";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <content>
        <Component {...pageProps} />
      </content>
    </AuthProvider>
  );
}

export default MyApp;
