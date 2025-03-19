import db from '../model/schema';

const ProductoPaisVentaDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM ProductoPaisVenta', callback);
    },
    getById: (idProducto: number, idPais: number, callback: (err: Error | null, row: any) => void) => {
        db.get('SELECT * FROM ProductoPaisVenta WHERE idProducto = ? AND idPais = ?', [idProducto, idPais], callback);
    },
    create: (productoPaisVenta: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO ProductoPaisVenta (idProducto, idPais, comercial, estadistica) VALUES (?, ?, ?, ?)`,
            [
                productoPaisVenta.idProducto,
                productoPaisVenta.idPais,
                productoPaisVenta.comercial,
                productoPaisVenta.estadistica,
            ],
            function (err) {
                callback(err);
            }
        );
    },
    update: (productoPaisVenta: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE ProductoPaisVenta SET comercial = ?, estadistica = ? WHERE idProducto = ? AND idPais = ?`,
            [
                productoPaisVenta.comercial,
                productoPaisVenta.estadistica,
                productoPaisVenta.idProducto,
                productoPaisVenta.idPais,
            ],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (idProducto: number, idPais: number, callback: (err: Error | null) => void) => {
        db.run('DELETE FROM ProductoPaisVenta WHERE idProducto = ? AND idPais = ?', [idProducto, idPais], callback);
    },
};

export default ProductoPaisVentaDAO;