import * as path from 'path';
import { procesarXLSX } from './ProcesoXSLX';
import { procesarXLS } from './ProcesoXSL';

export async function ProcesarArchivoExcel(filePath: string): Promise<void>{
   try{
        const extension = path.extname(filePath).toLocaleLowerCase();
    
        switch (extension) {
            case '.xls':
                await procesarXLS(filePath);
                break;
            case '.xlsx':
                await procesarXLSX(filePath);
                break;
        default:
                console.log("Tipo de archivo no soportado: ", filePath);
                break;
        }
    }catch(error){
        console.log("Error al analizar el archivo: ", error);
    }
}
