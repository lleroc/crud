import { Injectable } from '@nestjs/common';
import { IEmpleado } from './empleado.interface';
import { v4 as uuidV4 } from 'uuid';
import { EmpleadoDTO } from './empleado.dto';

@Injectable()
export class EmpleadosService {
  empleados: IEmpleado[] = [];
  todos() {
    return this.empleados;
  }
  uno(id: string) {
    return this.empleados.find((empleado) => empleado.id == id);
  }
  insertar(empleado: EmpleadoDTO) {
    const emp = {
      id: uuidV4(),
      ...empleado,
    };
    this.empleados.push(emp);
    return this.empleados;
  }
  actualizar(id: string, empleadoActualziar: EmpleadoDTO) {
    const nuevoemp = { id, ...empleadoActualziar };
    this.empleados = this.empleados.map((empleado) =>
      empleado.id === id ? nuevoemp : empleado,
    );
    return nuevoemp;
  }
  eliminar(id: string) {
    this.empleados = this.empleados.filter((empleado) => empleado.id !== id);
    return 'empleado Eliminado';
  }
}
