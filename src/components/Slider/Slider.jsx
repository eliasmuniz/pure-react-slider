import { useState } from "react";
import stylesSlider from "./Slider.module.css";

export default function Slider({ imagenes }) {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = imagenes?.length;

  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <div className={stylesSlider.container}>
      <button onClick={anteriorImagen}>◀</button>
      {imagenes.map((imagen, index) => {
        return (
          <div
            className={
              imagenActual === index
                ? `${stylesSlider.slide} ${stylesSlider.active}`
                : `${stylesSlider.slide}`
            }
          >
            {imagenActual === index && (
              <img key={index} src={imagen} alt="imagen" />
            )}
          </div>
        );
      })}
      <button onClick={siguienteImagen}>▶</button>
    </div>
  );
}
