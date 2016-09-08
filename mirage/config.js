  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

export default function() {
  // this.namespace = 'api/v1';

  this.get('/posts', function() {
    return {
      data: [
        {
          type: 'posts',
          id: 1,
          attributes: {
            title:'GEMconf 2016 day 1',
            tagline:'',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
            date:'Tuesday, August 24, 2016',
            image:'/assets/images/panel-2-3.jpg',
            alt:'Triangle GEMconf #emberjs'
          }
        },
        {
          type: 'posts',
          id: 2,
          attributes: {
            title:'GEMconf 2016 day 1',
            tagline:'',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
            date:'Tuesday, August 24, 2016',
            image:'/assets/images/panel-2-3.jpg',
            alt:'Triangle GEMconf #emberjs'
          }
        },
        {
          type: 'posts',
          id: 3,
          attributes: {
            title:'GEMconf 2016 day 1',
            tagline:'',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
            date:'Tuesday, August 24, 2016',
            image:'/assets/images/panel-2-3.jpg',
            alt:'Triangle GEMconf #emberjs'
          }
        },
        {
          type: 'posts',
          id: 4,
          attributes: {
            title:'GEMconf 2016 day 1',
            tagline:'',
            body:'Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.',
            date:'Tuesday, August 24, 2016',
            image:'/assets/images/panel-2-3.jpg',
            alt:'Triangle GEMconf #emberjs'
          }
        }
      ]
    };
  });

  this.get('/posts/:post_id', ({posts}, request) => {
    let p = posts.find(request.params.post_id);
    return p;
  });
}
