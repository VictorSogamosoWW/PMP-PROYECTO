import db from '../model/schema';
import { lineaRow } from '../model/interfaces/linea';

const LineaDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM Linea', callback);
    },
    getById: (id: number, callback: (err: Error | null, row: any) => void) => {
        db.get('SELECT * FROM Linea WHERE id = ?', [id], callback);
    },
    getIdByName: (nombreLinea: string, callback: (err: Error | null, idPais: number | null)=> void)=>{
        db.get('SELECT id FROM Linea WHERE nombre = ?', [nombreLinea], (err, row: lineaRow) => {
            if (err) {
                callback(err, null);
                return;
            }
            if (row) {
                callback(null, row.id);
            } else {
                callback(null, null); 
            }
        });
    },
    create: (linea: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO Linea (nombre) VALUES (?)`,
            [linea.nombre],
            function (err) {
                callback(err);
            }
        );
    },
    update: (linea: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE Linea SET nombre = ? WHERE id = ?`,
            [linea.nombre, linea.id],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (id: number, callback: (err: Error | null) => void) => {
        db.run(`DELETE FROM Linea WHERE id = ?`, [id], callback);
    },
};

export default LineaDAO;