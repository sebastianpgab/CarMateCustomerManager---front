export interface Repair{
    id?: number | null;
    repairDate: Date | null;
    cost: number | null;
    description: string;
    vehicleId?: number | null;
}