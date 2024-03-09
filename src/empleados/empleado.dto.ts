import {
  IsDate,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class EmpleadoDTO {
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  nombres: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  apellidos: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsNumber()
  edad: number;
  @IsNotEmpty({ message: 'El campo es requerido' })
  fecha_nacimientos: Date;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString()
  cedula: string;

  //@IsEmail()
  //email: string;
}
