import db from '../model/schema';

const ProductoPaisBodegaDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM ProductoPaisBodega', callback);
    },
    getById: (idProducto: number, idPais: number, idBodega: number, callback: (err: Error | null, row: any) => void) => {
        db.get(
            'SELECT * FROM ProductoPaisBodega WHERE idProducto = ? AND idPais = ? AND idBodega = ?',
            [idProducto, idPais, idBodega],
            callback
        );
    },
    create: (productoPaisBodega: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO ProductoPaisBodega (idProducto, idPais, idBodega, inicial, existencias) VALUES (?, ?, ?, ?, ?)`,
            [
                productoPaisBodega.idProducto,
                productoPaisBodega.idPais,
                productoPaisBodega.idBodega,
                productoPaisBodega.inicial,
                productoPaisBodega.existencias,
            ],
            function (err) {
                callback(err);
            }
        );
    },
    update: (productoPaisBodega: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE ProductoPaisBodega SET inicial = ?, existencias = ? WHERE idProducto = ? AND idPais = ? AND idBodega = ?`,
            [
                productoPaisBodega.inicial,
                productoPaisBodega.existencias,
                productoPaisBodega.idProducto,
                productoPaisBodega.idPais,
                productoPaisBodega.idBodega,
            ],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (idProducto: number, idPais: number, idBodega: number, callback: (err: Error | null) => void) => {
        db.run(
            'DELETE FROM ProductoPaisBodega WHERE idProducto = ? AND idPais = ? AND idBodega = ?',
            [idProducto, idPais, idBodega],
            callback
        );
    },
};

export default ProductoPaisBodegaDAO;