import logo from './logo.svg';
import './App.css';

import HomePage from './HomePage';

import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

function App() {
    return (
        <div id="canvas-container">
        <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }} eventSource={document.getElementById('root')} eventPrefix="client">
                <color attach="background" args={['black']} />
                <hemisphereLight intensity={0.15} groundColor="black" />
                <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
                <mesh>
                    <boxGeometry args={[2, 2, 2]}/>
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
}

export default App;
