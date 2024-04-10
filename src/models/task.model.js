import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {Nombre_Cliente: {
    type: String,
    required: true,
    trim: true,
  },
  Apellido_Paterno: {
    type: String,
    required: true,
    trim: true,
  },
  Apellido_Materno: {
    type: String,
    required: true,
    trim: true,
  },
  Numero_1: {
    type: Number,
    required: true,
    trim: true,
  },
  Numero_2: {
    type: Number,
    required: true,
    trim: true,
  },
  Curp: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  DireccionReferencia: {
    type: String,
    required: true,
  },
    Nombre_Mascota: {
      type: String,
      required: true,
      trim: true,
    },
    FechaNacimiento: {
      type: Date,
      default: Date.now,
    },
    Raza: {
      type: String,
      required: true,
      trim: true,
    },
    Color: {
      type: String,
      required: true,
      trim: true,
    },
    Nombre_Vacuna: {
      type: String,
      required: true,
      trim: true,
    },
    FechaAplicacion: {
      type: Date,
      default: Date.now,
    },
    Dosis: {
      type: Number,
      required: true,
      trim: true,
    },
CondicionesEspeciales: {
      type: String,
      required: true,

    },
    Alimentacion: {
      type: String,
      required: true,
      trim: true,
    },
    Alergias: {
      type: String,
      trim: true,
    },
    ComentariosExtra: {
        type: String,
        required: true,
      },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
