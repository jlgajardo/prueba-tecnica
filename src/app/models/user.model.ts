export interface UserModel {
  id: number;
  nombre: string;
  apellido: string;
  telefono: number;
  rut: string;
  fechaNacimiento: string;
  direccion: Direccion;
  activo: number;
  rutValido?: boolean
}


export interface Direccion {
  calle: string;
  numero: number;
  comuna: string;
}
