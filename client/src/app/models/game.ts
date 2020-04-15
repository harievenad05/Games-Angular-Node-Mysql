
export interface Game {
  id?: number;
  title: string;
  description: string;
  image?:string;
  created_at?: Date;
}

export class GameData {
  success: number;
  data: Game[];
  constructor(){
      this.success = null;
      this.data = null;
  }
}

export class GameDataResponse {
  success: number;
  message: string;
  data: Game;
  constructor(){
    this.success = null;
    this.message = null;
    this.data = null
  }
}