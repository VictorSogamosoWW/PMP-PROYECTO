import db from '../model/schema';

const BodegaDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM Bodega', callback);
    },
    getById: (id: number, callback: (err: Error | null, row: any) => void) => {
        db.get('SELECT * FROM Bodega WHERE id = ?', [id], callback);
    },
    create: (bodega: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO Bodega (nombre) VALUES (?)`,
            [bodega.nombre],
            function (err) {
                callback(err);
            }
        );
    },
    update: (bodega: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE Bodega SET nombre = ? WHERE id = ?`,
            [bodega.nombre, bodega.id],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (id: number, callback: (err: Error | null) => void) => {
        db.run(`DELETE FROM Bodega WHERE id = ?`, [id], callback);
    },
};

export default BodegaDAO;