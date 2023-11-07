import React,{useState,useEffect} from 'react'
import {AppWrap, MotionWrap} from '../../wraper';
import {motion} from 'framer-motion';
import {Tooltip as ReactTooltip} from 'react-tooltip';
import {urlFor,client} from '../../client';
import './Skill.scss'
const Skill = () => {

  const [skills, setSkills] = useState([]);
  const [experiences,setExperiences]=useState([])
  useEffect(()=>{
    const query='*[_type=="skills"]';
    const queryExperince='*[_type=="experiences"]';
    client.fetch(query).then((data)=>setSkills(data))
    client.fetch(queryExperince).then((data)=>setExperiences(data))
  },[])

  return (
    <>
   <h2 className='head-text'>My <span>Skills</span> </h2>
   <div className="app__skills-container">
    <motion.div className='app__skills-list'>
      {skills.map((skill,index)=>(
        <motion.div
          whileInView={{opacity:[0,1]}}
          transition={{duration:0.5}}
          className='app__skills-item app__flex'
          key={index}
        >
          <div className='app__flex' style={{background:skill.bgColor}}>
            <img src={urlFor(skill.icon)} alt="skill" />
          </div>
          <p className='p-text'>{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
   </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skill,'app__skills'),'skills','app__whitebg')
