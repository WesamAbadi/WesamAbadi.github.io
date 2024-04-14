import React, { useEffect } from "react";

function CV() {
  const fileUrl = process.env.PUBLIC_URL + "/CV.pdf";

  useEffect(() => {
    window.open(fileUrl);
    // eslint-disable-next-line
  }, []);

  return <div>CV Downloaded</div>;
}

export default CV;
