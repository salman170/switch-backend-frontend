import React from 'react'
import vBUSES from "../../assets/video/vBUSES.mp4"

const Home = () => {
  return (
    <div>
      <section class="video-container">
          <video
            width="100%"
            preload="metadata"
            loop autoPlay
            playsinline
            muted
            class="d-block"
          >
            <source
              src={vBUSES}
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>
        </section>
    </div>
  )
}

export default Home
