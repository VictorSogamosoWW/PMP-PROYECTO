import db from '../model/schema';

const MarcaDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM Marca', callback);
    },
    getById: (id: number, callback: (err: Error | null, row: any) => void) => {
        db.get('SELECT * FROM Marca WHERE id = ?', [id], callback);
    },
    create: (marca: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO Marca (nombre) VALUES (?)`,
            [marca.nombre],
            function (err) {
                callback(err);
            }
        );
    },
    update: (marca: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE Marca SET nombre = ? WHERE id = ?`,
            [marca.nombre, marca.id],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (id: number, callback: (err: Error | null) => void) => {
        db.run(`DELETE FROM Marca WHERE id = ?`, [id], callback);
    },
};

export default MarcaDAO;