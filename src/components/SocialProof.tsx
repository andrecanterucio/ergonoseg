const clients = [
  { name: 'BP',              file: '20210423_154703_clientesbp.jpg' },
  { name: 'Cargill',         file: '20210423_154703_clientescargill.jpg' },
  { name: 'Frisokar',        file: '20210423_154703_clientesfrisokar.jpg' },
  { name: 'JSJ',             file: '20210423_154703_clientesjsj.jpg' },
  { name: 'LDC',             file: '20210423_154703_clientesldc.jpg' },
  { name: 'Móveis Lazarini', file: '20210423_154703_clientesmoveislazarini.jpg' },
  { name: 'Petrobras',       file: '20210423_154703_clientespetrobras.jpg' },
  { name: 'Plascar',         file: '20210423_154703_clientesplascar.jpg' },
  { name: 'XCMG',            file: '20210423_154703_clientesxcmg.jpg' },
]

const allClients = [...clients, ...clients]

export default function SocialProof() {
  return (
    <section
      id="clientes"
      style={{
        background: '#f2f7f4',
        borderTop: '1px solid rgba(0,0,0,0.07)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        padding: '44px 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', marginBottom: '28px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(17,24,39,0.4)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase' }}>
          Confiado por empresas de todo o Brasil
        </p>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fades laterais */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
          background: 'linear-gradient(to right, #f2f7f4, transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
          background: 'linear-gradient(to left, #f2f7f4, transparent)',
          pointerEvents: 'none',
        }} />

        <div
          className="animate-marquee"
          style={{ display: 'flex', alignItems: 'center', gap: '0', width: 'max-content' }}
        >
          {allClients.map((c, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 36px',
                borderRight: '1px solid rgba(0,0,0,0.08)',
                height: '72px',
              }}
            >
              <img
                src={`/imagens-clientes/${c.file}`}
                alt={`Logo ${c.name}`}
                loading="lazy"
                style={{
                  height: '48px',
                  width: 'auto',
                  maxWidth: '140px',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
