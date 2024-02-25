import React from 'react';
import './healthRecord.css'
import Sidebar from '../../components/Sidebar';
const HealthRecord = () => {
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
                    <div className="medicationContainer">
                        <table>
                            <tr>
                                <td>
                                    
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>
            
            </div>
            </Sidebar>

        </div>
    );
};

export default HealthRecord;