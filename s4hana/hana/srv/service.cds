using { API_BUSINESS_PARTNER as bupa } from './externals/API_BUSINESS_PARTNER';

service BusinessPartnerService {
    entity BusinessPartners as projection on bupa.A_BusinessPartner;
}