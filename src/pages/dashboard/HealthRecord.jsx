import React,{useState} from 'react';
import './healthRecord.css'
import Sidebar from '../../components/Sidebar';

const HealthRecord = () => {
    const [divs, setDivs] = useState([
        { id: 1, content: 'aspirin' }
      ]);
    
      const handleClick = () => {
        const newDiv = { id: Date.now(), content: 'parecetomol' };
        setDivs([...divs, newDiv]);
      };
      const [showPopup, setShowPopup] = useState(false);
      
    return (
        <div class="healthRecord">
            <Sidebar>
            <h1>My Records</h1>
            <div className='myRecord'>
                <div className='labRecord'> 
                    <h1 className='health'>Lab record</h1>
                    <div className='labRecordContainer'>
                        <table>
                            <tr>
                                <td><p className='bloodSugarText'>Blood Sugar</p></td>
                                <td>
                                    <div className="myProgress">
                                        <div className="myBar"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><p className='bloodSugarText'>Pressure</p></td>
                                <td>
                                    <div className="myProgress">
                                        <div className="myBar"></div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="medication">                            
                    <h1 className="health"> Medication</h1>
                    
                    <div class="inline-container">
      <div class="text">Paracetamol</div>
      <div class="circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>

        </div>

                    </div>
                </div>
            

            </Sidebar>

        </div>
    );
};

export default HealthRecord;