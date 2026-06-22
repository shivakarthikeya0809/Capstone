sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"my/bookshop/project1/test/integration/pages/BooksMain"
], function (JourneyRunner, BooksMain) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('my/bookshop/project1') + '/test/flp.html#app-preview',
        pages: {
			onTheBooksMain: BooksMain
        },
        async: true
    });

    return runner;
});

