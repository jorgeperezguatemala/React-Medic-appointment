import React, {useEffect, useState} from 'react'
import { Navbar } from '../components/Navbar';

const PatientsPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getAllPatients = async() => {
      try {
        const response = await fetch('http://localhost:8000/api/patients')
        const patients = await response.json()
        setData(patients)
        console.log(patients)
      } catch (error) {
        console.log("Error consumiendo la API", error)
      }
    }

 getAllPatients()

  }, [])

  return (
    <>
    <Navbar />
    <div className='bg-cyan-100'>
      <table className='border-separate border-spacing-x-4  border-spacing-y-4 border  table-auto'>
      <caption class="caption-top">
      PATIENTS LIST:
  </caption>
      <thead>
          <tr>
            <th className=''>Name</th>
            <th className=''>Age</th>
            <th className=''>Afiliation number</th>
            <th className=''>Address</th>
          </tr>
          </thead>
          <tbody>
              {data.map((patients, index) => {
                return(
                  <tr key={index} className=''>
                    <td>{patients.name}</td>
                    <td>{patients.age}</td>
                    <td>{patients.num_afi}</td>
                    <td>{patients.address}</td>
                  </tr>
                  
                )
})}
</tbody>
</table>
</div>
    </>
  )
}

export default PatientsPage



