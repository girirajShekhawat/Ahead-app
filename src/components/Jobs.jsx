import React, { useState } from 'react';
import { vacancies } from '../assets/data';
import { motion } from 'framer-motion';
import  {TextField,Button} from "@mui/material"
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';




function Jobs({isadmin}) {
  const data=vacancies;
  const intialState= {
    jobTitle: "",
    position: "",
    location: "",
    pay: "",
  }
const [showJobBox, setjobBox]=useState(false);
const [jobData, setJobdata]=useState(data);
const [currentJob,setCurrentJob]=useState(intialState)

const handleSubmit=(event)=>{
  event.preventDefault();
  //  check for all the field should be filled
  if(currentJob.jobTitle && currentJob.location && currentJob.pay && currentJob.position){
    setJobdata([
      ...jobData,
      currentJob
    ]) 
  }
  
  setCurrentJob(intialState)
  setjobBox(false)
}

const handleChange=(event)=>{
  const {name,value}=event.target
  setCurrentJob({
    ...currentJob,
    [name]:value
  })
}

const handleChangeForJobBoxDisplay=()=>{
  setjobBox(!showJobBox)
}


function handleJobAdding(){
  setjobBox(!showJobBox)
}

 

  return (
    <div>
      <div className='flex flex-col py-[50px] my-[100px] h-full'>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ always:true }}
          transition={{ duration: 1.7, type: "spring", bounce: 0.4, ease: "easeInOut" }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0, y: 0 },
            hidden: { opacity: 0, scale: 0.5, x: "-5%" },
          }}
          className='flex justify-between'
        >
          <h1 className='text-4xl font-bold'>Open vacancies</h1>

           {/* handling the add job button */}
          {isadmin && 
        <Button variant='contained' onClick={handleJobAdding} className='bg-black rounded-full' >Add Jobs</Button>  }
     
        </motion.div>
 
       {/* handling the jobs data div  */}
        <div className='flex  w-full  overflow-x-scroll no-scrollbar   gap-8 mt-12'>
          {jobData.map((job, index) => {
            return <HoveredCard key={index} index={index} jobs={job} jobData={jobData} setJobdata={setJobdata} isadmin={isadmin}/>
          })}
        </div>
      </div>

{/* popup container for the job detailes add */}
      {showJobBox && 
           <Dialog open={open}>
                <DialogTitle>Add a new job</DialogTitle>
                <DialogContent className='flex flex-col'>
                 
      <form onSubmit={handleSubmit}  >
        <TextField
          type='text'
          placeholder='Job Heading'
          name='jobTitle'
          value={currentJob.jobTitle}
          onChange={handleChange}
          fullWidth
          size='medium'
          margin='normal'
        /><br/>
        <TextField
          type='text'
          placeholder='Job Type'
          name='position'
          value={currentJob.position}
          fullWidth
          size='medium'
          onChange={handleChange}
          
          margin='normal'
        />
        <TextField
          type='text'
          placeholder='Location'
          name='location'
          value={currentJob.location}
          onChange={handleChange}
          fullWidth
          size='medium'
          margin='normal'
        />
        <TextField
          type='text'
          placeholder='Salary'
          name='pay'
          value={currentJob.pay}
          onChange={handleChange}
          fullWidth
          size='medium'
          margin='normal'
        />

        <DialogActions>
        <Button type='submit' variant='contained' color='primary'>
          Submit
        </Button>
        <Button   variant='contained' color='primary' onClick={handleChangeForJobBoxDisplay}>
          Cancel
        </Button>
        </DialogActions>

      </form>
   
                </DialogContent>
           </Dialog>

         }
</div>
     
       
  );
}







// hovered card component
const HoveredCard = (props) => {
  const{index, jobs, jobData , setJobdata,isadmin}=props;
  const intialState= {
    jobTitle: "",
    position: "",
    location: "",
    pay: "",
  }
  const [showButton, setShowButton] = useState(false);
  const [ open, setOpen]=useState(false);
  const [currentJob,setCurrentJob]=useState(intialState)

  function handleJobDelete (){
    const indexTobeRemoved=index;
    if(indexTobeRemoved>=0 && indexTobeRemoved<jobData.length){
     const newJobData= jobData.filter((job,index)=> index!==indexTobeRemoved);
     setJobdata(newJobData)}
  }

  function handleJobEdit(){
    const jobIndex=index
    setOpen(!open)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(currentJob.jobTitle && currentJob.location && currentJob.pay && currentJob.position){
    jobData[index]=currentJob;
    setJobdata([...jobData])
    }
    setOpen(false)
    
  }

  function handleChange(event){
    const {name,value}=event.target;

    setCurrentJob({
     ...currentJob,
     [name]:value
    })
  }

  function handleChangeForJobBoxDisplay (){
    setOpen(!open)
  }

  return (
    <>
      <motion.div
        initial={{ height: 190}}
        whileHover={{ height: 230 }}
        key={index}
        onHoverStart={() => setShowButton(true)}
        onHoverEnd={() => setShowButton(false)}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className='bg-[#fefbec] hover:bg-[#ece7d1] rounded-lg  cursor-pointer '
      >
         <div className="rounded-2xl flex flex-col w-[339px]  ">
       
      {isadmin && <div className='flex justify-end'>
       <IconButton aria-label="edit" size="large" onClick={handleJobEdit}>
       <EditIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large" onClick={handleJobDelete} key={index}>
       <ClearIcon />
      </IconButton>
       </div>}

       <div className='px-12 mb-4 '>
         <h2 className="text-xl font-bold">{jobs.jobTitle}</h2>

         <ul className="mt-4 text-sm font-semibold list-disc pl-4">
           <li className="text-sm font-normal mb-1">{jobs.position}</li>
           <li className="text-sm font-normal mb-1">{jobs.location}</li>
           <li className="text-sm font-normal">{jobs.pay}</li>
         </ul>
         </div>
       </div>

        {showButton && 
          <motion.button
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.7 },
            }}
            className="mx-12 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-2"
          >
            Apply
          </motion.button>
        }

        {/* popup container for the job detailes add */}
      { isadmin && open && 
           <Dialog open={open}
            >
                <DialogTitle>Add a new job</DialogTitle>
                <DialogContent className='flex flex-col'>
                 
      <form onSubmit={handleSubmit}  >
        <TextField
          type='text'
          placeholder={jobs.jobTitle}
          name='jobTitle'
          value={currentJob.jobTitle}
          onChange={handleChange}
          fullWidth
          size='medium'
          margin='normal'
        /><br/>
        <TextField
          type='text'
          placeholder={jobs.position}
          name='position'
          value={currentJob.position}
          fullWidth
          size='medium'
          onChange={handleChange}
          
          margin='normal'
        />
        <TextField
          type='text'
          placeholder={jobs.location}
          name='location'
          value={currentJob.location}
          onChange={handleChange}
          fullWidth
          size='medium'
          margin='normal'
        />
        <TextField
          type='text'
          placeholder={jobs.pay}
          name='pay'
          value={currentJob.pay}
          onChange={handleChange}
          fullWidth
          size='medium'
          margin='normal'
        />

        <DialogActions>
        <Button type='submit' variant='contained' color='primary'>
          Submit
        </Button>
        <Button   variant='contained' color='primary' onClick={handleChangeForJobBoxDisplay}>
          Cancel
        </Button>
        </DialogActions>

      </form>
   
                </DialogContent>
           </Dialog>
     }
      </motion.div>
    </>
  );

}

export default Jobs;















{/* <div className='h-[400px] w-[400px] z-10 bg-blue-100 '>
        <form onSubmit={handleSubmit}>
          <input type='text'  placeholder='Job Heading' name='jobTitle' value={currentJob.jobTitle} onChange={handleChange} />
          <input type='text' placeholder='Job Location ' name='position' value={currentJob.position} onChange={handleChange}/>
          <input type='text' placeholder='Salary' name='location'  value={currentJob.location} onChange={handleChange} />
          <input type='text' placeholder='Job Type' name='pay'  value={currentJob.pay} onChange={handleChange}/>
          <button type='submit'>Submit</button>
        </form>
        </div> */}



      //   <div className="rounded-2xl p-6 px-12">
       
      //   <IconButton aria-label="delete" size="large">
      //   <ClearIcon />
      //  </IconButton>
      //  <IconButton aria-label="delete" size="large">
      //   <EditIcon />
      //  </IconButton>

      //     <h2 className="text-xl font-bold">{jobs.jobTitle}</h2>

      //     <ul className="mt-4 text-sm font-semibold list-disc pl-4">
      //       <li className="text-sm font-normal mb-1">{jobs.position}</li>
      //       <li className="text-sm font-normal mb-1">{jobs.location}</li>
      //       <li className="text-sm font-normal">{jobs.pay}</li>
      //     </ul>
      //   </div>