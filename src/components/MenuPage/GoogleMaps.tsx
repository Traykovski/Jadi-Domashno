/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default function GoogleMaps() {
  return (
    <>
      <iframe
        width="300"
        height="200"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Skopje,North%20Macedonia&t=&z=9&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </>
  );
}
