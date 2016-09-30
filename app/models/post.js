import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	tagline: DS.attr(),
	body: DS.attr(),
	date: DS.attr(),
	image: DS.attr(),
	alt: DS.attr(),
  caption: DS.attr(),
  clears: DS.attr()
});
