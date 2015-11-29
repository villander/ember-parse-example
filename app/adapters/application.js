import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.parse.com/1/classes',
  headers: {
    "X-Parse-Application-Id": "fS61UUBy1Vlpf6296lFTget2U7oYlNku8K6iEgBi",
    "X-Parse-REST-API-Key": "gx55PFoUhLjbR4uCllzpLhRPrt3pOED0BvjyZ2K3"
  }
});
