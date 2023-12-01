import '../ProjectsBlog.css';

function KarzhynWebsite() {

  return (
    <div className='container-template'>
      <div className='mw700 pb'>
        <div>
          <h1>Karzhyn Website</h1>
          <h3>Web Dev • Bootstrap • Blender • November 2023</h3>
          <p>
          Welcome! 👋 I recently built a website to test my Bootstrap skills out. I was inspired to  make a company landing page after seeing the Illustration work of my good friend Jeron on Karzhyn branding. This personal project took around 2 weeks to code this company idea while exploring more of the features Bootstrap has to offer.
          </p>
          <p><a href={"https://lrx5.github.io/karzhyn/main.html"} target='_blank'>Go to Website</a></p>
        </div>
        <div>
          <h2>Karzhyn Branding</h2>
          <p>Karzhyn's brand features multiple bright colors that represents the business' nature for creativity and flexibility. The vibe just looks bright and fun and I just had to make something out of it.</p>
          <img src={`src/assets/karzhyn_1.png`} alt="" />
          <img src={`src/assets/karzhyn_2.png`} alt="" />
          <img src={`src/assets/karzhyn_3.png`} alt="" />
        </div>
        <div>
          <h2>Pages Preview</h2>
          <p>There are a total of 7 pages, including the confirmation of sending the email form. </p>
          <img src={`src/assets/karzhyn_11.png`} alt="" />
          <p>Here's a couple of screenshots 📸
            when viewing the actual website.</p>
          <img src={`src/assets/karzhyn_12.png`} alt="" />
          <img src={`src/assets/karzhyn_21.png`} alt="" />
          <img src={`src/assets/karzhyn_24.png`} alt="" />
        </div>
        <div>
          <h2>3D Animations</h2>
          <p>I 3D modeled the aluminum bottles that were included in Karzhyn, set up a scene and rendered a few still images to use in the video.</p>
          <video autoPlay loop muted>
            <source src={'src/assets/karzhyn_v2.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p>I also animated a total of four 3-second renders in Blender. The first video is composed of showcasing Karzhyn as a brand, introducing the potential creative works that the company's services provides. Here is my favorite out of the four. 🤗</p>
          <video autoPlay loop muted>
            <source src={'src/assets/karzhyn_v1.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <p>Behind the scenes. It almost looks like a huge animation studio. 📽️ The animations for the main hero video was all done here in this single scene.</p>
          <img src={`src/assets/karzhyn_31.png`} alt="" />
        </div>
        <div>
          <h2>Challenges</h2>
          <p>I had a lot of challenges working on this project. Here are some major problems ❗ that I have encountered besides all the debugging fiasco I have done.</p>
          <p>The first one is whether I should follow the <span>60-30-10</span> rule or not. This brand has <span>5</span> primary colors which is a lot. Having all of them present in a single page might be distracting to the users so I opted to make it simple, sticking to the rule and used Electric Purple as the main color of the page.</p>
          <img src={`src/assets/karzhyn_21.png`} alt="" />
          <p>I also have limited experience with back-end code. In order to make the forms work, I used a cloud-based service called EmailJS to handle sending emails with ease. </p>
          <img src={`src/assets/karzhyn_22.png`} alt="" />
          <img src={`src/assets/karzhyn_23.png`} alt="" />
        </div>
        <div>
          <h2>Final Thoughts</h2>
          <p>All in all, I am quite satisfied with the final output. Considering that this is my first major project in Bootstrap, I'd say I did pretty well. I am quite happy with the animations that I rendered, although the transitions could use some work, this is where I think that I should have created a connection to each video in a certain way, like a color or same velocity/direction switch that they do in video editing. It took me some time to get the hang of Bootstrap, not gonna lie there was a point where I wished that I should have just coded it in Vanilla CSS. 😅</p>
        </div>
      </div>
    </div>
  )
}

export default KarzhynWebsite
