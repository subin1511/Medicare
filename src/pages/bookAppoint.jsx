import React from 'react';
const data = [
    { name: "Dr John", speciality: "Orthology", location: "Katampazhipuram" ,rating:4/5, cost: 200  },
    { name: "Dr John", speciality: "Orthology", location: "Katampazhipuram" ,rating:4/5,  cost: 200  }
    { name: "Dr John", speciality: "Orthology", location: "Katampazhipuram" ,rating:4/5,  cost: 200  }
]

const bookAppoint = () => {
    return (
        <div>
            <h1>Doctor's List</h1>
                <table>
                    <tr>
                        <th>Doctor Name</th>
                        <th>Speciality</th>
                        <th>Location</th>
                        <th>Rating</th>
                        <th>Cost</th>
                    </tr>
                    {data.map((val, key) => {
                         return (
                            <tr key={key}>
                              <td>{val.name}</td>
                            <td>{val.speciality}</td>
                            <td>{val.location}</td>
                            <td>{val.rating}</td>
                            <td>{val.cost}</td>
                        </tr>
                    )
                })}
            </table>
                            
            
        </div>
    );
};

export default bookAppoint;