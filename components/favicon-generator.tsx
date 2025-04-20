import { Heart, Pill } from "lucide-react";

export function FaviconGenerator() {
  return (
    <div style={{ 
      width: '512px', 
      height: '512px', 
      background: 'linear-gradient(45deg, #fce7f3, #fbcfe8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '999px',
      padding: '20px'
    }}>
      <div style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, rgba(219,39,119,0.2), rgba(219,39,119,0.1))',
        borderRadius: '20px',
        padding: '20px'
      }}>
        <Pill color="#db2777" stroke="#db2777" strokeWidth={3} size={200} style={{ position: 'absolute', transform: 'rotate(45deg)' }} />
        <Heart fill="#db2777" color="#db2777" strokeWidth={2} size={130} style={{ position: 'relative', zIndex: 10 }} />
      </div>
    </div>
  );
} 