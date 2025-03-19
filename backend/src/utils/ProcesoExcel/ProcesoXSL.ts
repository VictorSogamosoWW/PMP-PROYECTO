import * as nodeXls from 'node-xlsx';
import { normalizarString } from '../MayusAMinus';

export async function procesarXLS(filePath: string): Promise<void> {
    try {
        const workSheetsFromFile = nodeXls.parse(filePath);

        if (workSheetsFromFile && workSheetsFromFile.length > 0) {
            const worksheet = workSheetsFromFile[0].data; // Obtener los datos de la primera hoja

            if (await isPronosticosFileXls(worksheet)) {
                processPronosticosFileXls(worksheet);
            } else if (await isBodegasFileXls(worksheet)) {
                processBodegasFileXls(worksheet);
            } else if (await isRutasFileXls(worksheet)) {
                processRutasFileXls(worksheet);
            } else if (await isInsumosFileXls(worksheet)) {
                processInsumosFileXls(worksheet);
            } else if (await isVentasFileXls(worksheet)) {
                processVentasFileXls(worksheet);
                console.log("Archivo de ventas .xls procesado con éxito");
            } else if (await isCapacidadFileXls(worksheet)) {
                processCapacidadFileXls(worksheet);
            } else {
                console.log('Tipo de archivo .xls no reconocido: ', filePath);
            }
        } else {
            console.log("No se encontraron hojas de cálculo .xls: ", filePath);
        }
    } catch (error) {
        console.log('Error al analizar el archivo .xls: ', error);
    }
}

// Funciones para detectar tipos de archivos .xls
async function isPronosticosFileXls(worksheet: any[][]): Promise<boolean> {
    // Lógica de verificación de archivos de pronósticos .xls
    return false;
}

async function isBodegasFileXls(worksheet: any[][]): Promise<boolean> {
    // Lógica de verificación de archivos de bodegas .xls
    return false;
}

async function isRutasFileXls(worksheet: any[][]): Promise<boolean> {
    // Lógica de verificación de archivos de rutas .xls
    return false;
}

async function isInsumosFileXls(worksheet: any[][]): Promise<boolean> {
    // Lógica de verificación de archivos de insumos .xls
    return false;
}

async function isVentasFileXls(worksheet: any[][]): Promise<boolean> {
    if (worksheet && worksheet.length > 0 && worksheet[0].length > 0) {
        const cellA1 = normalizarString(worksheet[0][0].toString()); // Acceder a la celda A1
        if (cellA1 === 'clasificaciondinamicacolocacion') {
            console.log("Archivo de ventas .xls identificado correctamente");
            return true;
        }
    }
    return false;
}

async function isCapacidadFileXls(worksheet: any[][]): Promise<boolean> {
    // Lógica de verificación de archivos de capacidad .xls
    return false;
}

// Funciones para procesar tipos de archivos .xls
function processPronosticosFileXls(worksheet: any[][]): void {
    // Lógica de procesamiento de pronósticos .xls
    console.log('Procesando pronósticos .xls');
    // Llamado de ETL
}

function processBodegasFileXls(worksheet: any[][]): void {
    // Lógica de procesamiento de bodegas .xls
    console.log('Procesando bodegas .xls');
    // Llamado de ETL
}

function processRutasFileXls(worksheet: any[][]): void {
    // Lógica de procesamiento de rutas .xls
    console.log('Procesando rutas .xls');
    // Llamado de ETL
}

function processInsumosFileXls(worksheet: any[][]): void {
    // Lógica de procesamiento de insumos .xls
    console.log('Procesando insumos .xls');
    // Llamado de ETL
}

function processVentasFileXls(worksheet: any[][]): void {
    // Lógica de procesamiento de ventas .xls
    try {
        const columnasInteres = [
            'C', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Y', 'Z'
        ];

        const indicesColumnas = columnasInteres.map(columna => columna.charCodeAt(0) - 'A'.charCodeAt(0));

        for (let rowIndex = 3; rowIndex < 10/*worksheet.length*/; rowIndex++){
            const row = worksheet[rowIndex];
            const datosFila: {[key: string]: any} = {}

            indicesColumnas.forEach((indiceColumna, index)=>{
                const nombreColumna = columnasInteres[index];
                datosFila[nombreColumna] = row[indiceColumna];
            });

            console.log(datosFila);
        }
    } catch (error) {
        console.error("Error al procesar el archivo de ventas.xls: ", error);
    }
    console.log('Procesando ventas .xls');
    // Llamado de ETL
}

function processCapacidadFileXls(worksheet: any[][]): void {
    // Lógica de procesamiento de capacidad .xls
    console.log('Procesando capacidad .xls');
    // Llamado de ETL
}