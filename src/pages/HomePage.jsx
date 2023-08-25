import { Navbar } from "../components/Navbar"
const HomePage = () => {

  return (
    <>
      <Navbar />
      
      <h3 className="text-2xl font-bold ml-6">
        Welcom to our Medical Appointment Service, care for hundreds of medical and mental health needs
      </h3>
      <br />
     
      <div class="h-56 grid grid-cols-3 gap-4 justify-center ml-6 ">
        <div>PRIMARY CARE
          <ul className="list-disc">
            <li>Allergies</li>
            <li>Cold & Flu</li>
              <li>Cough</li>
              <li>Birth Control</li>
              <li>Insect Bites</li>
              <li>Headache</li>
              <li>Ear Pain</li>
              <li>Sore Throat</li>
              <li>and more</li>
          </ul>
          <table >
            <tbody>
              
           
            </tbody>
          </table>
        </div>
        <div>DERMATOLOGY
        <ul className="list-disc">
           
              <li>Psoriasis</li>
              <li>Acne</li>
              <li>Alopecia</li>
              <li>Fungal Skin</li>
              <li>Warts</li>
              <li>Dermatitis</li>
              <li>Boils</li>
              <li>Rosacea</li>
              <li>and more</li>
          </ul>
        </div>
        <div >CARDIOLOGY 
        <ul className="list-disc">
              <li>Coronary</li>
              <li>Cardiac scoring</li>
              <li>Chest X-ray</li>
              <li>Electrocardiogram (EGC)</li>
              <li>Carotid Doppler ultrasound </li>
              <li>Holter monitoring test</li>
              <li>and more</li>
              </ul>
             
           
        </div>
        <div>MENTAL HEALTH
        <ul className="list-disc">
          <tr>Addictions</tr>
              <li>Bipolar</li>
              <li>Stress Management</li>
              <li>Anxiety</li>
              <li>Depression</li>
              <li>Life Changes</li>
              <li>Panic Disorders</li>
              <li>Phobias</li>
              <li>and more</li>

        </ul>
              
           
        </div>
        <div>PEDIATRICS
        <ul className="list-disc">
              <li>Newborn Care</li>
              <li>Diagnostic test</li>
              <li>Hearing & Vision</li>
              <li>Immunizations</li>
              <li>and more</li>
        </ul>
              
            
        </div>
      </div>

    </>

  )
}

export default HomePage