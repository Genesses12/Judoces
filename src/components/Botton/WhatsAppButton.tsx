import React from "react";
import "./WhatsAppButton.css";
import Whats from "../../assets/whassBotton.png";
const WhatsAppButton = () => {
  const whatsappNumber = "5511999999999"; // Coloque o número no formato internacional (sem +)

  return (
    <div className="container">
      <img src={Whats} alt="WhatsApp" style={styles.icon} />
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        Faça seu pedido
      </a>
    </div>
  );
};

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#25D366", // Cor do WhatsApp
    color: "white",
    padding: "20px 20px",
    borderRadius: "30px",
    textDecoration: "none",
  },
  icon: {
    width: "24px",
    height: "24px",
    marginRight: "10px",
  },
};

export default WhatsAppButton;
