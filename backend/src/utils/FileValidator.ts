import * as path from 'path';

export function tipoArchivo(filePath: string): string {
  const extension = path.extname(filePath).toLocaleLowerCase();
  switch (extension) {
    case '.xlsx':
    case '.xls':
      return 'excel';
    case '.csv':
    case '.txt':
      return 'text';
    case '.ods':
      return 'ods';
    default:
      return 'desconocido';
  }
}

export function esArchivoValido(filePath: string): boolean {
  const extensionesPermitidas = ['.xlsx', '.xls', '.xlsm', '.csv', '.txt', '.ods'];
  const extension = path.extname(filePath).toLocaleLowerCase();
  // Agregamos logs para inspeccionar la extensión y las extensiones permitidas
  console.log('Extension:', extension);
  console.log('Extensiones permitidas:', extensionesPermitidas);
  return extensionesPermitidas.includes(extension);
}