import PaisDAO from "../DAO/paisDAO";
import ProductoDAO from "../DAO/productoDAO";
import NegocioDAO from '../DAO/negocioDAO';
import LineaDAO from '../DAO/lineaDAO';
import MarcaDAO from '../DAO/marcaDAO';

export const existePais = (paisNombre: string, callback: (err: Error|null, existe: boolean)=>void)=>{
    PaisDAO.getByName(paisNombre, (errPais, paisExistente)=>{
        if(errPais){
            callback(errPais, false);
            return;
        }
        callback(null, !!paisExistente);
    });
};

export const existeProducto = (productoId: number, callback: (err: Error | null, existe: boolean)=> void)=>{
    ProductoDAO.getById(productoId, (errProducto, productoExistente)=>{
        if(errProducto){
            callback(errProducto, false);
            return;
        }
        callback(null, !!productoExistente);
    });
};

export const existeNegocio = (negocioNombre: string, callback: (err: Error | null, existe: boolean) => void) => {
    NegocioDAO.getIdByName(negocioNombre, (errNegocio, negocioExistente) => {
        if (errNegocio) {
            callback(errNegocio, false);
            return;
        }
        callback(null, !!negocioExistente);
    });
};

export const existeLinea = (lineaNombre: string, callback: (err: Error | null, existe: boolean) => void) => {
    LineaDAO.getIdByName(lineaNombre, (errLinea, lineaExistente) => {
        if (errLinea) {
            callback(errLinea, false);
            return;
        }
        callback(null, !!lineaExistente);
    });
};

export const existeMarca = (marcaNombre: string, callback: (err: Error | null, existe: boolean) => void) => {
    MarcaDAO.getIdByName(marcaNombre, (errMarca, marcaExistente) => {
        if (errMarca) {
            callback(errMarca, false);
            return;
        }
        callback(null, !!marcaExistente);
    });
};