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
        }
      ]
    }
  })
;
