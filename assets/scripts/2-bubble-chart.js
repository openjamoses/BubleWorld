"use strict";

/**
 * File used to draw the bubble chart.
 */


/**
 * Creates the bubble graph axis.
 *
 * @param g       The SVG group in which the bubble chart will be drawn.
 * @param xAxis   The X axis. 
 * @param yAxis   The Y axis.
 * @param height  The graphic's height.
 * @param width   The graphic's width.
 */
function createAxes(g, xAxis, yAxis, height, width) {
  // TODO: Draw the X and Y axes.
  // Horizontal Axis
  g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)

  // Vertical Axis 
    g.append("g")
    .attr("class", "y axis")
    .call(yAxis)

  // X Axis Label
    g.append("text")
        .attr("y", height * 0.99)
        .attr("x", width * 0.9)
        .style("text-anchor", "middle")
        .text("Espérance de vie (années)")

  // Y Axis Label
    g.append("text")
        .attr("transform", "rotate(-90)") // attention, ca change aussi les orientations 
        .attr("y", width * 0.02)
        .attr("x", - height * 0.1)
        .style("text-anchor", "middle")
        .text("Revenu (USD)")
}

/**
 * Renseigne la position et le rayon de chaque cercle.
 * 
 * @param circles Les cercles.
 * @param x       Scale for the X axis.
 * @param y       Scale for the Y axis.
 * @param r       Scale for the circles' radii.
 */
function placeCircles(circles, x, y, r) {
  return circles.attr("cx", d => x(d.lifeExpectancy))
   .attr("cy", d => y(d.income))
   .attr("r", d => r(d.population))
}


/**
 * Crée le graphique à bulles.
 *
 * @param g       The SVG group in which the bubble chart will be drawn.
 * @param data    Data to use.
 * @param x       Scale for the X axis.
 * @param y       Scale for the Y axis.
 * @param r       Scale for the circles' radii.
 * @param color   Scale for the circles' color.
 * @param tip     Tooltip to show when a circle is hovered.
 */
function createBubbleChart(g, data, x, y, r, color, tip) {
  // TODO: Draw the graph's circles by using the specified scales.
  //       Make sure you add the tooltip when a circle is hovered.
  placeCircles(g.selectAll("dot")
   .data(data)
   .enter()
   .append("circle")
   .attr("id", d => d.name)
   .attr("class", "circle"), x, y, r)
   .attr("fill", d => color(d.zone))
   .on('mouseover', tip.show)
   .on('mouseout', tip.hide)
}
