# Libraries

[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=berkerol_libraries&metric=alert_status)](https://sonarcloud.io/dashboard?id=berkerol_libraries)
[![CI](https://github.com/berkerol/libraries/actions/workflows/lint.yml/badge.svg?branch=master)](https://github.com/berkerol/libraries/actions/workflows/lint.yml)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/berkerol/libraries/issues)
[![semistandard](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)
[![ECMAScript](https://img.shields.io/badge/ECMAScript-latest-brightgreen.svg)](https://www.ecma-international.org/ecma-262)
[![license](https://img.shields.io/badge/license-GNU%20GPL%20v3.0-blue.svg)](https://github.com/berkerol/libraries/blob/master/LICENSE)

Libraries for common functionalities of my other repositories.

## Usage

```html
<script src="https://berkerol.github.io/libraries/canvas.js"></script>
<script src="https://berkerol.github.io/libraries/form.js"></script>
<script src="https://berkerol.github.io/libraries/sky.js"></script>
<script src="https://berkerol.github.io/libraries/market.js"></script>
<script src="https://berkerol.github.io/libraries/particle.js"></script>
<script src="https://berkerol.github.io/libraries/colors.js"></script>
```

## Overview

* HTML5 Canvas: [canvas.js](canvas.js)
  * Initialization
  * Pause and Resize Listeners
  * Game Loop
  * Drawing and Painting
  * Collision Detection
  * Generating Random Numbers, Colors and Character Codes
* Bootstrap Form: [form.js](form.js)
  * Input Labels; Text, Number and Checkbox Inputs
  * Buttons, Button Groups and Modal Toggle Buttons
  * Dropdowns, Modals and Alerts
  * Enter Key and Reset Handlers
* Sky: [sky.js](sky.js)
  * Properties
  * Method for Painting
  * Resize Handler
* Market: [market.js](market.js)
  * Properties
  * Methods for Updating Properties
  * Resize Handler
* Particle: [particle.js](particle.js)
  * Properties
  * Methods for Painting, Creating and Processing
* Colors: [colors.js](colors.js)
  * Dropdown for Color Selection

## Continous Integration

It is setup using GitHub Actions in `.github/workflows/lint.yml`

## Contribution

Feel free to [contribute](https://github.com/berkerol/libraries/issues) according to the [semistandard rules](https://github.com/Flet/semistandard) and [latest ECMAScript Specification](https://www.ecma-international.org/ecma-262).

## Distribution

You can distribute this software freely under [GNU GPL v3.0](https://github.com/berkerol/libraries/blob/master/LICENSE).
