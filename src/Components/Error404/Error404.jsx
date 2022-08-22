import React from "react";

const Error404 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        width={400}
        src="https://c.tenor.com/xEwsCvE8WtcAAAAC/bunny.gif"
        alt="error404"
      />
      <h1>ОШИБКА 404 Страниа не найдена</h1>
    </div>
  );
};

export default Error404;
