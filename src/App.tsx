/* eslint-disable @typescript-eslint/no-explicit-any */
import Bg from "./assets/bg.jpg";
import { FaInstagram, FaWhatsapp, FaLocationArrow } from "react-icons/fa";

const Button = (text: string, link: string, icon: any) => {
  return (
    <a
      href={link}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: "1rem 2rem",
        marginBottom: "1rem",
        borderRadius: "2rem",
        color: "black",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon}
      {text}
    </a>
  );
};

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-end pb-8" // Adicionado justify-end e pb-8 para alinhar no fundo
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100vw",
          alignItems: "center",
          justifyContent: "flex-end",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {Button(
          "Whatsapp gerald o estúdio",
          "https://api.whatsapp.com/send?phone=559981522048&text=Ol%C3%A1%20vim%20pelo%20Instagram%20,%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.%20%20Com%20Alini%20Soeth.",
          <FaWhatsapp
            size={28}
            style={{
              marginRight: "0.5rem",
            }}
          />
        )}
        {Button(
          "Whatsapp Acessoria - Alini SoeTh",
          "https://api.whatsapp.com/send?phone=559981522048&text=Ol%C3%A1%20tudo%20bem,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20micropigmenta%C3%A7%C3%A3o%20|%20Tattoo%20fine%20line%20|%20Remo%C3%A7%C3%A3o%20de%20Tattoo.%20Com%20Alini%20Soeth",
          <FaWhatsapp
            size={28}
            style={{
              marginRight: "0.5rem",
            }}
          />
        )}
        {Button(
          "studioalinisoeth",
          "https://www.instagram.com/studioalinisoeth",
          <FaInstagram
            size={28}
            style={{
              marginRight: "0.5rem",
            }}
          />
        )}
        {Button(
          "alinisoeth",
          "https://www.instagram.com/alinisoeth/?igshid=YTQwZjQ0NmI0OA%3D%3D",
          <FaInstagram
            size={28}
            style={{
              marginRight: "0.5rem",
            }}
          />
        )}
        {Button(
          "alinisoethtattoo",
          "https://www.instagram.com/alinisoethtattoo/",
          <FaInstagram
            size={28}
            style={{
              marginRight: "0.5rem",
            }}
          />
        )}
        {Button(
          "Localização",
          "https://maps.app.goo.gl/QrEMu6cfz84GDM3U7",
          <FaLocationArrow
            size={28}
            style={{
              marginRight: "0.5rem",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
