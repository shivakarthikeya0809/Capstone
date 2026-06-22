sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/catalog/project2/test/integration/pages/ProductsMain"
], function (JourneyRunner, ProductsMain) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/catalog/project2') + '/test/flp.html#app-preview',
        pages: {
			onTheProductsMain: ProductsMain
        },
        async: true
    });

    return runner;
});

