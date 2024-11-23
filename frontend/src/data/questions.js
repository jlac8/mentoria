export const questionsByRole = {
  Escolar: {
    AS_IS: [
      {
        field: "name",
        label: "Nombre",
        type: "text",
        placeholder: "Ejemplo: Juan Pérez",
      },
      {
        field: "currentHabits",
        label: "Hábitos Actuales",
        type: "text",
        placeholder: "Ejemplo: Estudio 2 horas al día",
      },
    ],
    TO_BE: [
      {
        field: "desiredHabits",
        label: "Hábitos Deseados",
        type: "text",
        placeholder: "Ejemplo: Estudiar 4 horas al día",
      },
      {
        field: "futureGoals",
        label: "Metas Futuras",
        type: "text",
        placeholder: "Ejemplo: Ser ingeniero",
      },
    ],
  },
  Universitario: {
    AS_IS: [
      {
        field: "name",
        label: "Nombre",
        type: "text",
        placeholder: "Ejemplo: María López",
      },
      {
        field: "currentCourses",
        label: "Cursos Actuales",
        type: "text",
        placeholder: "Ejemplo: Algoritmos y Estructuras de Datos",
      },
    ],
    TO_BE: [
      {
        field: "desiredSkills",
        label: "Habilidades Deseadas",
        type: "text",
        placeholder: "Ejemplo: Dominar inteligencia artificial",
      },
      {
        field: "careerGoals",
        label: "Metas de Carrera",
        type: "text",
        placeholder: "Ejemplo: Trabajar en Google",
      },
    ],
  },
  Profesional: {
    AS_IS: [
      {
        field: "residence",
        label: "Lugar de residencia",
        type: "text",
        placeholder: "Lima",
      },
      {
        field: "currentObstacles",
        label: "Obstáculos actuales y retos",
        type: "text",
        placeholder: "Falta de habilidades técnicas avanzadas",
      },
      {
        field: "personalInterests",
        label: "Intereses personales y pasiones",
        type: "text",
        placeholder: "Fotografía, senderismo",
      },
      {
        field: "linkedin",
        label: "Perfil de LinkedIn",
        type: "file",
        info: "Descarga tu perfil de LinkedIn como PDF. Ve a tu perfil, haz clic en 'Recursos' y selecciona 'Guardar como PDF'.",
      },
    ],
    TO_BE: [
      {
        field: "desiredPosition",
        label: "Puesto Deseado",
        type: "text",
        placeholder: "Ejemplo: Líder técnico",
      },
      {
        field: "professionalGoals",
        label: "Metas Profesionales",
        type: "text",
        placeholder: "Ejemplo: Lanzar un producto exitoso",
      },
    ],
  },
  Emprendedor: {
    AS_IS: [
      {
        field: "name",
        label: "Nombre",
        type: "text",
        placeholder: "Ejemplo: Sofía García",
      },
      {
        field: "currentBusiness",
        label: "Negocio Actual",
        type: "text",
        placeholder: "Ejemplo: EcoSostenible",
      },
    ],
    TO_BE: [
      {
        field: "businessVision",
        label: "Visión de Negocio",
        type: "text",
        placeholder: "Ejemplo: Expandir a nivel internacional",
      },
      {
        field: "desiredImpact",
        label: "Impacto Deseado",
        type: "text",
        placeholder: "Ejemplo: Reducir la huella de carbono",
      },
    ],
  },
};
