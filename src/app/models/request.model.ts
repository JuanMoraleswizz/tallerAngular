import { Personaje } from './personaje.model';

export interface RequestResult {
    count: number;
    next: string;
    previus: string;
    results: Personaje[];
}