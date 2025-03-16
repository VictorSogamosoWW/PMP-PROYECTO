import * as fs from 'fs';

export function analyzeFile(filePath: string): void {
    try{
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        if (isPronosticosFile(fileContent)){
            processPronosticosFile(filePath);
        }else if (isBodegasFile(fileContent)){
            processBodegasFile(filePath);
        }else if (isRutasFile(fileContent)){
            processRutasFile(filePath);
        }else if (isInsumosFile(fileContent)){
            processInsumosFile(filePath);
        }else if (isVentasFile(fileContent)){
            processVentasFile(filePath);
        }else if (isCapacidadFile(fileContent)){
            processCapacidadFile(filePath);
        }else{
            console.log('Tipo de archivo no reconocido: ', filePath);
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

function isVentasFile(fileContent: String): boolean {
    return fileContent.includes('Ventas');
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