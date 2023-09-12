export interface Vehicle {
    id?: number;
    make:string;
    model: string;
    vin: string;
    year: number | null;
    engine: string;
    kilometers: number | null;
    status: string;
}