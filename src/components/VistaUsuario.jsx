export default function Userview({ info }) {
  if (!info) return <div className="loader">Cargando ficha técnica...</div>;

  return (
    <div className="user-card">
        <h2>📄 Ficha de {info.nombre_usuario}</h2>
        <span className="status-badge">Activo</span>
      <div className="card-content">
        <div className="info-group">
          <label>Nombre Completo</label>
          <p>{info.nombre_usuario} {info.apellido_usuario}</p>
          <div>
            <label>Cédula</label>
            <p>{info.cedula_usuario}</p>
          </div>
          <div>
            <label>Teléfono</label>
            <p>{info.numero_celular}</p>
          </div>
          <div>
            <label>Cargo</label>
            <p>{info.cargo_usuario}</p>
          </div>
          <div>
            <label>Tipo de Contrato</label>
            <p>{info.tipo_contrato}</p>
          </div>
          <label>Fecha de Contratación:</label>
          <span>{info.fecha_contrato}</span>
        </div>
      </div>
    </div>
  );
}