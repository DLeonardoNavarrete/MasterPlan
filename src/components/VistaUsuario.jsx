export default function Userview({ info }) {
  if (!info) return <div className="loader">Cargando ficha técnica...</div>;

  return (
    <div className="user-card">
      <header className="card-header">
        <h3>📄 Ficha de Empleado</h3>
        <span className="status-badge">Activo</span>
      </header>
      
      <div className="card-content">
        <div className="info-group">
          <label>Nombre Completo</label>
          <p>{info.nombre_usuario} {info.apellido_usuario}</p>
        </div>

        <div className="info-grid">
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
        </div>

        <div className="info-footer">
          <label>Fecha de Contratación:</label>
          <span>{info.fecha_contrato}</span>
        </div>
      </div>
    </div>
  );
}