import sqlite3 from "sqlite3";

const db = new sqlite3.Database(':memory:');

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
    )`, (err) => {
        if (err) {
            console.error("Error creating Producto table:", err);
        } else {
            console.log("Producto table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS Negocio (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`, (err) => {
        if (err) {
            console.error("Error creating Negocio table:", err);
        } else {
            console.log("Negocio table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS Linea (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`, (err) => {
        if (err) {
            console.error("Error creating Linea table:", err);
        } else {
            console.log("Linea table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS Marca (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`, (err) => {
        if (err) {
            console.error("Error creating Marca table:", err);
        } else {
            console.log("Marca table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS Pais (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`, (err) => {
        if (err) {
            console.error("Error creating Pais table:", err);
        } else {
            console.log("Pais table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS Planta (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`, (err) => {
        if (err) {
            console.error("Error creating Planta table:", err);
        } else {
            console.log("Planta table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS Bodega (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`, (err) => {
        if (err) {
            console.error("Error creating Bodega table:", err);
        } else {
            console.log("Bodega table created successfully.");
        }
    });

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
    )`, (err) => {
        if (err) {
            console.error("Error creating ProductoPaisBodega table:", err);
        } else {
            console.log("ProductoPaisBodega table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS ProductoPaisVenta (
        idProducto INTEGER,
        idPais INTEGER,
        comercial REAL,
        estadistica REAL,
        FOREIGN KEY (idProducto) REFERENCES Producto(id),
        FOREIGN KEY (idPais) REFERENCES Pais(id),
        PRIMARY KEY (idProducto, idPais)
    )`, (err) => {
        if (err) {
            console.error("Error creating ProductoPaisVenta table:", err);
        } else {
            console.log("ProductoPaisVenta table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS ProductoPaisPronosticos (
        idProducto INTEGER,
        idPais INTEGER,
        mes INTEGER,
        año INTEGER,
        cantidad REAL,
        FOREIGN KEY (idProducto) REFERENCES Producto(id),
        FOREIGN KEY (idPais) REFERENCES Pais(id),
        PRIMARY KEY (idProducto, idPais)
    )`, (err) => {
        if (err) {
            console.error("Error creating ProductoPaisPronosticos table:", err);
        } else {
            console.log("ProductoPaisPronosticos table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS Estandares (
        id INTEGER PRIMARY KEY,
        idProducto INTEGER,
        estandarBase REAL,
        FOREIGN KEY (idProducto) REFERENCES Producto(id)
    )`, (err) => {
        if (err) {
            console.error("Error creating Estandares table:", err);
        } else {
            console.log("Estandares table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS Rutas (
        id INTEGER PRIMARY KEY,
        maquina TEXT
    )`, (err) => {
        if (err) {
            console.error("Error creating Rutas table:", err);
        } else {
            console.log("Rutas table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS ProductoRutas (
        idProducto INTEGER,
        idRuta INTEGER,
        FOREIGN KEY (idProducto) REFERENCES Producto(id),
        FOREIGN KEY (idRuta) REFERENCES Rutas(id),
        PRIMARY KEY (idProducto, idRuta)
    )`, (err) => {
        if (err) {
            console.error("Error creating ProductoRutas table:", err);
        } else {
            console.log("ProductoRutas table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS ProductoInsumos (
        idProducto INTEGER,
        idInsumo INTEGER,
        FOREIGN KEY (idProducto) REFERENCES Producto(id),
        FOREIGN KEY (idInsumo) REFERENCES Insumos(id),
        PRIMARY KEY (idProducto, idInsumo)
    )`, (err) => {
        if (err) {
            console.error("Error creating ProductoInsumos table:", err);
        } else {
            console.log("ProductoInsumos table created successfully.");
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS Insumos (
        id INTEGER PRIMARY KEY,
        nombre TEXT
    )`, (err) => {
        if (err) {
            console.error("Error creating Insumos table:", err);
        } else {
            console.log("Insumos table created successfully.");
        }
    });
});

db.on("error", (err) => {
    console.error("Database error:", err);
});

export default db;