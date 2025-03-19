import sqlite3, {Database} from "sqlite3";

const db = new sqlite3.Database(':memory');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Producto (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        presentacion TEXT,
        idNegocio INTEGER,
        idLinea INTEGER,
        idMarca INTEGER,
        FOREIGN KEY (idNegocio) REFERENCES Negocio(id),
        FOREIGN KEY (idLinea) REFERENCES Linea(id),
        FOREIGN KEY (idMarca) REFERENCES Marca(id)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Negocio (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Linea (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Marca (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Pais (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Planta (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Bodega (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS ProductoPaisBodega (
        idProducto INTEGER,
        idPais INTEGER,
        idBodega INTEGER,
        inicial REAL,
        existencias REAL,
        FOREIGN KEY (idProducto) REFERENCES Producto(id),
        FOREIGN KEY (idPais) REFERENCES Pais(id),
        FOREIGN KEY (idBodega) REFERENCES Bodega(id),
        PRIMARY KEY (idProducto, idPais, idBodega)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS ProductoPaisVenta (
        idProducto INTEGER,
        idPais INTEGER,
        comercial REAL,
        estadistica REAL,
        FOREIGN KEY (idProducto) REFERENCES Producto(id),
        FOREIGN KEY (idPais) REFERENCES Pais(id),
        PRIMARY KEY (idProducto, idPais)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS ProductoPaisPronosticos (
        idProducto INTEGER,
        idPais INTEGER,
        mes INTEGER,
        año INTEGER,
        cantidad REAL,
        FOREIGN KEY (idProducto) REFERENCES Producto(id),
        FOREIGN KEY (idPais) REFERENCES Pais(id),
        PRIMARY KEY (idProducto, idPais)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Estandares (
        id INTEGER PRIMARY KEY,
        idProducto INTEGER,
        estandarBase REAL,
        FOREIGN KEY (idProducto) REFERENCES Producto(id)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Rutas (
        id INTEGER PRIMARY KEY,
        maquina TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS ProductoRutas (
        idProducto INTEGER,
        idRuta INTEGER,
        FOREIGN KEY (idProducto) REFERENCES Producto(id),
        FOREIGN KEY (idRuta) REFERENCES Rutas(id),
        PRIMARY KEY (idProducto, idRuta)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS ProductoInsumos (
        idProducto INTEGER,
        idInsumo INTEGER,
        FOREIGN KEY (idProducto) REFERENCES Producto(id),
        FOREIGN KEY (idInsumo) REFERENCES Insumos(id),
        PRIMARY KEY (idProducto, idInsumo)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS Insumos (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`);
});

export default db;