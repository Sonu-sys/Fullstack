import React from 'react'

const ListEmployeeComponent = () => {
    const dummyData=[{
        "id":1,
        "firstName":"Sonu",
        "lastName": "Bhandari",
        "email": "sonu@gmail.com"
    },
    {
        "id":2,
        "firstName":"Sita",
        "lastName": "Khatri",
        "email": "sita@gmail.com"

    },
    {
        "id":3,
        "firstName":"Maya",
        "lastName": "Khatri",
        "email": "Maya@gmail.com"

    },
]
  return (
    <div>
        <h1>List Of Employee</h1>
        <table>
            <thead>
                <tr>
                    <th>Employee First Name</th>
                    <th>Employee First Last</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee=>
                        <tr> key={employee.id}
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>

                        </tr>

                    )}
                    <tr>

                </tr>
            </tbody>

        </table>
    </div>
  )
}

export default ListEmployeeComponent
