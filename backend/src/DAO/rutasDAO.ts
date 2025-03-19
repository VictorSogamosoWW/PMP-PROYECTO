import db from '../model/schema';

const RutasDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM Rutas', callback);
    },
    getById: (id: number, callback: (err: Error | null, row: any) => void) => {
        db.get('SELECT * FROM Rutas WHERE id = ?', [id], callback);
    },
    create: (ruta: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO Rutas (maquina) VALUES (?)`,
            [ruta.maquina],
            function (err) {
                callback(err);
            }
        );
    },
    update: (ruta: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE Rutas SET maquina = ? WHERE id = ?`,
            [ruta.maquina, ruta.id],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (id: number, callback: (err: Error | null) => void) => {
        db.run(`DELETE FROM Rutas WHERE id = ?`, [id], callback);
    },
};

export default RutasDAO;