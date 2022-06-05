export declare class TransportationOrderDto {
    id: number;
    name: string;
    carCount: number;
    loadingDate: Date;
    unloadingDate: Date;
    status: number;
    fromCountry: number;
    fromArea: number;
    fromLocality: number;
    toCountry: number;
    toArea: number;
    toLocality: number;
    weight: number;
    volume: number;
    rateToCarrier: number;
    rateToYou: number;
    company: number;
    carrier: number;
}
