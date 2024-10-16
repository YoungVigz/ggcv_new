import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { Model } from '../components/Model'
import { useEffect, useState } from 'react'

function Hero() {
  const [modelScale, setModelScale] = useState(4.5)
  const [modelY, setModelY] = useState()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setModelScale(3.5) 
      } else if (window.innerWidth < 1024) {
        setModelScale(4) 
      } else {
        setModelScale(4.5) 
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='min-h-screen w-full flex flex-col relative' id="home">

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center">
          Hello, Gabriel here!
        </p>
        <p className="text-center xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-generalsans font-black leading-normal text-white
              bg-gradient-to-t from-[#babfd8] from-50% via-[#ffffff] to-100% bg-clip-text text-transparent">
          Building seamless digital experiences, front to back.
        </p>
      </div>


      <div className="absolute inset-0">
        <Canvas >
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <Model scale={modelScale} position={[0, -8, 0]} rotation={[0.3, Math.PI * 2, 0]} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Canvas>
      </div>
    </div>
  )
}

export default Hero
