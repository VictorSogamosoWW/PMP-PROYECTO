<<<<<<< HEAD
import { tipoArchivo } from "./FileValidator";
import { ProcesarArchivoExcel } from "./excelProcess";

export async function analizarArchivo(filePath: string): Promise <void>{
    try{
        const analizeTipoArchivo = tipoArchivo(filePath);

        switch (analizeTipoArchivo) {
            case 'excel':
                await ProcesarArchivoExcel(filePath);
                break;
            case 'text':
                await ProcesarArchivosTexto(filePath);
            case 'ods':
                await ProcesarArchivosOds(filePath);
            default:
                console.log("Tipo de archivo no soportado: ", filePath);
        }
    }catch (error){
        console.error('Error al analizar el archivo: ', error);
    }
}
async function ProcesarArchivosTexto(filePath: string): Promise<void> {
    try {
      // Lógica para procesar archivos de texto plano
      console.log('Procesando archivo de texto plano:', filePath);
    } catch (error) {
      console.error('Error al procesar archivo de texto plano:', error);
    }
  }
  
  async function ProcesarArchivosOds(filePath: string): Promise<void> {
    try {
      // Lógica para procesar archivos ODS
      console.log('Procesando archivo ODS:', filePath);
    } catch (error) {
      console.error('Error al procesar archivo ODS:', error);
    }
  }
=======
import * as fs from 'fs';
import * as exceljs from 'exceljs';

export async function analyzeFile(filePath: string): Promise <void> {
    try{
        const workbook = new exceljs.Workbook();
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(1);
        if (worksheet){
            if (await isPronosticosFile(worksheet)){
                processPronosticosFile(filePath);
            }else if (isBodegasFile(fileContent)){
                processBodegasFile(filePath);
            }else if (isRutasFile(fileContent)){
                processRutasFile(filePath);
            }else if (isInsumosFile(fileContent)){
                processInsumosFile(filePath);
            }else if (await isVentasFile(worksheet)){
                processVentasFile(filePath);
            }else if (isCapacidadFile(fileContent)){
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
function isPronosticosFile(fileContent: String): boolean {
    return fileContent.includes('Pronosticos') && fileContent.includes('Venta');
}

function isBodegasFile(fileContent: String): boolean {
    return fileContent.includes('Bodega');
}

function isRutasFile(fileContent: String): boolean {
    return fileContent.includes('Rutas');
}

function isInsumosFile(fileContent: String): boolean {
    return fileContent.includes('Insumos');
}

async function isVentasFile(worksheet: exceljs.Worksheet): Promise <boolean> {
    const firstRow = worksheet.getRow(1);
    const ninthRow = worksheet.getRow(9);

    if (firstRow.getCell(1).toString().includes('Reporte de ventas') &&
    ninthRow.getCell(1).toString().includes('Producto') &&
    ninthRow.getCell(2).toString().includes('Cantidad')) {
    return true;
  }

  return false;
}

function isCapacidadFile(fileContent: String): boolean {
    return fileContent.includes('Capacidad');
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
>>>>>>> 1238d59558643b1305fd11d6217fa0fc62254847
