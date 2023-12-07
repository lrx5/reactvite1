import '../ProjectsBlog.css';
import Spline from '@splinetool/react-spline';

function Caster() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>Caster Wheel</h1>
          <h3>Blender • May 2023</h3>
          <p>Hi there! 👋 I tried to make a realistic 3D Caster wheel sample as a project submission based job application.</p>
          <img src={`src/assets/casterwheel/caster9.png`} alt="" />
        </div>
        <div className='spline'>
          <h2>Clay Model</h2>
          <p>Try dragging it around! Unfortunately you can't see the materials that I made for the model in Spline. </p>
          <Spline scene="https://prod.spline.design/OaekWiJmrS-dVJ71/scene.splinecode" />
        </div>
        <div>
          <h2>Modelling</h2>
          <p>The process of creating this caster only took a single day, a combined 6 hours of modelling and tweaking. I had blueprints to work from which sped up the modelling process, as I am used to making models from CAD before in school.</p>
        </div>
        <div>
          <h2>Rendering</h2>
          <img src={`src/assets/casterwheel/caster9.png`} alt="" />
          <img src={`src/assets/casterwheel/caster10.png`} alt="" />
          <img src={`src/assets/casterwheel/caster11.png`} alt="" />
        </div>
        <div>
          <h2>Final Thoughts</h2>
          <p>I have received important feedbacks that the wheel's edges were not smooth enough, and the metal material on the wheel were far on the rough side. I learned to apply more subdivisions in the future and to be very meticulous in rendering the final outputs. Nevertheless, I am thankful for the company for giving me an opportunity to show my work. 😊</p>
        </div>
      </div>
    </div>
  )
}

export default Caster
