import db from '../model/schema';

const NegocioDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM Negocio', callback);
    },
    getById: (id: number, callback: (err: Error | null, row: any) => void) => {
        db.get('SELECT * FROM Negocio WHERE id = ?', [id], callback);
    },
    create: (negocio: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO Negocio (nombre) VALUES (?)`,
            [negocio.nombre],
            function (err) {
                callback(err);
            }
        );
    },
    update: (negocio: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE Negocio SET nombre = ? WHERE id = ?`,
            [negocio.nombre, negocio.id],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (id: number, callback: (err: Error | null) => void) => {
        db.run(`DELETE FROM Negocio WHERE id = ?`, [id], callback);
    },
};

export default NegocioDAO;