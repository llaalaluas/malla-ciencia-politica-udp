const COURSES = [
  // SEMESTRE 1
  {
    id: "intro_metodos",
    name: "Introducción a Métodos",
    semester: 1,
    area: "metodologia",
    prereq: [],
    requireApproved: true
  },
  {
    id: "comparado_1",
    name: "Teorías, Conceptos y Método Comparado",
    semester: 1,
    area: "comparada",
    prereq: [],
    requireApproved: false
  },
  {
    id: "ri_1",
    name: "Teorías y Conceptos de Relaciones Internacionales",
    semester: 1,
    area: "ri",
    prereq: [],
    requireApproved: false
  },
  {
    id: "pp_1",
    name: "Teorías y Conceptos de Políticas Públicas",
    semester: 1,
    area: "pp",
    prereq: [],
    requireApproved: false
  },
  {
    id: "cpol_intro",
    name: "Introducción a la Ciencia Política",
    semester: 1,
    area: "general",
    prereq: [],
    requireApproved: false
  },
  {
    id: "taller_redaccion",
    name: "Taller de Recursos y Redacción en Ciencia Política",
    semester: 1,
    area: "general",
    prereq: [],
    requireApproved: false
  },

  // SEMESTRE 2
  {
    id: "met_cual",
    name: "Métodos Cualitativos",
    semester: 2,
    area: "metodologia",
    prereq: ["intro_metodos"],
    requireApproved: true
  },
  {
    id: "comparado_2",
    name: "Sistema Político e Instituciones Comparadas",
    semester: 2,
    area: "comparada",
    prereq: ["comparado_1"],
    requireApproved: false
  },
  {
    id: "ri_2",
    name: "Sistema e Instituciones Internacionales",
    semester: 2,
    area: "ri",
    prereq: ["ri_1"],
    requireApproved: false
  },
  {
    id: "pp_2",
    name: "Políticas Sociales",
    semester: 2,
    area: "pp",
    prereq: ["pp_1"],
    requireApproved: false
  },
  {
    id: "tp_1",
    name: "Teoría Política Clásica",
    semester: 2,
    area: "teoria",
    prereq: [],
    requireApproved: false
  },
  {
    id: "ingles_1",
    name: "Inglés I",
    semester: 2,
    area: "general",
    prereq: [],
    requireApproved: true
  },

  // SEMESTRE 3
  {
    id: "met_cuant_1",
    name: "Métodos Cuantitativos Introductorios",
    semester: 3,
    area: "metodologia",
    prereq: ["met_cual"],
    requireApproved: true
  },
  {
    id: "comparado_3",
    name: "Desarrollo Político y Económico de América Latina",
    semester: 3,
    area: "comparada",
    prereq: ["comparado_2"],
    requireApproved: false
  },
  {
    id: "ri_3",
    name: "Relaciones Internacionales de América Latina",
    semester: 3,
    area: "ri",
    prereq: ["ri_2"],
    requireApproved: false
  },
  {
    id: "pp_3",
    name: "Gestión Pública y Presupuestaria",
    semester: 3,
    area: "pp",
    prereq: ["pp_2"],
    requireApproved: false
  },
  {
    id: "tp_2",
    name: "Teoría Política Moderna",
    semester: 3,
    area: "teoria",
    prereq: ["tp_1"],
    requireApproved: false
  },
 {
    id: "ingles_2",
    name: "Inglés II",
    semester: 3,
    area: "general",
    prereq: ["ingles_1"],
    requireApproved: true
},
// SEMESTRE 4
{
  id: "met_cuant_2",
  name: "Métodos Cuantitativos Avanzados",
  semester: 4,
  area: "metodologia",
  prereq: ["met_cuant_1"],
  requireApproved: true
},
{
  id: "comparado_4",
  name: "Proceso Político y Legislativo Chileno",
  semester: 4,
  area: "comparada",
  prereq: ["comparado_3"],
  requireApproved: false
},
{
  id: "ri_4",
  name: "Chile y el Sistema Internacional",
  semester: 4,
  area: "ri",
  prereq: ["ri_3"],
  requireApproved: false
},
{
  id: "pp_4",
  name: "Diseño y Evaluación de Proyectos",
  semester: 4,
  area: "pp",
  prereq: ["pp_3"],
  requireApproved: false
},
{
  id: "tp_3",
  name: "Teoría Política Contemporánea",
  semester: 4,
  area: "teoria",
  prereq: ["tp_2"],
  requireApproved: false
},
{
  id: "ingles_3",
  name: "Inglés III",
  semester: 4,
  area: "general",
  prereq: ["ingles_2"],
  requireApproved: true
},

// SEMESTRE 5
{
  id: "optativo_1",
  name: "Optativo Semestre de Intercambio 1",
  semester: 5,
  area: "intercambio",
  prereq: [],
  requireApproved: false
},
{
  id: "optativo_2",
  name: "Optativo Semestre de Intercambio 2",
  semester: 5,
  area: "intercambio",
  prereq: [],
  requireApproved: false
},
{
  id: "optativo_3",
  name: "Optativo Semestre de Intercambio 3",
  semester: 5,
  area: "intercambio",
  prereq: [],
  requireApproved: false
},
{
  id: "optativo_4",
  name: "Optativo Semestre de Intercambio 4",
  semester: 5,
  area: "intercambio",
  prereq: [],
  requireApproved: false
},
{
  id: "optativo_5",
  name: "Optativo Semestre de Intercambio 5",
  semester: 5,
  area: "intercambio",
  prereq: [],
  requireApproved: false
},
{
  id: "cfg_1",
  name: "Curso de Formación General",
  semester: 5,
  area: "cfg",
  prereq: [],
  requireApproved: false
},

// SEMESTRE 6
{
  id: "taller_comp",
  name: "Taller de Análisis en Política Comparada",
  semester: 6,
  area: "comparada",
  prereq: ["comparado_4"],
  requireApproved: false
},
{
  id: "taller_ri",
  name: "Taller de Análisis en Relaciones Internacionales",
  semester: 6,
  area: "ri",
  prereq: ["ri_4"],
  requireApproved: false
},
{
  id: "taller_pp",
  name: "Taller de Análisis en Políticas Públicas",
  semester: 6,
  area: "pp",
  prereq: ["pp_4"],
  requireApproved: false
},
{
  id: "debate_teorico",
  name: "Taller de Debate Teórico Contemporáneo",
  semester: 6,
  area: "teoria",
  prereq: ["tp_3"],
  requireApproved: false
},
{
  id: "intro_economia",
  name: "Introducción a la Economía",
  semester: 6,
  area: "economia",
  prereq: [],
  requireApproved: false
},
{
  id: "odp_1",
  name: "Optativo de Desarrollo Profesional I",
  semester: 6,
  area: "odp",
  prereq: [],
  requireApproved: false
},
{
  id: "cfg_2",
  name: "Curso de Formación General",
  semester: 6,
  area: "cfg",
  prereq: [],
  requireApproved: false
},

// SEMESTRE 7
{
  id: "diseno_inv",
  name: "Diseño de Investigación",
  semester: 7,
  area: "metodologia",
  prereq: ["met_cuant_2"],
  requireApproved: true
},
{
  id: "economia_politica",
  name: "Economía Política",
  semester: 7,
  area: "economia",
  prereq: ["intro_economia"],
  requireApproved: false
},
{
  id: "odp_2",
  name: "Optativo de Desarrollo Profesional II",
  semester: 7,
  area: "odp",
  prereq: [],
  requireApproved: false
},
{
  id: "minor_1",
  name: "Minor / CFG",
  semester: 7,
  area: "cfg",
  prereq: [],
  requireApproved: false
},
{
  id: "minor_2",
  name: "Minor / CFG",
  semester: 7,
  area: "cfg",
  prereq: [],
  requireApproved: false
},
{
  id: "cfg_3",
  name: "Curso de Formación General",
  semester: 7,
  area: "cfg",
  prereq: [],
  requireApproved: false
},

// SEMESTRE 8
{
  id: "tesina",
  name: "Taller de Tesina y Programación de Defensa",
  semester: 8,
  area: "metodologia",
  prereq: ["diseno_inv"],
  requireApproved: true
},
{
  id: "seminario",
  name: "Seminarios Avanzados y Programación de Defensa",
  semester: 8,
  area: "metodologia",
  prereq: ["diseno_inv"],
  requireApproved: true
},
{
  id: "practica",
  name: "Práctica Profesional",
  semester: 8,
  area: "practica",
  prereq: [],
  requireApproved: false
},
{
  id: "minor_3",
  name: "Minor / CFG",
  semester: 8,
  area: "cfg",
  prereq: [],
  requireApproved: false
},
{
  id: "cfg_4",
  name: "Curso de Formación General",
  semester: 8,
  area: "cfg",
  prereq: [],
  requireApproved: false
}
};
