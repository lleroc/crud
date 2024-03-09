import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { IEmpleado } from './empleado.interface';

@Controller('empleados')
export class EmpleadosController {
  constructor(private empleadosServicio: EmpleadosService) {}

  @Get()
  todos() {
    return this.empleadosServicio.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.empleadosServicio.uno(id);
  }
  @Post()
  insertar(@Body() empleado: IEmpleado) {
    return this.empleadosServicio.insertar(empleado);
  }
  @Put(':id')
  actualizar(@Param('id') id: string, @Body() empleado: IEmpleado) {
    return this.empleadosServicio.actualizar(id, empleado);
  }
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.empleadosServicio.eliminar(id);
  }
}
