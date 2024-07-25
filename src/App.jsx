import { useState } from 'react'
import { useRef } from 'react';
import './styles/main.css'
// import CV from './components/CV.jsx';
import PersonalInfo from './components/PersonalInfo.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import CV from './components/CV.jsx';
import Screenshot from './components/Screenshot.jsx';

function App() {
  const cvRef = useRef(null);

  // set states for PersonalInfo
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [extraInfo, setExtraInfo] = useState([]);

  // PersonalInfo fields change
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function handleExtraInfoChange(id, value) {
    setExtraInfo(extraInfo.map(info => {
      if (info.id == id) {
        return {...info, infoItem: value};
      } else {
        return info;
      }
    }))
  }

  // set state for Education
  const [edSections, setEdSections] = useState([]); 

  // Education fields change
  function handleEducationChange(id, field, value) {
    setEdSections(edSections.map(section => {
      if (section.id === id) {
        return {...section, educationItem: {...section.educationItem, [field]: value}};
      } else {
        return section;
      }
    }));
  }

  // set state for Experience
  const [expSections, setExpSections] = useState([]);

  // Experience fields change
  function handleExperienceChange(id, field, value) {
    setExpSections(expSections.map(section => {
      if (section.id === id) {
        return {...section, experienceItem: {...section.experienceItem, [field]: value}};
      } else {
        return section;
      }
    }))
  }

  // set state for Skills
  const [skills, setSkills] = useState([]);

  // Skills fields change
  function handleSkillsChange(id, field, value) {
    setSkills(skills.map(skill => {
      if (skill.id === id) {
        return {...skill, skillItem: {...skill.skillItem, [field]: value}};
      } else {
        return skill;
      }
    }))
  }

  return (
    <>
      <div className="title">
        <h1>CVuilder</h1>
      </div>

      <div className='content'>
        <div className='forms-cont'>
          <PersonalInfo
            name={name}
            handleNameChange={handleNameChange}
            email={email}
            handleEmailChange={handleEmailChange}
            phone={phone}
            handlePhoneChange={handlePhoneChange}
            extraInfo={extraInfo}
            setExtraInfo = {setExtraInfo}
            handleExtraInfoChange={handleExtraInfoChange}
          />

          <Education
            edSections={edSections}
            setEdSections={setEdSections}
            handleEducationChange={handleEducationChange}
          />

          <Experience
            expSections={expSections}
            setExpSections={setExpSections}
            handleExperienceChange={handleExperienceChange}
          />

          <Skills  
            skills={skills}
            setSkills={setSkills}
            handleSkillsChange={handleSkillsChange}
          />
        </div>

        <div className='cv-and-download'>
          <div className='cv'>
            <CV
              name={name}
              email={email}
              phone={phone}
              edSections={edSections}
              expSections={expSections}
              skills={skills}
              extraInfo={extraInfo}
              ref={cvRef}
            />
          </div>

          <Screenshot
            captureRef={cvRef} 
            name={name}
          />
        </div>
      </div>
    </>
  )
}

export default App