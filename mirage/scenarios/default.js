export default function(server) {

  server.create('post', {
    id: 7,
    title:'What to Learn First When You\'re Learning Programming: JavaScript Edition',
    tagline:'',
    body:''+
    ' I started learning to program 2 years ago, in 2015.'+
    ' There is so much to know about programming, and I didn\'t know where to start.'+
    ' I found so much, and I didn\'t know what I should prioritize learning.'+
    ' So, I am writing this article as one that I would have liked to have.',
    date:'Friday, February 10, 2017',
    image:'/assets/images/office-2-3.jpg',
    alt:'What to Learn First When You\'re Learning Programming: JavaScript Edition',
    caption:'View from my office at EmployUs.',
    clears:false
  });

  server.create('post', {
    id: 6,
    title:'What to Learn First When You\'re Learning Programming: Ruby Edition',
    tagline:'',
    body:''+
    ' I started learning to program 2 years ago, in 2015.'+
    ' There is so much to know about programming, and I didn\'t know where to start.'+
    ' I found so much, and I didn\'t know what I should prioritize learning.'+
    ' So, I am writing this article as one that I would have liked to have.',
    date:'Tuesday, January 31, 2017',
    image:'/assets/images/office-2-3.jpg',
    alt:'What to Learn First When You\'re Learning Programming: Ruby Edition',
    caption:'View from my office at EmployUs.',
    clears:true
  });

  server.create('post', {
    id: 5,
    title:'Reflecting on My First Year Employed as a Software Developer',
    tagline:'',
    body:'I prepared for my career in software development by attending a'+
    ' programming bootcamp called The Iron Yard Durham in August-November'+
    ' of 2015 (which I wrote about in a previous post).'+
    ' I accepted a software development job in December of 2015 and'+
    ' started one year ago today, January 4, 2016. I worked at'+
    ' EmployUs, a startup based in Raleigh, North Carolina, USA.'+
    ' I was the only developer in the company and set about to write the'+
    ' greenfield admin web portal, from scratch, in beta Angular 2.'+
    ' The stack also included a Node.js REST API with Express, mongoDB,'+
    ' and Google Cloud Services for hosting as an alternative to AWS.'+
    ' I knew more about Ruby on Rails than JavaScript but I accepted the'+
    ' challenge and learned so much on the job and by attending meetups in the Triangle area.'+
    ' Working at a startup with 6 people at its largest was always fast-paced and interesting.'+
    ' My favorite part was seeing that the app I built was in the real world helping people.'+
    ' I\'m a creative person and I love the feeling of making something'+
    ' that I can show to people, and also knowing I can always improve'+
    ' my skills and therefore my work. I parted ways amicably with'+
    ' EmployUs at the end of August 2016 and started working at Cisco in'+
    ' the Research Triangle Park on October 3, 2016. My team is'+
    ' bigger now, but I am still unique in my team since I am the only'+
    ' User Experience Engineer. This is a great opportunity for me to'+
    ' focus on using the design skills I honed in university in a web UI'+
    ' context. (I have a BFA, maybe a topic for another post?) Overall,'+
    ' 2016 was a great start to my journey into software development'+
    ' and I\'m now happily coding in 2017!',
    date:'Wednesday, January 4, 2017',
    image:'/assets/images/office-2-3.jpg',
    alt:'Reflecting on My First Year Employed as a Software Developer',
    caption:'View from my office at EmployUs.',
    clears:false
  });

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
    ' jQuery, and Bourbon (an HTML, SASS, and JS framework alternative to Bootstrap).'+
    ' We presented our project on Demo Day, the last day of our course, November 20, 2015.',
    date:'Friday, September 9, 2016',
    image:'/assets/images/the-iron-yard-ruby-on-rails-2-3.jpg',
    alt:'The Iron Yard Durham Back End Engineering: Programming Bootcamp Experience',
    caption:'Half my Ruby on Rails class having a coding pool party!',
    clears:true
  });

  server.create('post', {
    id: 3,
    title:'Show and Tell: "Emblog" at September 2016 Ember Meetup',
    tagline:'',
    body:'I presented my favorite parts about building this website at the Triangle Ember meetup'+
    ' group on September 8th. It\'s my first Ember app that I wrote from scratch, so I decided'+
    ' to start with a simple blog. I started out developing by learning back end engineering'+
    ' and starting doing front end engineering earlier this year, so I immediately wanted to use a database'+
    ' to hold the individual blog posts. I used the Ember add-on, Ember CLI Mirage to create'+
    ' a fake JSON API back end. I love ember-cli-mirage because I can use a database with only'+
    ' the Ember client! The meetup was hosted by Nest, a coworking space in Raleigh, North Carolina.',
    date:'Thursday, September 8, 2016',
    image:'/assets/images/emblog-2-3.jpg',
    alt:'Show and Tell: "Emblog" at September 2016 Ember Meetup',
    caption:'Here you see me presenting the very code that comprises this website!',
    clears:false
  });

  server.create('post', {
    id: 2,
    title:'GEMconf 2016: Days 2-3',
    tagline:'',
    body:'I participated in two 8-hour days of Ember workshops led by Chase McCarthy '+
    ' and Jonathan Jackson of Hashrocket at Interactive Intelligence in Durham, NC.'+
    ' It was great to be able to learn from and interact in person with Ember experts.'+
    ' We live coded an email prototype in Ember over two days.'+
    ' It was an introduction to routes, forms, Ember Data, and Mirage.'+
    ' I learned so much about Ember in this fast-paced crash course.',
    date:'Wednesday, September 7, 2016',
    image:'/assets/images/ember-g-mail-2-3.png',
    alt:'Triangle GEMconf 2016: Days 2-3 #emberjs',
    caption:'Screenshot of the email app prototype developed in the workshop.',
    clears:true
  });

  server.create('post', {
    id: 1,
    title:'GEMconf 2016: Day 1',
    tagline:'',
    body:'I helped lead a community discussion at Bronto Software in Durham, NC.'+
    ' We talked about OSS (Open Source Software), pair programming, mentoring, and RxJS.',
    date:'Tuesday, August 24, 2016',
    image:'/assets/images/panel-2-3.jpg',
    alt:'Triangle GEMconf 2016: Day 1 #emberjs',
    caption:'Community Discussion panel with Tracy Lee, myself (Julie David), and Todd Jordan.',
    clears:false
  });

}
