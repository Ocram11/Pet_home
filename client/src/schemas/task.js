import { z } from "zod";

export const taskSchema = z.object({
  Nombre_Cliente: z.string({
    required_error: "Nombre is required",
  }),
  Apellido_Paterno: z.string({
    required_error: "Apellido Paterno is required",
  }),
  Apellido_Materno: z.string({
    required_error: "Apellido Materno is required",
  }),
  Numero_1: z.string({
    required_error: "Numero is required",
  }),
  Numero_2: z.string({
    required_error: "Numero is required",
  }),
  Curp: z.string({
      required_error: "CURP is required",     
  }),
  Email: z.string({
    required_error: "Email is required",     
}),
  DireccionReferencia: z.string({
    required_error: "Direccion is required",     
}),
Nombre_Mascota: z.string({
  required_error: "Nombre Mascota is required",     
}),
Raza: z.string({
  required_error: "Raza is required",     
}),
Color: z.string({
  required_error: "Color is required",     
}),
Alimentacion: z.string({
  required_error: "Alimentacion is required",     
}),
  Nombre_Vacuna: z.string().optional(),
  FechaNacimiento: z.string().datetime().optional(),
  FechaAplicacion: z.string().datetime().optional(),
  Dosis: z.string().optional(),
  CondicionesEspeciales: z.string().optional(),
  Alergias: z.string().optional(),
  CopmentariosExtra: z.string().optional(),
});


