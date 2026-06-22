/*using ProductCatalogService as service from '../../srv/product-catalog-service';
annotate service.Products with @(
    UI.LineItem #tableMacro : [  { Value: stock, Criticality: stockCriticality }
    ],
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'products',
            ID : 'products',
            Target : '@UI.FieldGroup#products',
        },
    ],
    UI.FieldGroup #products : {
        $Type : 'UI.FieldGroupType',
        Data : [
        ],
    },
);

annotate ProductCatalogService.Products with {
  stock @UI.Criticality: stockCriticality;
};*/

/*using ProductCatalogService as service from '../../srv/product-catalog-service';

annotate service.Products with @UI : {
    LineItem : [
        {
            $Type : 'UI.DataField',
            Value : productName,
            Label : 'Product Name',
        },
        {
            $Type : 'UI.DataField',
            Value : price,
            Label : 'Price',
        },
        {
            $Type : 'UI.DataField',
            Value : stock,
            Label : 'Stock Quantity',
        }
    ]
};

annotate ProductCatalogService.Products with {
    stock @UI.Criticality : stockCriticality;
};*/
