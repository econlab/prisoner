import {Model, attr, hasMany} from 'fireplace';

export default Model.extend({
  email: attr('string'),
  name:  attr('string'),

  points: attr('number'),


  history: hasMany('history', { embedded: true })
});
