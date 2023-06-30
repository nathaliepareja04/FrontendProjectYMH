import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../pages/Status.css";
import { getStatusColor } from "../helpers/getStatusColor";
import { textStatus } from "../helpers/textStatus";
import { useDispatch, useSelector } from "react-redux";
import { getServicesById } from "../redux/vehiclesSlice";
import { textTypeService } from "../helpers/textTypeService";
import moment from 'moment'

const Detailsstatus = () => {

  // Obtener el ID de la motocicleta seleccionada desde la URL
  const { id } = useParams();

  const dispatch = useDispatch();

  const { service } = useSelector((state) => state.serviceStore);

  const { client } = useSelector((state) => state.serviceStore);

  const inicio = moment(service.startTime).format("YYYY/MM/DD")

  const final = moment(service.endTime).format("YYYY/MM/DD")

  useEffect(() => {
    dispatch(getServicesById(id))
  }, []);

  return (
    <>
      <div className="body2">
        <div className="status">
          <Link to={`/status/${client}`} className="return p-3">
            <i className="fa-solid fa-angle-right fa-flip-both text-decoration-none"></i>
            Volver
          </Link>
          
          <div className="details card mt-4 m-1 p-3">
            <div className="card-header bg-white">
              <h3 className="card-title m-2">Resumen del mantenimiento</h3>
            </div>
            <div className="status-container">
              <div className="status-item">
                <div className="status-item-title">
                
                  {/* placa moto */}
                  <h2 className="text-black fw-bold">
                    {service.placa}
                  </h2>

                  {/* order moto */}
                  <h5 className="text-black">
                    Order: <strong>{service.order}</strong>
                  </h5>

                  <p className="fw-bold" style={getStatusColor(service.state)}>
                    <i className="fa-sharp fa-solid fa-circle m-2"></i>
                    {textStatus(service.state)}
                  </p>
                </div>

                {/*ubicacion*/}
                <div className="status-item-details text-black">
                  <p>
                    <strong>Tipo de Servicio: </strong>
                    {textTypeService(service.typeService)}
                  </p>
                </div>

                {/*ubicacion*/}
                <div className="status-item-details text-black">
                  <p>
                    <strong>Sede: </strong>
                    {service.campus}
                  </p>
                </div>

                {/*startTime*/}
                <div className="status-item-details text-black">
                  <p>
                    <strong>Inicio: </strong>
                    {inicio}
                  </p>
                </div>

                {/*endTime*/}
                <div className="status-item-details text-black">
                  <p>
                    <strong>Fecha estimada de finalización: </strong>
                    {final}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailsstatus;
