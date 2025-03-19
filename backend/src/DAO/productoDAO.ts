import db from '../model/schema';

const ProductoDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM Producto', callback);
    },

    getById: (id: number, callback: (err: Error| null, row: any[])=> void) =>{
        db.get('SELECT + FROM Producto WHERE id', [id], callback);
    },

    create:(producto: any, callback: (err: Error | null )=> void)=>{
        db.run(
            `INSERT INTO Producto (nombre, presentacion, idNegocio, idLinea, idMarca) VALUES (?, ?, ?, ?, ?)`,
            [producto.nombre, producto.presentacion, producto.idNegocio, producto.idLinea, producto.idMarca],
            function (err) {
                callback(err);
            }
        ); 
    },

    update: (producto: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE Producto SET nombre = ?, presentacion = ?, idNegocio = ?, idLinea = ?, idMarca = ? WHERE id = ?`,
            [producto.nombre, producto.presentacion, producto.idNegocio, producto.idLinea, producto.idMarca, producto.id],
            function (err) {
                callback(err);
            }
        );
    },

    delete: (id: number, callback: (err: Error | null) => void) => {
        db.run(`DELETE FROM Producto WHERE id = ?`, [id], callback);
    },
};

export default ProductoDAO;