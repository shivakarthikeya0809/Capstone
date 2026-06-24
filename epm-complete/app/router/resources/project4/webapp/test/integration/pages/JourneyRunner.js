sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/epm/project4/test/integration/pages/PurchaseOrdersList",
	"com/epm/project4/test/integration/pages/PurchaseOrdersObjectPage",
	"com/epm/project4/test/integration/pages/PurchaseOrderItemsObjectPage"
], function (JourneyRunner, PurchaseOrdersList, PurchaseOrdersObjectPage, PurchaseOrderItemsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/epm/project4') + '/test/flp.html#app-preview',
        pages: {
			onThePurchaseOrdersList: PurchaseOrdersList,
			onThePurchaseOrdersObjectPage: PurchaseOrdersObjectPage,
			onThePurchaseOrderItemsObjectPage: PurchaseOrderItemsObjectPage
        },
        async: true
    });

    return runner;
});

