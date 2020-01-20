/* global chart */
/* eslint-disable no-unused-vars */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const containerElements = document.getElementsByClassName('container');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - (containerElements.length === 0 ? 0 : containerElements[0].clientHeight);

const defaultDays = 250; // 250 trading days = 1 year
const defaultPrice = 50;
const defaultMinPrice = 15;
const defaultMaxPrice = 200;
const defaultBaseChange = 0.01;
const defaultDaysPerSecond = 3;

const trends = [[-9, 3], [-7, 4], [-7, 4], [-5, 5], [-5, 5], [-5, 5], [-4, 7], [-4, 7], [-3, 9]];
const trendPeriods = [5, 10, 10, 20, 20, 20, 60, 60, 120]; // 20 trading days = 1 month
const volatilities = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 5, 5, 8];
const volatilityPeriods = [5, 10, 10, 20, 20, 20, 60, 60, 120]; // 20 trading days = 1 month

const color = 'rgba(54, 162, 235, ';
const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, color + '0.8)');
gradient.addColorStop(1, color + '0.0)');

let days;
let price;
let minPrice;
let maxPrice;
let baseChange;
let daysPerSecond;

let currentDay;
let currentPrice;
let trend;
let trendPeriod;
let volatility;
let volatilityPeriod;
let interval;

const updateTrend = () => {
  trend = trends[Math.floor(Math.random() * trends.length)];
  trendPeriod = trendPeriods[Math.floor(Math.random() * trendPeriods.length)];
};

const updateVolatility = () => {
  volatility = volatilities[Math.floor(Math.random() * volatilities.length)];
  volatilityPeriod = volatilityPeriods[Math.floor(Math.random() * volatilityPeriods.length)];
};

const resizeHandler = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - (containerElements.length === 0 ? 0 : containerElements[0].clientHeight);
  chart.resize();
  chart.update();
};
