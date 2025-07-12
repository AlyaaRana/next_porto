import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000, 
          style: {
            background: "#1f2937",      
            color: "#ffffff",           
            border: "1px solid #facc15",
            borderRadius: "12px",       
            fontWeight: 500,            
          },
        }}
      />
    </>
  );
}
