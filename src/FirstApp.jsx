import React from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
//prop-types para definir tipo

const newMessage = {
  message: "Hola mundo",
  title: "Gustavo",
};

const getResult = (a, b) => {
  return a + b;
};

export const FirstApp = ({ title, subTitle, name }) => {
  //console.log(props);
  //   if (!title) {
  //     throw new Error("El title no existe");
  //   }

  return (
    //<Fragment> <-- fragmento
    <>
      <h1 data-testid="test-title"> {title} </h1>
      {/* <h1>{getResult(3,4)}</h1> 
       <code>{JSON.stringify(newMessage)}</code>  */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "Hola, Soy Goku",
  subTitle: "Soy un subtitulo",
  name: "Gustavo Ortiz!!",
};
