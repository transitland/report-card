import Ember from 'ember';

export default Ember.Mixin.create({
  perPage: 50,
  queryParams: ["offset", "sort_order", "sort_key", "country", "state", "metro", "name", "short_name"],
  offset: 0,
  sort_order: "asc",
  sort_key: "name",
  country: null,
  state: null,
  metro: null,
  name: null,
  short_name: null,

  hasPreviousPage: Ember.computed("offset", function() {
    return this.get("offset") > 0;
  }),

  hasNextPage: Ember.computed("model.meta.next", function() {
    if (Ember.isPresent(this.get('model.meta.next'))) {
      return true;
    } else {
      return false;
    }
  }),
  
  previousOffset: Ember.computed("offset", function() {
    return this.get("offset") - this.get("perPage");
  }),
  
  nextOffset: Ember.computed("offset", function() {
    return this.get("offset") + this.get("perPage");
  })
});