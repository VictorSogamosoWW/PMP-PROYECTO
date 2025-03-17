import * as exceljs from 'exceljs';
import { normalizarString } from './MayusAMinus';

export async function ProcesarArchivoExcel(filePath: string): Promise<void>{
    try{
        const workbook = new exceljs.Workbook();
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(1);
        if (worksheet){
            if (await isPronosticosFile(worksheet)){
                processPronosticosFile(filePath);
            }else if (await isBodegasFile(worksheet)){
                processBodegasFile(filePath);
            }else if (await isRutasFile(worksheet)){
                processRutasFile(filePath);
            }else if (await isInsumosFile(worksheet)){
                processInsumosFile(filePath);
            }else if (await isVentasFile(worksheet)){
                processVentasFile(filePath);
                console.log("Archivo de ventas procesado con exito ");
            }else if (await isCapacidadFile(worksheet)){
                processCapacidadFile(filePath);
            }else{
                console.log('Tipo de archivo no reconocido: ', filePath);
            }
        }else{
            console.log("No se encontro la hoja de calculo: ", filePath);
        }
    }catch (error){
        console.log('Error al analizar el archivo: ', error);
    }
}
    
//Funciones para detectar tipos de archivos
async function isPronosticosFile(worksheet: exceljs.Worksheet): Promise <boolean> {
    return false;
}
    
async function isBodegasFile(worksheet: exceljs.Worksheet): Promise <boolean> {
    //Logica de verificacionde archivos de bodegas
    return false;
}
    
async function isRutasFile(worksheet: exceljs.Worksheet): Promise <boolean> {
    //Logica de verificacion de archivo rutas
    return false;
}
    
async function isInsumosFile(worksheet: exceljs.Worksheet): Promise <boolean>{
    //Logica de verificacion de archivo insumo
    return false;
}
    
async function isVentasFile(worksheet: exceljs.Worksheet): Promise <boolean> {
    if (worksheet) {
        const cellA1 = normalizarString(worksheet.getCell('A1').toString());
        if(cellA1 === 'clasificaciondinamicacolocacion'){
            console.log("Archivo identificado correctamente");
            return true;
        }
    }
    return false;
}
    
async function isCapacidadFile(worksheet: exceljs.Worksheet): Promise <boolean> {
    //Logica de verificacion de archivo capacidad
    return false;
}
    
//Funciones para procesar tipos de archivos
function processPronosticosFile(filePath: String): void {
    //Logica de procesado
    console.log('Procesando pronosticos: ', filePath);
    //Llamado de ETL
}
    
function processBodegasFile(filePath: String): void {
    //Logica de procesado
    console.log('Procesando bodegas: ', filePath);
    //Llamado de ETL
}
    
    
function processRutasFile(filePath: String): void {
    //Logica de procesado
    console.log('Procesando rutas: ', filePath);
    //Llamado de ETL
}
    
    
function processInsumosFile(filePath: String): void {
    //Logica de procesado
    console.log('Procesando insumos: ', filePath);
    //Llamado de ETL
}
    
    
function processVentasFile(filePath: String): void {
    //Logica de procesado
    console.log('Procesando ventas: ', filePath);
    //Llamado de ETL
}
    
function processCapacidadFile(filePath: String): void {
    //Logica de procesado
    console.log('Procesando capacidad: ', filePath);
    //Llamado de ETL
}