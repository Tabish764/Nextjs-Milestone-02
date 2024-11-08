import { skillsData } from '@/app/Data/data'
import React from 'react'
import SkillCard from './SkillCard'
const Skills = () => {
  return (
    <div id='skills' className='pt-[10rem] pb-[19rem] z- bg-[#0f0715]'>
        <h1 className='text-white text-center sm:text-6xl'>My Skills</h1>
        <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
        {
            skillsData.map((skill)=>{
                return <div key={skill.id}>
                    <SkillCard skill={skill}/>
                </div>
            })
        }

        </div>
    </div>
  )
}

export default Skills