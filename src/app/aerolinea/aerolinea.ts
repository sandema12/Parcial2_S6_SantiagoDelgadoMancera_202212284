import { Flight } from "./flight";

export interface Aerolinea {
    id: number;
    airlineName: string;
    country: string;
    city: string;
    adress: string;
    identityColor: string;
    slogan: boolean;
    flights: Flight[];

}