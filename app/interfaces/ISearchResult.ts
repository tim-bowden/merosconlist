

export interface ISearchResult{

    score : number,
    PartitionKey : string,
    RowKey : string,
    Key : string,
    Address1 : string,
    Address2 : string,
    Address3 : string,
    Address4 : string,
    Address5 : string,
    Address6 : string,
    AliasType: string,
    Country : string,
    CountryofBirth : string,
    DOB : string,
    GroupID : string,
    GroupType : string,
    LastUpdated : string,
    ListedOn : string,
    NINumber : string,
    Name1 : string,
    Name2 : string,
    Name3 : string,
    Name4 : string,
    Name5 : string,
    Name6 : string,
    Nationality: string,
    OtherInformation : string,
    PassportDetails : string,
    Position : string,
    PostCode : string,
    Regime : string,
    Title : string,
    TownofBirth : string
}

export interface ISearchFacet {

    count : number,
    name : string
}