Reddit Insight - Reddit Analytics [![Build Status](https://travis-ci.org/gdi2290/RedditInsight.png?branch=master)](https://travis-ci.org/gdi2290/RedditInsight)
=============
An analytics suite for Reddit.com using their public API, combined with real-time data analysis and graphic visualizations of historical data. Originally a five person team, with varying areas of expertise working together to build an analytics platform on top of the Firehose that is Reddit. Technologies used include JavaScript, Backbone.js, Node.js, Handlebars, d3, Express, MongoDB, Mongoose, and Python scripts. Now the site is built on top of Angular.js, d3, Node.js, Express, MongoDB, Mongoose

## UPDATE: Angular.js refactor done by [gdi2290.com](https://gdi2290.com/)

#### Team:
<b>Patrick Stapleton</b> [gdi2290.com](https://gdi2290.com/) - Overall MVC architecture, Full-Stack, code refactoring, debugging suite, integrating everything.<br>
<b>Alex Gaputin</b> [googamanga.tumblr.com](http://googamanga.tumblr.com/) - Initiated the idea, pulled all the data from Reddit.com, worked on Word Clouds and Interaction scatter plot, and sliced and diced the data for the "data nuggets", Interactions, and Graphs pages.<br>
<b>Kevin Smith</b> [kevinhamiltonsmith.com](http://kevinhamiltonsmith.com/) - Front-side architecture (router, controller, views, and models), real-time data capture, front-end layout and styling, and user interface.<br>
<b>Elle Beal</b> [ellebeal.com](http://ellebeal.com/) - Worked primarily on the front end integrating the data into the d3.js graphs, project management, as well as styling and user testing.<br>
<b>Bill Shelton</b> [williamshelton.nodejitsu.com](http://williamshelton.nodejitsu.com/) - Lead data scientist, data munging, data visualization and machine learning with Python, D3 and R.<br>
<b>Chris Sita</b> [chrissita.com](http://chrissita.com/)- Built the d3 framework for the Interaction scatter graph.<br>

Logo - Alex Trimpe http://alextrimpe.com/

===
Requirements:
```bash
npm nodemon
```

Installing Reddit Insight:

```bash
$ npm install -g nodemon
$ npm start
```

```bash
$ git clone https://github.com/gdi2290/RedditInsight.git
$ cd RedditInsight
$ npm install
$ bower install
$ grunt server
```
===
