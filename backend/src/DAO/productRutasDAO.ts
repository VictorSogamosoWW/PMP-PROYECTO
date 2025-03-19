import db from '../model/schema';

const ProductoRutasDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM ProductoRutas', callback);
    },
    getById: (idProducto: number, idRuta: number, callback: (err: Error | null, row: any) => void) => {
        db.get(
            'SELECT * FROM ProductoRutas WHERE idProducto = ? AND idRuta = ?',
            [idProducto, idRuta],
            callback
        );
    },
    create: (productoRuta: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO ProductoRutas (idProducto, idRuta) VALUES (?, ?)`,
            [productoRuta.idProducto, productoRuta.idRuta],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (idProducto: number, idRuta: number, callback: (err: Error | null) => void) => {
        db.run(
            'DELETE FROM ProductoRutas WHERE idProducto = ? AND idRuta = ?',
            [idProducto, idRuta],
            callback
        );
    },
};

export default ProductoRutasDAO;