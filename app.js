var caramel = require('caramel').caramel;

caramel.configs({
    context: '/blogAggregator',
    cache: true,
    negotiation: true,
    themer: function () {
        return 'blogAggregator';
    }
});
