import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useTasks } from "../context/tasksContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateTask(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createTask({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      // navigate("/tasks");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("Nombre_Cliente", task.Nombre_Cliente);
        setValue("Apellido_Paterno", task.Apellido_Paterno);
        setValue("Apellido_Materno", task.Apellido_Materno);
        setValue("Numero_1", task.Numero_1);
        setValue("Numero_2", task.Numero_2);
        setValue("Curp", task.Curp);
        setValue("DireccionRferencia", task.DireccionReferencia);
        setValue("Nombre_Mascota", task.Nombre_Mascota);
        setValue(
          "FechaNacimiento",
          task.FechaNacimiento ? dayjs(task.FechaNacimiento).utc().format("YYYY-MM-DD") : ""
        );
        setValue("Raza", task.Raza);
        setValue("Color", task.Color);
        //setValue("Tamaño", task.Tamaño);
        setValue("Nombre_Vacuna", task.Nombre_Vacuna);
        setValue(
          "FechaAplicacion",
          task.FechaAplicacion ? dayjs(task.FechaAplicacion).utc().format("YYYY-MM-DD") : ""
        );
        setValue("Dosis", task.Dosis);
        setValue("CondicionesEspeciales", task.CondicionesEspeciales);
        setValue("Alimentacion", task.Alimentacion);
        setValue("Alergias", task.Alergias);
        setValue("ComentariosExtra", task.ComentariosExtra);
        setValue("completed", task.completed);
      }
    };
    //loadTask();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="Nombre_Cliente">Nombre del cliente</Label>
        <Input
          type="text"
          name="Nombre_Cliente"
          placeholder="Nombre(s)"
          {...register("Nombre_Cliente")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}

        <Label htmlFor="Apellido_Paterno">Apellido Paterno</Label>
        <Input
          type="text"
          name="Apellido_Paterno"
          placeholder="Apellido paterno"
          {...register("Apellido_Paterno")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}

        <Label htmlFor="Apellido_Materno">Apellido Materno</Label>
        <Input
          type="text"
          name="Apellido_Materno"
          placeholder="Apellido Materno"
          {...register("Apellido_Materno")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}

        <Label htmlFor="Numero_1">Numero de celular</Label>
        <Input
          type="text"
          name="Numero_1"
          placeholder="Numero de celular"
          {...register("Numero_1")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}

        <Label htmlFor="Numero_2">Numero de casa</Label>
        <Input
          type="text"
          name="Numero_2"
          placeholder="Numero de casa"
          {...register("Numero_2")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="Curp">CURP</Label>
        <Input
          type="text"
          name="Curp"
          placeholder="CURP"
          {...register("Curp")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="Email">Email</Label>
        <Input
          type="text"
          name="Email"
          placeholder="Email"
          {...register("Email")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="DireccionReferencia">Direccion de referencia</Label>
        <Input
          type="text"
          name="DireccionReferencia"
          placeholder="Direccion de referencia"
          {...register("DireccionReferencia")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="Nombre_Mascota">Nombre de la Mascota</Label>
        <Input
          type="text"
          name="Nombre_Mascota"
          placeholder="Nombre de la Mascota"
          {...register("Nombre_Mascota")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}

        <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
        <Input type="date" name="fechaNacimiento" {...register("fechaNacimiento")} />

        <Label htmlFor="Raza">Raza</Label>
        <Input
          type="text"
          name="Raza"
          placeholder="Raza"
          {...register("Raza")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="Color">Color</Label>
        <Input
          type="text"
          name="Color"
          placeholder="Color"
          {...register("Color")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Porfavor ingrese su nombre.</p>
        )}
        <Label htmlFor="Nombre_Vacuna">Vacuna(s) aplicadas </Label>
        <Input
          type="text"
          name="Nombre_Vacuna"
          placeholder="Nombre de vacuna(s) aplicadas"
          {...register("Nombre_Vacuna")}
          autoFocus
        />

        <Label htmlFor="FechaAplicaciones">Fecha de Aplicacion</Label>
        <Input type="date" name="FechaAplicaciones" {...register("FechaAplicaciones")} />

        <Label htmlFor="Dosis">Dosis</Label>
        <Input
          type="text"
          name="Dosis"
          placeholder="Numero de dosis aplicadas"
          {...register("Dosis")}
          autoFocus
        />

        <Label htmlFor="CondicionesEspeciales">Condiciones Especiales</Label>
        <Textarea
          name="CondicionesEspeciales"
          id="CondicionesEspeciales"
          rows="3"
          placeholder="Condiciones Especiales"
          {...register("CondicionesEspeciales")}
        ></Textarea>
      
        <Label htmlFor="Alimentacion">Alimentación</Label>
        <Textarea
          name="Alimentacion"
          id="Alimentacion"
          rows="3"
          placeholder="Alimentación"
          {...register("Alimentacion")}
        ></Textarea>
        
        <Label htmlFor="Alergias">Alergias</Label>
        <Textarea
          name="Alergias"
          id="Alergias"
          rows="3"
          placeholder="Alergias"
          {...register("Alergias")}
        ></Textarea>

        <Label htmlFor="ComentariosExtra">Comentarios Extra</Label>
        <Textarea
          name="ComentariosExtra"
          id="ComentariosExtra"
          rows="3"
          placeholder="Comentarios Extra"
          {...register("ComentariosExtra")}
        ></Textarea>
        
        <Button>Save</Button>
      </form>
    </Card>
  );
}
