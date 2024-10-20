Description

Features

Composite Function: Merges a foreground image onto a background image with adjustable opacity and position. It computes pixel values based on the alpha channel to blend the foreground with the background, preserving the original background's color where the foreground is transparent.

Apply Filter Function: Applies different filters to the image on the canvas. Available filters include:

Grayscale: Converts the image to grayscale using a weighted sum of the RGB channels.
Brightness: Increases the brightness of the image by a fixed amount.
Invert: Inverts the colors of the image.
Contrast: Adjusts the contrast of the image to enhance or reduce the differences between light and dark areas.
Red Tint: Adds a red tint to the image by increasing the red channel's value.
Usage


To use these functions:

Create an HTML file with a <canvas> element and a dropdown for filter selection.
Call the composite function to overlay images as needed.
Invoke the applyFilter function when a filter is selected from the dropdown to modify the canvas image.
Installation
Clone this repository and include the script in your HTML file to get started. You may need to integrate the HTML elements for the canvas and filter selection as indicated in the comments.
