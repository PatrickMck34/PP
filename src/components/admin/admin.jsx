import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sectionActions from "../../store/section"
import "../results.css"
import FormatPhoneNumber from '../Phone/formatPhone';
function Admin () {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const [searches, setSearches] = useState("")
const results = useSelector((state) => state.section.section3)
const zip = useSelector((state) => state.section.zipCode)
const providers = useSelector((state) => state.section?.allSections)
const res = Object.values(results)
let data 
let company = "hey"
let local
let num

let searchData = {}
if (providers) {
  data = Object.values(providers);
}
const displayNameMapping = {
    callPolice: 'Law Enforcement',
    advocacyProgram: 'Advocacy',
    psychProgram: 'Psychology',
    forensicExams: 'Forensic Exam',
    pregnancy: 'Pregnancy',
    std: 'STD/HIV',
    hivSupport: 'HIV support',
    blindDeaf: 'Blind/Deaf',
    collegeOnCampus: 'College',
    generalHealth: 'Healthcare',
    immigrants: 'Immigrants',
    disabled: 'Disability',
    title9: 'Title 9',
    alternativeCare: 'Alt. Care',
    elderSurvivor: 'Elderly Victims',
    childSurvivor: 'Child Victims',
    military: 'Military',
    humanTrafficking: 'Human Trafficking',
    LGBTQ: 'LGBTQ',
    domesticViolence: 'Domestic Violence',
    crisisResources: 'Crisis Resources',
    lawEnforcement: 'Law Enforcement',
    confidential: 'Confidential',
    nonConfidential: 'Non-Confidential',
    healthCenter: 'Health Center',
    dvProgram: 'DV Program',
    callpolice: 'Police',
    legalAdvice: 'Legal Advice',
    directCareCo: 'Direct Care Counseling',
    directCareMed: 'Direct Care Medical',
    directCareOther: 'Direct Care Other',
    substanceAbuse: 'Substance Abuse',
    missingPersons: 'Missing Persons',
    specialNeeds: 'Special Needs',
    housing: 'Housing',
    tribal: 'Tribal',
    coalition: 'Coalition'

}

function Search (search) {
  if (search === "") {
    return null
  }
        data.filter((provider) => {
            company = provider?.Name.toLowerCase()
            local = provider?.Address.toLowerCase()
            num = provider?.Phone
            if (provider?.zipCode === search) {
                searchData = provider
            } else if (company.includes(search.toLowerCase())) {
                searchData = provider
            } else if (local.includes(search.toLowerCase())) {
                searchData = provider
            } else if (num.includes(search)) {
                searchData = provider
            
            } else if (provider?.zipCode === search) {
                searchData = provider
            } 
            
        
        })
    }


useEffect(() => {
    dispatch(sectionActions.getAllProviders())
    
    
}, [])

return (
    <div className="xl:p-4">
             <div>
 
            
             <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search:"
        className="rounded-xl mt-5 h-fit w-full  border-2 border-slate-700 p-1   justify-center items-center flex bg-gray-100  lg:text-3xl  text-xl"
        />
                <div key={searchData?.id} className="border-2 border-teal-900 bg-teal-100/70 mt-1 xl:mt-4 md:mx-[10%]   p-1">
      <button type="submit" className=" rounded-xl  h-5 w-fit" onClick={Search(search)}> search </button>
            <div className="">
                <div className=" h-fit  border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
            { <p className="text-3xl font-semibold mb-3 justify-center flex items-center lg:text-4xl text-center">{searchData?.Name}</p>}
            {searchData?.Address && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {searchData?.Address}</p>}
            {searchData?.zipCode && <p className="font-semibold lg:text-2xl text-center mb-1"> { searchData?.zipCode}</p>}
            {searchData?.Phone && <p className="font-semibold text-xl">Phone: {FormatPhoneNumber(searchData?.Phone)}</p>}
            {searchData.Name && (

                <div className="flex flex-wrap border-2 border-slate-700 p-1 md:w-full mt-9 bg-gray-100">
            <h1 className="bg-teal-900  text-pink-50 border-2 rounded p-1 w-full h-5 lg:h-9  lg:text-3xl  items-center justify-center flex border-slate-700">Expertise</h1>
        {Object.entries(searchData).map(([key, value]) => {
            // If the value is true, display the key
            if (value === true) {
                
                return (
                    <div className="flex flex-col w-1/2  mt-1  md:text-3xl text-lg text-center justify-center items-center   " key={key}>{displayNameMapping[key] || key}
       <span className=" bg-black"></span>
         </div>
         )
         
         
         
         
        } else {
            return null;
        }
    })}
        </div>
    )}
       </div>
       </div>
        </div>
     
      {data?.map((provider) => (
          <div key={provider?.id} className="border-2 border-teal-900 bg-teal-100/70 mt-1 xl:mt-4 md:mx-[10%]   p-1">
            <div className="">
                <div className=" h-fit  border-teal-600 w-full flex flex-col p-4 justify-center items-center mr-5">
            { <p className="text-3xl font-semibold mb-3 justify-center flex items-center lg:text-4xl text-center">{provider?.Name}</p>}
            {provider?.Address && <p className="font-semibold lg:text-2xl text-center mb-1 mt-3"> {provider?.Address}</p>}
            {provider?.zipCode && <p className="font-semibold lg:text-2xl text-center mb-1"> { provider?.zipCode}</p>}
            {provider?.Phone && <p className="font-semibold text-xl">Phone: {FormatPhoneNumber(provider?.Phone)}</p>}
         
           <div className="flex flex-wrap border-2 border-slate-700 p-1 md:w-full mt-9 bg-gray-100">
            <h1 className="bg-teal-900  text-pink-50 border-2 rounded p-1 w-full h-5 lg:h-9  lg:text-3xl  items-center justify-center flex border-slate-700">Expertise</h1>
            {Object.entries(provider).map(([key, value]) => {
               // If the value is true, display the key
               if (value === true) {
                   
                   return (
                       <div className="flex flex-col w-1/2  mt-1  md:text-3xl text-lg text-center justify-center items-center   " key={key}>{displayNameMapping[key] || key}
           <span className=" bg-black"></span>
             </div>
             )
             
             
             
             
            } else {
                return null;
            }
        })}
        </div>
       </div>
       </div>
        </div>
      ))}
    </div>
        </div>
    )
}
export default Admin