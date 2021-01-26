import mapboxgl from "mapbox-gl";

const buildMarker = (type, coordinates) => {
  let newElement = document.createElement("div"); // Create a new, detached DIV
  newElement.style.width = "32px";
  newElement.style.height = "39px";

  if (type === "activity") {
    newElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  if (type === "hotel") {
    newElement.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  }
  if (type === "restaurant") {
    newElement.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  }
  return new mapboxgl.Marker(newElement).setLngLat(coordinates);
};

export default buildMarker;
