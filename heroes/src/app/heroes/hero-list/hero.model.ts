export interface Hero {
    nom: string;
    score: number | null;
}

export class Hero implements Hero {
    constructor(nom: string, score: number) {
        this.nom = nom;
        this.score = score;
    }
}
