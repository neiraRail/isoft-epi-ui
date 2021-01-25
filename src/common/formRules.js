const rules = {
    emailPattern: value => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return (
        pattern.test(value) ||
        "Su correo debe seguir el patrón usuario@correo.com"
      );
    },
    lugarPattern: value => {
      const pattern = /^$|^\s*[a-z\\sA-Z]*\s*,\s*[a-z\\sA-Z]*\s*$/;
      return pattern.test(value) || "Su ubicación debe seguir el patrón ciudad, país y no contener números o símbolos";
    
    },
    runPattern: value => {
      const pattern = /^([0-9]{7,8})+([0-9kK])$/;
      return pattern.test(value) || "Su run debe seguir el patrón 123456780, si su run termina en K agregar un 0";
    },
    noBlankTextRequired: value => !!value || "Campo no debe quedar vacío *",
    min: v =>
      (!!v && v.length >= 8) || "Tu contraseña debe contener al menos 8 carácteres",
    passwordRequired: value => !!value || "Una contraseña es requerida",
    phoneLength: v =>
      (!!v && v.length == 9) || "El teléfono debe contener 9 dígitos",
    emailMatch: () => "Tu correo y/o contraseña son inválidos",
    horarioPattern: v =>
    (!!v && v >= 0 && v <=23) || "Horas van de 0 hrs a 23 hrs",
    validarFecha: value => {
      const pattern = /^([0-9]{2})+([-]{1})+([0-9]{2})+([-]{1})+([0-9]{4})$/;
      return pattern.test(value) || "La fecha debe ser ingresa de este formato dd-mm-yyyy";
    },
    validarSexo: value => {
      const pattern = /^Masculino|Femenino|Otro$/;
      return pattern.test(value) || "Se debe ingresar Masculino o Femenino o Otro";
    },
    runPatternLong: value => {
      const pattern = /^(([0-9]{7,8})+([0-9])){1}$/;
      return pattern.test(value) || "Su run debe seguir el patrón 123456780, si su run termina en K agregar un 0";
    },
    validarTexto: value => {
      const pattern = /^([a-zA-Z- ])*$/;
      return pattern.test(value) || "Solo debe ingresar letras y no numeros y caracteres";
    },
    validarTextoyNumero: value => {
      const pattern = /^([a-zA-Z-0-9- ])*$/;
      return pattern.test(value) || "Solo debe ingresar letras y numeros";
    }, 
    validarFechaFallecimiento: value => {
      const pattern = /^(([0-9]{2})+([-]{1})+([0-9]{2})+([-]{1})+([0-9]{4}))|[\s]$/;
      return pattern.test(value) || "La fecha debe ser ingresa de este formato dd-mm-yyyy";
    },       
  }
  
  
export default rules;
