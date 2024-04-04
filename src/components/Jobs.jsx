import React from 'react';
import { vacancies } from '../assets/data';

function Jobs(props) {
    return (
        <div>
              <div className='flex flex-col py-[50px]'>
            <h1 className='text-4xl font-bold'>Open vacancies</h1>
            <div className='flex gap-8 mt-12'>
                {vacancies.map((job)=>(
                     
                      <div className="rounded-2xl bg-[#fefbec] p-6 px-12">
          <h2 className="text-xl font-bold">{job.jobTitle}</h2>

          <ul className="mt-4 text-sm font-semibold list-disc pl-4">
            <li className="">{job.position}</li>
            <li className="">{job.location}</li>
            <li className="">{job.pay}</li>
          </ul>
        </div>
                     
                ))}
            
            </div>
           </div>
        </div>
    );
}

export default Jobs;