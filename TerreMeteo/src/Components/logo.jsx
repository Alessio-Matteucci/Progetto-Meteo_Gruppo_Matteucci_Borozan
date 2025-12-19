import logoImage from '../assets/logo.png';

function Logo() {
  return (
    <div
      style={{
        padding: '8px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img 
        src={logoImage} 
        alt="TerreMeteo Logo"
        style={{ 
          height: '52px', 
          width: 'auto', 
          objectFit: 'contain',
          maxWidth: '200px',
        }}
      />
    </div>
  );
}

export default Logo;