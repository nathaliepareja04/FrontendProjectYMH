export const textTypeService = (typeService) => {
    switch (typeService) {
      case "garantias":
        return "Garantía";
      case "reparacionGeneral":
        return "General";
      case "diagnostico":
        return "Diagnóstico";
      case "negociosEspeciales":
        return "Exterior";
      case "revisiones":
        return "Revisión";
      case "retorno":
        return "Retorno";
      default:
        return "";
    }
  };