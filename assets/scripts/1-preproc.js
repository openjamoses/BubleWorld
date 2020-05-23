"use strict";

/**
 * File allowing to preprocess data in the CSV files.
 */


/**
 * Initializes data from the CSV files by transforming strings that represent
 * numbers to the Javascript type "number".
 *
 * @param data    Data that comes from a CSV file
 */
function initializeData(data) {
  // TODO: Convert the properties "income", "lifeExpectancy" and "population" to the "number" type for each entry.

  data.forEach(row => {
    row.income = parseFloat(row.income)
    row.lifeExpectancy = parseFloat(row.lifeExpectancy)
    row.population = parseInt(row.population, 10)
  });
}

/**
 * Set the domain scale for the X axis of the bubble chart.
 *
 * @param x     X scale to use.
 */
function domainX(x) {
  // TODO: Set the domain for the variable "x" by specifying the minimum and maximum values: 35 and 90.
  x.domain([35,90])
}

/**
 * Set the domain scale for the Y axis of the bubble chart.
 *
 * @param y     Y scale to use.
 */
function domainY(y) {
  // TODO: Set the domain for the variable "y" by specifying the minimum and maximum values: 0 USD and 140000 USD.
  y.domain([0,140000])
}

/**
 * Set the color scale domain for the colors. Each value of the scale is used to distinguish each world region.
 *
 * @param color   Color scale.
 * @param data    Data that comes from a CSV file
 */
function domainColor(color, data) {
  // TODO: Precise the scale domain for the color. Make sure that each world region has a distinct value and no color is reused.
  color.domain(Array.from(new Set(data.map(val => val.zone))) )
}

/**
 * Set the domain scale for the circles' radiuses that are used to represent the countries' population.
 *
 * @param r       Scale of the circles radiuses.
 * @param data    Data that comes from a CSV file
 */
function domainRadius(r, data) {
  // TODO: Set the domain scale of the variable "r" by specifying the value extremas of the population (minimum and maximum).
  r.domain([d3.min(data.map(row => row.population)), d3.max(data.map(row => row.population))])
}
