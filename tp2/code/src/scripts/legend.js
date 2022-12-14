/**
 * Draws a legend in the area at the bottom of the screen, corresponding to the bars' colors
 *
 * @param {string[]} data The data to be used to draw the legend elements
 * @param {*} color The color scale used throughout the visualisation
 */
export function draw (data, color) {
  // TODO : Generate the legend in the div with class "legend". Each SVG rectangle
  // should have a width and height set to 15.
  // Tip : Append one div per legend element using class "legend-element".
  var legendSquareSize = 15
  var padding = 5

  data.forEach(function (player) {
    const element = d3.select('.legend')
      .append('div')
      .attr('class', 'legend-element')

    element.append('svg')
      .attr('width', legendSquareSize + padding)
      .attr('height', legendSquareSize + padding)
      .append('rect')
      .style('fill', color(player))
      .attr('width', legendSquareSize)
      .attr('height', legendSquareSize)

    element.append('text')
      .text(player)
  })
}
