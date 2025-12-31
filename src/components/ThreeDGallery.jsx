import { Canvas } from "@react-three/fiber";
import { OrbitControls, Image } from "@react-three/drei";
import "../styles/threeD.css";
import a1 from "../assets/photos/a1.jpeg"
import a2 from "../assets/photos/a2.jpeg"
import a3 from "../assets/photos/a3.jpeg"
import a4 from "../assets/photos/a4.jpeg"

const ThreeDGallery = () => {
  return (
    <div className="three-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />

        <Image url= {a1} position={[-2, 0, 0]} />
        <Image url={a2} position={[0, 0, 0]} />
        <Image url={a3} position={[2, 0, 0]} />
        <Image url={a4} position={[3, 0, 0]} />
      </Canvas>

      <div className="three-text">
        <h2>Forever With You 💖</h2>
        <p>Every memory shines brighter with you.</p>
      </div>
    </div>
  );
};

export default ThreeDGallery;
