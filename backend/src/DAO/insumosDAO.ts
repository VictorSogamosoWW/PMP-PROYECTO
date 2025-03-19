import db from '../model/schema'; // Corrected import path

const InsumosDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM Insumos', callback);
    },
    getById: (id: number, callback: (err: Error | null, row: any) => void) => {
        db.get('SELECT * FROM Insumos WHERE id = ?', [id], callback);
    },
    create: (insumo: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO Insumos (nombre) VALUES (?)`,
            [insumo.nombre],
            function (err) {
                callback(err);
            }
        );
    },
    update: (insumo: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE Insumos SET nombre = ? WHERE id = ?`,
            [insumo.nombre, insumo.id],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (id: number, callback: (err: Error | null) => void) => {
        db.run(`DELETE FROM Insumos WHERE id = ?`, [id], callback);
    },
};

export default InsumosDAO;