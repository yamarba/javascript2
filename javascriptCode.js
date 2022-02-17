<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Console demo</title>
    <script src="script.js" defer></script>
  </head>
  <body></body>
</html>


/**
 * Create a travel bag object, with properties and some HTML to display the properties
 */

// Single line comment

const updateTravelBag = (update) => { // creating an arrow function
    let main = document.querySelector("main");
    main.innerHTML = markup(travelBag);
    console.info(update);
};

const travelBag = {
    name: "Travel Duffle Bag",
    volume: 52,
    color: "bourbon",
    dimensions: {
        length: 22,
        height: 22,
        width: 12
    },
    box: {
        name: "gift box",
        color: "red",
        shape: "square",
        size: "small",
        content: "watch"
    },
    zipperOpen: false,
    toggleZipper: function(zipperStatus) {
        this.zipperOpen = zipperStatus;
    },
    newDimensions: function(dimensionsLength, dimensionsHeight, dimensionsWidth){
        this.dimensions.length = dimensionsLength;
        this.dimensions.height = dimensionsHeight;
        this.dimensions.width = dimensionsWidth;
    },
}

const markup = (travelBag) => {
    return `
    <di


https://code.visualstudio.com/download

https://nodejs.org/en/download/

