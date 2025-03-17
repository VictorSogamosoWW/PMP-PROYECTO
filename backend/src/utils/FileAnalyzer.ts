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