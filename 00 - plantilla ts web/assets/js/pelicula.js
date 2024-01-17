export class Pelicula {
    constructor(id, titulo, director, anio) {
        this._id = id;
        this._titulo = titulo;
        this._director = director;
        this._anio = anio;
    }
    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId;
    }
    get titulo() {
        return this._titulo;
    }
    set titulo(newTitulo) {
        this._titulo = newTitulo;
    }
    get director() {
        return this._director;
    }
    set director(newDirector) {
        this._director = newDirector;
    }
    get anio() {
        return this._anio;
    }
    set anio(newAnio) {
        this._anio = newAnio;
    }
}
