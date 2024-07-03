

export const About = () => {
  return (
    <div className='text-white  bg-black'>
        <h1 className=' tech-skill text-6xl font-bold text-center align-cente  '>About Me</h1>
        <div className='flex mt-10 px-20 gap-[40px]'>
            <div className='left-div px-20'>
                <img src={"public/profile.jpeg"} className='border border-white rounded-3xl h-[370px] w-[300px]'/>
            </div>
            <div className='right-div bg-black-400 text-xl  margin-auto w-[600px] '>
                <p>I am Aditya Pande, pursuing my B.Tech in Computer Science.
                     I am a Full Stack Developer based in India and have been coding since 2022.
                      Since my childhood, I have had a huge interest in technology. 
                      Channeling this interest towards computer science has been a good decision for me as I learn something new about technology every day. </p><br></br>
                <p>
                I am proficient in technologies like React, Node.js, Express, MongoDB, and have experience with various other web development tools. I have worked on several projects, including a full-fledged e-commerce website and a task management application.
                </p>
                <br></br>
                <p>
                My goal is to contribute to impactful projects and grow as a developer. Feel free to contact me.


                </p>

            </div>
        </div>
        
    </div>
  )
}
