import React, { useEffect } from "react";

function CV() {
  const fileUrl = process.env.PUBLIC_URL + "/CV.pdf";

  useEffect(() => {
    window.open(fileUrl);
  }, []);

  return <div>CV Downloaded</div>;
}

export default CV;
