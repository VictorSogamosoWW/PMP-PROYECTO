import db from '../model/schema';

const EstandaresDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM Estandares', callback);
    },
    getById: (id: number, callback: (err: Error | null, row: any) => void) => {
        db.get('SELECT * FROM Estandares WHERE id = ?', [id], callback);
    },
    create: (estandar: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO Estandares (idProducto, estandarBase) VALUES (?, ?)`,
            [estandar.idProducto, estandar.estandarBase],
            function (err) {
                callback(err);
            }
        );
    },
    update: (estandar: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE Estandares SET idProducto = ?, estandarBase = ? WHERE id = ?`,
            [estandar.idProducto, estandar.estandarBase, estandar.id],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (id: number, callback: (err: Error | null) => void) => {
        db.run(`DELETE FROM Estandares WHERE id = ?`, [id], callback);
    },
};

export default EstandaresDAO;