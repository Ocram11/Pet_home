import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user : req.user.id }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { Nombre_Cliente,
      Apellido_Paterno,
      Apellido_Materno,
      Numero_1,
      Numero_2,
      Curp,
      Email,
      DireccionReferencia,
      Nombre_Mascota,
      FechaNacimiento,
      Raza,
      Color,
      Nombre_Vacuna,
      FechaAplicacion,
      Dosis,
      CondicionesEspeciales,
      Alimentacion,
      Alergias,
      ComentariosExtra,
 } = req.body;
    const newTask = new Task({
      Nombre_Cliente,
      Apellido_Paterno,
      Apellido_Materno,
      Numero_1,
      Numero_2,
      Curp,
      Email,
      DireccionReferencia,
      Nombre_Mascota,
      FechaNacimiento,
      Raza,
      Color,
      Nombre_Vacuna,
      FechaAplicacion,
      Dosis,
      CondicionesEspeciales,
      Alimentacion,
      Alergias,
      ComentariosExtra
    });
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message+"prueba" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask)
      return res.status(404).json({ message: "Reserva not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { Nombre_Cliente,
      Apellido_Paterno,
      Apellido_Materno,
      Numero_1,
      Numero_2,
      Curp,
      Email,
      DireccionReferencia,
      Nombre_Mascota,
      FechaNacimiento,
      Raza,
      Color,
      Nombre_Vacuna,
      FechaAplicacion,
      Dosis,
      CondicionesEspeciales,
      Alimentacion,
      Alergias,
      ComentariosExtra } = req.body;
    const taskUpdated = await Task.findOneAndUpdate(
      { _id: req.params.id },
      { Nombre_Cliente,
        Apellido_Paterno,
        Apellido_Materno,
        Numero_1,
        Numero_2,
        Curp,
        Email,
        DireccionReferencia,
        Nombre_Mascota,
        FechaNacimiento,
        Raza,
        Color,
        Nombre_Vacuna,
        FechaAplicacion,
        Dosis,
        CondicionesEspeciales,
        Alimentacion,
        Alergias,
        ComentariosExtra },
      { new: true }
    );
    return res.json(taskUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Reserva not found" });
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
