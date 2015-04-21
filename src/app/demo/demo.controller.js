'use strict';

angular.module('ngI18nDemo')
  .controller('DemoCtrl', function($scope, gettext, gettextCatalog, tmhDynamicLocale) {
    gettextCatalog.debug = true;
    gettextCatalog.setCurrentLanguage('en-US');
    tmhDynamicLocale.set('en-US');

    var self = this;
    this.today = moment().add('days', 5).format();
    this.totalItems = 0;
    this.subtotal = 0;
    this.estimatedTax = 0;
    this.estimatedTotal = 0;

    this.changeLang = function(code) {
      gettextCatalog.setCurrentLanguage(code);
      tmhDynamicLocale.set(code);
    };

    this.items = [
      {
        name: gettext('Pocket Infinity'),
        quantity: 1,
        description: gettext('You cannot shake the feeling that this is less a weapon than a doorway.'),
        image: 'http://desimg.zamimg.com/static/upload/screenshot/resized/26.jpg?1429208491',
        price: 100
      },
      {
        name: gettext('Plan C'),
        quantity: 1,
        description: gettext('Good fighters have contingency plans. Great fighters don\'t need them.'),
        image: 'http://desimg.zamimg.com/static/upload/screenshot/resized/128.jpg?1429208490',
        price: 150
      },
      {
        name: gettext('Bad Juju'),
        quantity: 1,
        description: gettext('"If you believe your weapon wants to murder all existence, then so it will." - Toland the Shattered'),
        image: 'http://desimg.zamimg.com/static/upload/screenshot/resized/5.jpg?1429208491',
        price: 200
      },
      {
        name: gettext('Thorn'),
        quantity: 1,
        description: gettext('"To rend one\'s enemies is to see them not as equals, but objects--hollow of spirit and meaning." -13th Understanding, 7th Book of Sorrow'),
        image: 'http://destiny.wiki.fextralife.com/file/view/thorn.jpg/522916200/thorn.jpg',
        price: 250
      },
    ];

    $scope.$on('$localeChangeError', function() {
      tmhDynamicLocale.set('en-us');
    });

    $scope.$watch(angular.bind(this, function(items) {
      return self.items;
    }), function(newVal) {
      var totalItems = 0
        , subtotal = 0
        , tax = 0
        , total = 0;

      newVal.forEach(function(item) {
        var quantity = parseInt(item.quantity , 10) || 0;
        totalItems = totalItems + quantity;
        subtotal = subtotal + (quantity * item.price);
        tax = tax + (item.quantity * item.price * 0.06);
        total = total + (quantity * item.price) + (quantity * item.price * 0.06);
      });

      self.estimatedTotal = total;
      self.estimatedTax = tax;
      self.subtotal = subtotal;
      self.totalItems = totalItems
    }, true);
  });
