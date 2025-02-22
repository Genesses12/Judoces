import "./CardItens.css";
import PropTypes from "prop-types";
import { CCard, CCardBody, CCardImage, CButton } from "@coreui/react";

const CardItens = ({ img, texto, link }) => {
  return (
    <CCard
      style={{
        width: "266.25px",
        height: "378px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          height: "300px",
          width: "100%",
        }}
      >
        <CCardImage
          orientation="top"
          src={img}
          style={{
            height: "100%",
            objectFit: "cover",
            width: "100%",
            transition: "transform 0.3s ease-in-out",
          }}
          className="hover-zoom"
        />
      </div>
      <CCardBody
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <h4 style={{ flexGrow: 1, textAlign: "center", margin: "10px 0" }}>
          {texto}
        </h4>
        <CButton color="primary" href={link} target="_blank">
          Saiba mais
        </CButton>
      </CCardBody>
    </CCard>
  );
};

// Adicionando a validação das props
CardItens.propTypes = {
  img: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default CardItens;
