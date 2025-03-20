import { paisRow } from '../model/interfaces/pais';
import db from '../model/schema';

const PaisDAO = {
    getAll: (callback: (err: Error | null, rows: any[]) => void) => {
        db.all('SELECT * FROM Pais', callback);
    },
    getById: (id: number, callback: (err: Error | null, row: any) => void) => {
        db.get('SELECT * FROM Pais WHERE id = ?', [id], callback);
    },
    getByName: (nombrePais: string, callback: (err: Error | null, row: any)=>void)=>{
        db.get('SELECT * FROM Pais WHERE nombre = ?',[nombrePais], callback);
    },
    getIdByName: (nombrePais: string, callback: (err: Error | null, idPais: number | null)=> void)=>{
        db.get('SELECT id FROM Pais WHERE nombre = ?', [nombrePais], (err, row: paisRow) => {
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
    create: (pais: any, callback: (err: Error | null) => void) => {
        db.run(
            `INSERT INTO Pais (nombre) VALUES (?)`,
            [pais.nombre],
            function (err) {
                callback(err);
            }
        );
    },
    update: (pais: any, callback: (err: Error | null) => void) => {
        db.run(
            `UPDATE Pais SET nombre = ? WHERE id = ?`,
            [pais.nombre, pais.id],
            function (err) {
                callback(err);
            }
        );
    },
    delete: (id: number, callback: (err: Error | null) => void) => {
        db.run(`DELETE FROM Pais WHERE id = ?`, [id], callback);
    },
};

export default PaisDAO;