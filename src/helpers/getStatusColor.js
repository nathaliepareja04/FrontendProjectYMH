export const getStatusColor = (status) => {
    switch (status) {
      case "ok":
        return { color: "green" };
      case "asignacionPendiente":
        return { color: "orange" };
      case "autorizacionPendiente":
        return { color: "red" };
      case "repuestosPendientes":
        return { color: "red" };
      case "trabajoExternoPendiente":
        return { color: "red" };
      case "procesoReparacion":
        return { color: "blue" };
      default:
        return { color: "black" };
    }
  };