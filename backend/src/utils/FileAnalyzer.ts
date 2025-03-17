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