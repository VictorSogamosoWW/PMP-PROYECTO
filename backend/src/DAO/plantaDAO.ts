// model/dao/plantaDAO.ts
import db from '../model/schema'; // Corrected import path

const PlantaDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM Planta', callback);
    },
    getById: (id: number, callback: (err: Error | null, row: any) => void) => {
        db.get('SELECT * FROM Planta WHERE id = ?', [id], callback);
    },
    create: (planta: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO Planta (nombre) VALUES (?)`,
            [planta.nombre],
            function (err) {
                callback(err);
            }
        );
    },
    update: (planta: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE Planta SET nombre = ? WHERE id = ?`,
            [planta.nombre, planta.id],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (id: number, callback: (err: Error | null) => void) => {
        db.run(`DELETE FROM Planta WHERE id = ?`, [id], callback);
    },
};

export default PlantaDAO;