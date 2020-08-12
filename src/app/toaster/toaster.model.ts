export interface Toaster {
    type: string;
    title: string;
    message: string;
    display?: boolean;
    timer?: number;
}