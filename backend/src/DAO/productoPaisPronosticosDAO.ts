import db from '../model/schema'; // Corrected import path

const ProductoPaisPronosticosDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM ProductoPaisPronosticos', callback);
    },
    getById: (idProducto: number, idPais: number, callback: (err: Error | null, row: any) => void) => {
        db.get(
            'SELECT * FROM ProductoPaisPronosticos WHERE idProducto = ? AND idPais = ?',
            [idProducto, idPais],
            callback
        );
    },
    create: (productoPaisPronosticos: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO ProductoPaisPronosticos (idProducto, idPais, mes, año, cantidad) VALUES (?, ?, ?, ?, ?)`,
            [
                productoPaisPronosticos.idProducto,
                productoPaisPronosticos.idPais,
                productoPaisPronosticos.mes,
                productoPaisPronosticos.año,
                productoPaisPronosticos.cantidad,
            ],
            function (err) {
                callback(err);
            }
        );
    },
    update: (productoPaisPronosticos: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE ProductoPaisPronosticos SET mes = ?, año = ?, cantidad = ? WHERE idProducto = ? AND idPais = ?`,
            [
                productoPaisPronosticos.mes,
                productoPaisPronosticos.año,
                productoPaisPronosticos.cantidad,
                productoPaisPronosticos.idProducto,
                productoPaisPronosticos.idPais,
            ],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (idProducto: number, idPais: number, callback: (err: Error | null) => void) => {
        db.run(
            'DELETE FROM ProductoPaisPronosticos WHERE idProducto = ? AND idPais = ?',
            [idProducto, idPais],
            callback
        );
    },
};

export default ProductoPaisPronosticosDAO;