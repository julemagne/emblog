export default function(server) {

  server.create('post', {
    id: 4,
    title:'The Iron Yard Durham Back End Engineering: Programming Bootcamp Experience',
    tagline:'',
    body:'On August 31, 2015, I started an intensive, 12-week'+
    ' Ruby on Rails program centered around creating deployment-ready'+
    ' web apps with a focus on collaboration with other developers. I devoted 60-80 hours a'+
    ' week learning the core skills of back end web development, as well as some front end'+
    ' skills. The final 3 weeks were dedicated to building an MVP (Minimum Viable Product), ArtTrack.'+
    ' I worked in a group of three developers to build a Ruby on Rails web app with data'+
    ' persistence using SQL that we deployed to Heroku. As primarily Rails developers, we all'+
    ' contributed to the back end and front end aspects, including HTML5, CSS3, JavaScript,'+
    ' jQuery, and Bourbon, an HTML, SASS, and JS framework alternative to Bootstrap.'+
    ' We presented our project on Demo Day, the last day of our course, November 20, 2015.',
    date:'Friday, September 9, 2016',
    image:'http://julemagne.github.io/portfolio/images/fulls/arttrack.png',
    alt:'Triangle GEMconf #emberjs'
  });

  server.create('post', {
    id: 3,
    title:'Show and Tell \'Emblog\' at September 2016 Ember Meetup',
    tagline:'',
    body:'I presented my favorite parts about building this website at Nest, Raleigh.',
    date:'Thursday, September 8, 2016',
    image:'/assets/images/emblog-2-3.jpg',
    alt:'Triangle GEMconf #emberjs'
  });

  server.create('post', {
    id: 2,
    title:'GEMconf 2016 day 2-3',
    tagline:'',
    body:'Workshops.',
    date:'Tuesday, September 6, 2016',
    image:'/assets/images/ember-g-mail.png',
    alt:'Triangle GEMconf #emberjs'
  });

  server.create('post', {
    id: 1,
    title:'GEMconf 2016 day 1',
    tagline:'',
    body:'I helped lead a community discussion.'+
    ' We talked about OSS (Open Source Software), pair programming, mentoring, and RxJS.',
    date:'Tuesday, August 24, 2016',
    image:'/assets/images/panel-2-3.jpg',
    alt:'Triangle GEMconf #emberjs'
  });

}
