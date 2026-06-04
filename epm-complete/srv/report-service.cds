using {com.epm.views as v} from '../db/views';

service ReportService @(path:'/reports') {

    @readonly
    entity ProductCatalog as projection on v.ProductCatalog;

    @readonly
    entity OrderReport as projection on v.OrderReport;

    @readonly
    entity LowStockAlert as projection on v.LowStockAlert;
}