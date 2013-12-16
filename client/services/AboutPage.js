'use strict';

angular.module('services')
  .factory('AboutPageService', function() {

    return {
      teammates: [
        {
          name: 'Patrick Stapleton',
          avatar: '3d2f120',
          about: 'Responsibilities: Overall MVC architecture, Full-Stack, code refactoring, debugging suite, integrating everything.',
          website: 'gdi2290.com',
          github: 'gdi2290',
          linkedin: 'gdi2290',
          twitter: 'gdi2290'
        },
        {
          name: 'Alex Gaputin',
          avatar: '19ee9fb',
          about: 'Responsibilities: initiated the idea, pulled all the data from Reddit.com, worked on Word Clouds and Interaction scatter plot, and sliced and diced the data for the "data nuggets", Interactions, and Graphs pages.',
          website: 'googamanga.tumblr.com',
          github: 'googamanga',
          linkedin: 'alexgaputin',
          twitter: 'googamanga'
        },
        {
          name: 'Elle Beal',
          avatar: '0e8ddaf',
          about: 'Responsibilities: worked primarily on the front end integrating the data into the d3.js graphs, project management, as well as styling and user testing.',
          website: 'ellebeal.com',
          github: 'ebeal',
          linkedin: 'eleanor-beal',
          twitter: 'elliebee'
        },
        {
          name: 'Kevin Smith',
          avatar: '16f16e9',
          about: 'Responsibilities: initiated the idea, pulled all the data from Reddit.com, worked on Word Clouds and Interaction scatter plot, and sliced and diced the data for the "data nuggets", Interactions, and Graphs pages.',
          website: 'kevinhamiltonsmith.com',
          github: 'kevinhamiltonsmith',
          linkedin: 'kevinhsmith',
          twitter: 'kevinhsmitty'
        },
        {
          name: 'Bill Shelton',
          avatar: '32e1404',
          about: 'Responsibilities: lead data scientist, data munging, data visualization and machine learning with Python, D3 and R.',
          website: 'williamshelton.nodejitsu.com',
          github: 'sheltowt',
          linkedin: 'williamshelton',
          twitter: 'sheltowt'
        }
      ],
      specialThanks: {
        name: 'Christopher Sita',
        avatar: 'chris',
        about: 'Responsibilities: built the d3 framework for the Interaction scatter graph',
        website: 'chrissita.com',
        github: 'tooseata',
        linkedin: 'chrissita'
      },
      hackreactor: {
        link: 'http://s.gdi2290.com/Hack_Reactor',
        image: 'http://hackreactor.com/wp-content/uploads/2013/04/180px.png',
        image2: 'http://catalystsf.staging.wpengine.com/wp-content/uploads/2012/10/Logos.png',
        header: 'The CS Degree for the 21st Century.',
        about: 'Learn the skills needed to become a Software Engineer in a intensive course that runs 12 hours a day, 6 days per week, for 3 months. The course is based in JavaScript, with an emphasis on modern tools and frameworks such as Angular.js,  Backbone.js, Node.js, jQuery, Meteor, and more. We also study core computer science concepts like data structures, algorithms, and time complexities, along with other web languages like Ruby, Rails, HTML5, and CSS3.'
      }
    }
  })
;
