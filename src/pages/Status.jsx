import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../pages/Status.css";
import { useDispatch, useSelector } from "react-redux";
import { getServices, getServicesByClient, getServicesById } from "../redux/vehiclesSlice";
import { getStatusColor } from "../helpers/getStatusColor";
import { textStatus } from "../helpers/textStatus";

const Status = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { services } = useSelector((state) => state.serviceStore);

  useEffect(() => {
    dispatch(getServicesByClient(id));
  }, []);

  return (
    <div className="body2">
      <div className="status">
        {/* titulo */}
        <h1 className="fw-bold">Detalles de mis servicios</h1>

        <div className="details p-4">
          {services.map((service) => (
            <div className="status-container">
              {/* contenido */}
              <div className="status-item">
                <div className="status-item-title">
                  {/* placa moto */}
                  <h2 className="text-black fw-bold">{service.placa}</h2>

                  {/* order moto */}
                  <h5 className="text-black">
                    Order <strong>{service.order}</strong>
                  </h5>

                  <p style={getStatusColor(service.state)}>
                  <strong> <i className="fa-sharp fa-solid fa-circle m-2"></i>
                    {textStatus(service.state)} </strong>
                  </p>

                  {/* button */}
                  <Link to={`/details/${service._id}`}>
                    <button
                      className="btn"
                      key={service._id}
                      onClick={() => dispatch(getServicesById(service._id))}
                    >
                      Ver detalles
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
