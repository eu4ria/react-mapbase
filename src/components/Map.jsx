import React, { useEffect, useRef } from "react";
import L from "leaflet";

const style = {
  width: "100vw",
  height: "100vh"
};

export const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [54.113, -3.2315],
      zoom: 15,
      layers: [
        L.tileLayer(
          "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}",
          {
            attribution:
              'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: "abcd",
            minZoom: 0,
            maxZoom: 16,
            ext: "png"
          }
        )
      ]
    });
  }, []);

  return <div id="map" style={style} />;
};
