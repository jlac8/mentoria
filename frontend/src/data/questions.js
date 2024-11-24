export const questionsByRole = {
  Escolar: {
    AS_IS: [
      {
        field: "age",
        label: "¿Qué edad tienes?",
        type: "number",
        placeholder: "15",
      },
      {
        field: "interests",
        label: "¿Cuáles son tus intereses y pasatiempos?",
        type: "textarea",
        placeholder: "Me gusta pintar, jugar fútbol, leer sobre ciencia",
      },
      {
        field: "favoriteSubjects",
        label: "¿Qué materias te gustan más?",
        type: "text",
        placeholder: "Matemáticas, Historia",
      },
      {
        field: "leastFavoriteSubjects",
        label: "¿Qué materias te gustan menos o encuentras más difíciles?",
        type: "text",
        placeholder: "Física, Inglés",
      },
      {
        field: "skillsAndTalents",
        label: "¿En qué cosas consideras que eres bueno?",
        type: "textarea",
        placeholder: "Dibujo, programación, hablar en público",
      },
    ],
    TO_BE: [
      {
        field: "goalsAndDreams",
        label: "¿Cuáles son tus metas y sueños para el futuro?",
        type: "textarea",
        placeholder:
          "Quiero ser médico y ayudar a personas en comunidades remotas",
      },
      {
        field: "idealLifestyle",
        label: "¿Cómo te imaginas tu estilo de vida ideal?",
        type: "textarea",
        placeholder: "Quiero trabajar desde casa y tener tiempo para viajar",
      },
      {
        field: "roleModel",
        label: "¿Quién es una persona que admiras y por qué?",
        type: "textarea",
        placeholder: "Admiro a mi profesora porque es muy paciente y creativa",
      },
      {
        field: "opportunities",
        label:
          "¿Qué oportunidades o recursos crees que tienes para lograr tus metas?",
        type: "textarea",
        placeholder: "Mi familia me apoya y tengo acceso a una buena escuela",
      },
      {
        field: "priorities",
        label: "¿Qué es lo más importante para ti en la vida?",
        type: "textarea",
        placeholder: "Ayudar a los demás y ser feliz con lo que hago",
      },
    ],
  },
  Universitario: {
    AS_IS: [
      {
        field: "currentCareer",
        label: "¿Qué carrera estás estudiando?",
        type: "text",
        placeholder: "Ingeniería de Sistemas, Psicología, Medicina",
      },
      {
        field: "university",
        label: "¿En qué universidad estudias?",
        type: "text",
        placeholder: "Universidad Nacional Autónoma de México",
      },
      {
        field: "yearsLeft",
        label: "¿Cuánto tiempo te falta para terminar tu carrera?",
        type: "text",
        placeholder: "4 semestres, 3 años",
      },
      {
        field: "favoriteSubject",
        label: "¿Cuáles son tus materias favoritas?",
        type: "text",
        placeholder: "Programación avanzada, Psicología clínica",
      },
      {
        field: "englishLevel",
        label: "¿Cuál es tu nivel de inglés?",
        type: "text",
        placeholder:
          "A1 (básico), A2, B1, B2 (intermedio avanzado), C1, C2 (proficiente)",
      },
    ],
    TO_BE: [
      {
        field: "interests",
        label: "¿Cuáles son tus intereses dentro o fuera de tu carrera?",
        type: "text",
        placeholder:
          "Desarrollo de videojuegos, análisis de datos, diseño gráfico, fotografía",
      },
      {
        field: "skillsToImprove",
        label: "¿Qué habilidades te gustaría perfeccionar?",
        type: "text",
        placeholder:
          "Liderazgo, hablar en público, programación en Python, gestión de proyectos",
      },
      {
        field: "careerGoals",
        label: "¿Cuáles son tus objetivos profesionales?",
        type: "text",
        placeholder:
          "Trabajar en una empresa tecnológica, ser emprendedor, realizar investigaciones científicas",
      },
      {
        field: "workStyle",
        label: "¿Qué tipo de ambiente laboral prefieres?",
        type: "text",
        placeholder: "Trabajo en equipo, remoto, flexible, en oficina",
      },
      {
        field: "extracurricularActivities",
        label:
          "¿Qué actividades extracurriculares te gustaría seguir haciendo o comenzar?",
        type: "text",
        placeholder:
          "Participar en hackathones, practicar deportes, voluntariado",
      },
    ],
  },
  Profesional: {
    AS_IS: [
      {
        field: "Residencia",
        label: "Lugar de residencia",
        type: "text",
        placeholder: "Lima, Madrid, Bogotá.",
      },
      {
        field: "DisfrutaDelTrabajo",
        label: "¿Qué es lo que más disfrutas de tu trabajo?",
        type: "text",
        placeholder: "Resolver problemas complejos, colaborar con mi equipo.",
      },
      {
        field: "NoDisfrutaDelTrabajo",
        label: "¿Qué es lo que menos disfrutas de tu trabajo?",
        type: "text",
        placeholder: "Reuniones largas, falta de retos técnicos.",
      },
      {
        field: "Hobbies",
        label: "¿Cuáles son tus pasatiempos?",
        type: "text",
        placeholder: "Leer, hacer ejercicio, tocar la guitarra.",
      },
      {
        field: "Linkedin",
        label: "Perfil de LinkedIn",
        type: "file",
        info: "Descarga tu perfil de LinkedIn como PDF. Ve a tu perfil, haz clic en 'Recursos' y selecciona 'Guardar como PDF'.",
      },
    ],
    TO_BE: [
      {
        field: "HabilidadesQueMejorar",
        label: "¿Qué habilidades te gustaría perfeccionar?",
        type: "text",
        placeholder: "Liderazgo, programación en Python.",
      },
      {
        field: "EntornoLaboral",
        label: "¿Cuál sería tu entorno laboral ideal?",
        type: "text",
        placeholder: "Trabajo remoto, o en una empresa nearshore.",
      },
      {
        field: "RecursosDeAprendizaje",
        label: "¿Con qué recursos de aprendizaje cuentas actualmente?",
        type: "text",
        placeholder: "Grabaciones de la universidad, Platzi.",
      },
      {
        field: "CertificacionesMaestriasDeseadas",
        label: "¿Qué certificados o maestrías estás considerando tomar?",
        type: "text",
        placeholder: "PMP, Azure Fundamentals, MBA.",
      },
      {
        field: "RolDeseado",
        label: "¿Qué puesto o rol profesional has pensado en alcanzar?",
        type: "text",
        placeholder: "Gerente de proyectos, Científico de datos.",
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
        field: "workExperience",
        label: "Experiencia laboral o empresarial previa",
        type: "textarea",
        placeholder:
          "Ejemplo: Trabajo en ventas, administración de empresas familiares.",
      },
      {
        field: "personalInterests",
        label: "Intereses y pasiones personales",
        type: "textarea",
        placeholder: "Ejemplo: Tecnología, moda sostenible, cocina gourmet.",
      },
      {
        field: "availableResources",
        label: "Recursos disponibles para emprender",
        type: "textarea",
        placeholder:
          "Ejemplo: Ahorros personales, tiempo parcial, red de contactos.",
      },
      {
        field: "currentChallenges",
        label: "Obstáculos o retos actuales",
        type: "textarea",
        placeholder:
          "Ejemplo: Falta de capital inicial, desconocimiento del mercado.",
      },
    ],
    TO_BE: [
      {
        field: "businessType",
        label: "Tipo de negocio que deseas iniciar",
        type: "textarea",
        placeholder:
          "Ejemplo: Tienda en línea de productos orgánicos, restaurante temático.",
      },
      {
        field: "targetAudience",
        label: "Público objetivo de tu negocio",
        type: "textarea",
        placeholder:
          "Ejemplo: Jóvenes interesados en moda sostenible, empresas pequeñas.",
      },
      {
        field: "skillsToDevelop",
        label: "Habilidades que necesitas desarrollar",
        type: "textarea",
        placeholder:
          "Ejemplo: Marketing digital, negociación, contabilidad básica.",
      },
      {
        field: "scalingStrategies",
        label: "Estrategias para escalar tu negocio",
        type: "textarea",
        placeholder:
          "Ejemplo: Abrir nuevas sucursales, internacionalizar la marca.",
      },
      {
        field: "businessPurpose",
        label: "Misión o propósito de tu negocio",
        type: "textarea",
        placeholder:
          "Ejemplo: Reducir la huella de carbono, apoyar comunidades vulnerables.",
      },
    ],
  },
};
