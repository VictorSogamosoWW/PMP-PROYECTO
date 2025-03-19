import db from '../model/schema';

const ProductoInsumosDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM ProductoInsumos', callback);
    },
    getById: (idProducto: number, idInsumo: number, callback: (err: Error | null, row: any) => void) => {
        db.get(
            'SELECT * FROM ProductoInsumos WHERE idProducto = ? AND idInsumo = ?',
            [idProducto, idInsumo],
            callback
        );
    },
    create: (productoInsumo: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO ProductoInsumos (idProducto, idInsumo) VALUES (?, ?)`,
            [productoInsumo.idProducto, productoInsumo.idInsumo],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (idProducto: number, idInsumo: number, callback: (err: Error | null) => void) => {
        db.run(
            'DELETE FROM ProductoInsumos WHERE idProducto = ? AND idInsumo = ?',
            [idProducto, idInsumo],
            callback
        );
    },
};

export default ProductoInsumosDAO;