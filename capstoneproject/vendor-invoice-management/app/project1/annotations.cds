using AdminService as service from '../../srv/admin-service';

annotate service.Invoices with @(

    UI.HeaderInfo : {
        TypeName : 'Invoice',
        TypeNamePlural : 'Invoices',
        Title : {
            Value : invoiceNumber
        }
    },

    UI.SelectionFields : [
        invoiceNumber,
        status,
        vendor
    ],

    UI.LineItem : [
        { $Type : 'UI.DataField', Label : 'Invoice Number', Value : invoiceNumber },
        { $Type : 'UI.DataField', Label : 'Vendor', Value : vendor.vendorName },
        { $Type : 'UI.DataField', Label : 'Invoice Date', Value : invoiceDate },
        { $Type : 'UI.DataField', Label : 'Due Date', Value : dueDate },
        { $Type : 'UI.DataField', Label : 'Amount', Value : amount },
        { $Type : 'UI.DataField', Label : 'Currency', Value : currency },
        { $Type : 'UI.DataField', Label : 'Status', Value : status ,Criticality:criticality}
    ],

    UI.Identification : [

        {
            $Type : 'UI.DataFieldForAction',
            Action : 'VendorInvoiceService.SubmitInvoice',
            Label : 'Submit'
        },

        {
            $Type : 'UI.DataFieldForAction',
            Action : 'VendorInvoiceService.ApproveInvoice',
            Label : 'Approve'
        },

        {
            $Type : 'UI.DataFieldForAction',
            Action : 'VendorInvoiceService.RejectInvoice',
            Label : 'Reject'
        }

    ],

    UI.FieldGroup #General : {
        Data : [
            { Value : invoiceNumber },
            { Value : vendor },
            { Value : invoiceDate },
            { Value : dueDate },
            { Value : amount },
            { Value : currency },
            { Value : status },
            { Value : submittedBy },
            { Value : approvedBy },
            { Value : rejectedBy },
            { Value : rejectionReason }
        ]
    },

    UI.Facets : [

        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneralInformation',
            Label : 'General Information',
            Target : '@UI.FieldGroup#General'
        },

        {
            $Type : 'UI.ReferenceFacet',
            ID : 'ApprovalHistory',
            Label : 'Approval History',
            Target : 'history/@UI.LineItem'
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'Attachments',
            Label : 'Attachments',
            Target : 'attachments/@UI.LineItem'
        }

    ],

    Capabilities.InsertRestrictions : {
        Insertable : true
    },

    Capabilities.UpdateRestrictions : {
        Updatable : true
    },

    Capabilities.DeleteRestrictions : {
        Deletable : true
    }

);

annotate service.ApprovalHistory with @(

    UI.LineItem : [

        {
            $Type : 'UI.DataField',
            Label : 'Action',
            Value : action
        },

        {
            $Type : 'UI.DataField',
            Label : 'Comments',
            Value : comments
        },

        {
            $Type : 'UI.DataField',
            Label : 'Performed By',
            Value : performedBy
        },

        {
            $Type : 'UI.DataField',
            Label : 'Created At',
            Value : createdAt
        }

    ]

);

annotate service.Invoices with {

    vendor @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'Vendors',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : vendor_ID,
                ValueListProperty : 'ID'
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'vendorCode'
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'vendorName'
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'email'
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'phone'
            }
        ]
    };

};
annotate service.Attachments with @(

    UI.LineItem : [

        {
            $Type : 'UI.DataField',
            Label : 'File Name',
            Value : fileName
        },

        {
            $Type : 'UI.DataField',
            Label : 'Media Type',
            Value : mediaType
        },

        {
            $Type : 'UI.DataField',
            Label : 'Created At',
            Value : createdAt
        }

    ]

);