import React from 'react';

const HealthRecord = () => {
    return (
        <div class="healthRecord">
            <h1>My Records</h1>
            <div className='myRecord'>
                <div className='labRecord'> 
                    <h1 className='health'>Lab record</h1>
                    <div className='labRecordContainer'>
                        <div class="bloodSugar">
                            blood Sugar
                        </div>
                    </div>
                </div>
                <div className="medication">                            
                    <h1 className="health"> Medication</h1>
                    <div className="medicationContainer">
                        <ul className="medicationLis" >
                            <li >
                                <div className="medListText">Parecetamol</div>
                                <div className="medListMorn"></div>
                            </li>
                        </ul>

                    </div>
                </div>
            
            </div>

        </div>
    );
};

export default HealthRecord;