export type Player = 'BLACK' | 'WHITE';

export type Stone = {
    player: Player;
    coord: Coord;
}

export type Coord = {
    x: number;          
    y: number;
}
export type Board = (Stone | null )[][];