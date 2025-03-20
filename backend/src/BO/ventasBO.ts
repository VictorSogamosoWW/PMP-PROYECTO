import PaisDAO from "../DAO/paisDAO";
import ProductoDAO from "../DAO/productoDAO";
import NegocioDAO from "../DAO/negocioDAO";
import LineaDAO from "../DAO/lineaDAO";
import MarcaDAO from "../DAO/marcaDAO";
import { negocioRow } from "../model/interfaces/negocio";
import { lineaRow } from "../model/interfaces/linea";
import { marcaRow } from "../model/interfaces/marca";
import { productoRow } from "../model/interfaces/producto";
import { existeLinea, existeMarca, existeNegocio, existePais, existeProducto } from "../utils/existeEntidad";

export function porcesarVentaBO(worksheet: any[][]){
    try {
        const columnasInteres = [
            'C', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Y', 'Z'
        ];

        const indicesColumnas = columnasInteres.map(columna => columna.charCodeAt(0) - 'A'.charCodeAt(0));

        for (let rowIndex = 3; rowIndex < worksheet.length; rowIndex++) {
            const row = worksheet[rowIndex];
            const datosFila: { [key: string]: any } = {}

            indicesColumnas.forEach((indiceColumna, index) => {
                const nombreColumna = columnasInteres[index];
                datosFila[nombreColumna] = row[indiceColumna];
            });

            //Extraer los datos relevantes
            const paisDestino = datosFila['C'];
            const negocioProducto = datosFila['F'];
            const nombreNegocioProducto = datosFila['G'];
            const lineaProducto = datosFila['H'];
            const nombreLineaProducto = datosFila['I'];
            const marcaProducto = datosFila['J'];
            const nombreMarcaProducto = datosFila['K'];
            const idProducto = datosFila['L'];
            const nombreProducto = datosFila['M'];
            const presentacionProducto = datosFila['N'];
            const ventaComercial = datosFila['Y'];
            const ventaEstadistica = datosFila['Z'];

            //Verificar y crear Negocio
            existeNegocio(nombreNegocioProducto, (errNegocio, negocioExiste) => {
                if (errNegocio) {
                    console.log("Error al verificar Negocio:", errNegocio);
                    return;
                }
                const negocioRow: negocioRow = { nombre: nombreNegocioProducto };
                NegocioDAO.create({ negocioPorducto: 1, nombre: negocioRow.nombre }, (errCreateNegocio) => {
                    if (errCreateNegocio) {
                        console.log("Error al crear Negocio:", errCreateNegocio);
                        return;
                    }
                    NegocioDAO.getIdByName(nombreNegocioProducto, (errIdNegocio, idNegocio) => {
                        if (errIdNegocio) {
                            console.log("Error al obtener ID de Negocio:", errIdNegocio);
                            return;
                        }
                        //Verificar y crear Linea
                        existeLinea(nombreLineaProducto, (errLinea, lineaExiste) => {
                            if (errLinea) {
                                console.log("Error al verificar Linea:", errLinea);
                                return;
                            }
                            const lineaRow: lineaRow = { nombre: nombreLineaProducto };
                            LineaDAO.create({ id: 1, nombre: lineaRow.nombre }, (errCreateLinea) => {
                                if (errCreateLinea) {
                                    console.log("Error al crear Linea:", errCreateLinea);
                                    return;
                                }
                                LineaDAO.getIdByName(nombreLineaProducto, (errIdLinea, idLinea) => {
                                    if (errIdLinea) {
                                        console.log("Error al obtener ID de Linea:", errIdLinea);
                                        return;
                                    }
                                    //Verificar y crear Marca
                                    existeMarca(nombreMarcaProducto, (errMarca, marcaExiste) => {
                                        if (errMarca) {
                                            console.log("Error al verificar Marca:", errMarca);
                                            return;
                                        }
                                        const marcaRow: marcaRow = { nombre: nombreMarcaProducto };
                                        MarcaDAO.create({ id: 1, nombre: marcaRow.nombre }, (errCreateMarca) => {
                                            if (errCreateMarca) {
                                                console.log("Error al crear Marca:", errCreateMarca);
                                                return;
                                            }
                                            MarcaDAO.getIdByName(nombreMarcaProducto, (errIdMarca, idMarca) => {
                                                if (errIdMarca) {
                                                    console.log("Error al obtener ID de Marca:", errIdMarca);
                                                    return;
                                                }
                                                //Verificar pais 
                                                existePais(paisDestino, (errPais, paisExiste) => {
                                                    if (errPais) {
                                                        console.log("Pais no encontrado en la base de datos: ", errPais);
                                                        return;
                                                    } else {
                                                        PaisDAO.create({ nombre: paisDestino }, (errCreatePais) => {
                                                            if (errCreatePais) {
                                                                console.log("Error al crear el pais: ", errCreatePais);
                                                                return;
                                                            }
                                                        });
                                                        PaisDAO.getIdByName(paisDestino, (errIdPais, idPais) => {
                                                            if (errIdPais) {
                                                                console.log("Error al obtener el pais creado: ", errIdPais);
                                                                return;
                                                            }
                                                            // Verificar producto
                                                            existeProducto(idProducto, (errProducto, productoExiste) => {
                                                                if (errProducto) {
                                                                    console.log("Producto no encontrado en la base de datos: ", errProducto);
                                                                    return;
                                                                }
                                                                const producto: Producto = {
                                                                    id: idProducto,
                                                                    nombre: nombreProducto,
                                                                    presentacion: presentacionProducto,
                                                                    idNegocio: idNegocio!,
                                                                    idLinea: idLinea!,
                                                                    idMarca: idMarca!
                                                                };
                                                                ProductoDAO.create(producto, (errCreateProducto) => {
                                                                    if (errCreateProducto) {
                                                                        console.log("Error al crear el producto: ", errCreateProducto);
                                                                        return;
                                                                    }
                                                                });
                                                            });
                                                        });
                                                    }
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });

                console.log(datosFila);
            }
        }
    } catch (error) {
        console.error("Error al procesar el archivo de ventas.xls: ", error);
    }
    console.log('Procesando ventas .xls');
    // Llamado de ETL
}