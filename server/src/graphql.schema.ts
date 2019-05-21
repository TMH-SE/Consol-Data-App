
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class AddCompanyDto {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    skype?: string;
    note?: string;
    status?: number;
}

export class UpdateCompanyDto {
    id: string;
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    skype?: string;
    note?: string;
    status?: number;
}

export class Company {
    id?: string;
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    skype?: string;
    note?: string;
    status?: number;
}

export abstract class IMutation {
    abstract addCompany(addCompanyDto?: AddCompanyDto): Company | Promise<Company>;

    abstract updateCompany(updateCompanyDto?: UpdateCompanyDto): Company | Promise<Company>;

    abstract deleteCompany(companyId?: string): Company | Promise<Company>;
}

export abstract class IQuery {
    abstract companies(): Company[] | Promise<Company[]>;

    abstract company(id: string): Company | Promise<Company>;
}
