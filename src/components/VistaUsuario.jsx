export default function Userview({ info }) {
  if (!info) return <div className="loader">Cargando ficha técnica...</div>;

  return (
    <div className="user-card">
        <h2>📄 Ficha de {info.nombre_usuario}</h2>
        <span className="status-badge">Activo</span>
      <div className="card-content">
        <div className="info-group">
          <label>Nombre</label>
          <p>{info.nombre_usuario} {info.apellido_usuario}</p>

            <label>Cédula</label>
            <p>{info.cedula_usuario}</p>

            <label>Teléfono</label>
            <p>{info.numero_celular_usuario}</p>

            <label>Cargo</label>
            <p>{info.cargo_usuario}</p>

            <label>Tipo de Contrato</label>
            <p>{info.tipo_contrato_usuario}</p>
            
          <label>Fecha de Contratación:</label>
          <span>{info.fecha_contrato_usuario}</span>
        </div>
      </div>
    </div>
  );
}