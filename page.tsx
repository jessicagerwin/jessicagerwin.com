export default function Page() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#faf9f6]">
      {/* Dark red blob */}
      <div 
        className="absolute left-[-10%] top-[10%] h-[600px] w-[600px] animate-float"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 0, 0, 0.4) 0%, rgba(139, 0, 0, 0) 70%)',
          filter: 'blur(80px)',
          transform: 'rotate(-10deg)',
        }}
      />
      
      {/* Medium red blob */}
      <div 
        className="absolute left-[20%] top-[5%] h-[700px] w-[700px] animate-float-delayed"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0) 70%)',
          filter: 'blur(80px)',
          transform: 'rotate(15deg)',
        }}
      />
      
      {/* Light red blob */}
      <div 
        className="absolute left-[35%] top-[15%] h-[650px] w-[650px] animate-float-slow"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 99, 71, 0.5) 0%, rgba(255, 99, 71, 0) 70%)',
          filter: 'blur(80px)',
          transform: 'rotate(-5deg)',
        }}
      />
    </main>
  )
}
