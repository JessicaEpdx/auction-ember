Auction.Item = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  imageURL: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})

});
