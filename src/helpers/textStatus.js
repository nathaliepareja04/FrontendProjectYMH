export const textStatus = (status) => {
  switch (status) {
    case "ok":
      return "Lista para entrega";
    case "asignacionPendiente":
      return "Asignación pendiente";
    case "autorizacionPendiente":
      return "Autorización pendiente";
    case "repuestosPendientes":
      return "Esperando repuestos";
    case "trabajoExternoPendiente":
      return "En trabajo externo";
    case "procesoReparacion":
      return "En reparación";
    default:
      return "En proceso";
  }
};
