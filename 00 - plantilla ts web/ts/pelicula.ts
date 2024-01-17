export class Pelicula {
    private _id: number;
    private _titulo: string;
    private _director: string;
    private _anio: number;
  
    constructor(id: number, titulo: string, director: string, anio: number) {
      this._id = id;
      this._titulo = titulo;
      this._director = director;
      this._anio = anio;
    }
  
    get id(): number {
      return this._id;
    }
  
    set id(newId: number) {
      this._id = newId;
    }
  
    get titulo(): string {
      return this._titulo;
    }
  
    set titulo(newTitulo: string) {
      this._titulo = newTitulo;
    }
  
    get director(): string {
      return this._director;
    }
  
    set director(newDirector: string) {
      this._director = newDirector;
    }
  
    get anio(): number {
      return this._anio;
    }
  
    set anio(newAnio: number) {
      this._anio = newAnio;
    }
  }