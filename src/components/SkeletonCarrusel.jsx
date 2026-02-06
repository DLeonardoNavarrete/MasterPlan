const SkeletonCarrusel = () => {
  return (
    <div className="carrusel-item" style={{ padding: '20px' }}>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-image"></div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <div className="skeleton" style={{ width: '40px', height: '40px', borderRadius: '50%' }}></div>
        <div className="skeleton skeleton-text" style={{ width: '150px' }}></div>
      </div>
    </div>
  );
};
export default SkeletonCarrusel;