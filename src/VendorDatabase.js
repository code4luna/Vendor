import React, { useState } from 'react';
import { Container, Table, InputGroup, FormControl } from 'react-bootstrap';

const VendorDatabase = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const sampleData = [
        { id: 1, name: 'Vendor 1', area: 'Area 1', type: 'Type A' },
        { id: 2, name: 'Vendor 2', area: 'Area 2', type: 'Type B' },
        { id: 3, name: 'Vendor 3', area: 'Area 1', type: 'Type A' },
        { id: 4, name: 'Vendor 4', area: 'Area 3', type: 'Type C' },
    ];

    const filteredData = sampleData.filter(
        (vendor) =>
            vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="vendor-database">
            <h1>Vendor Database</h1>
            <p>Search by area or type of vendor:</p>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                <FormControl
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Area</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((vendor) => (
                        <tr key={vendor.id}>
                            <td>{vendor.id}</td>
                            <td>{vendor.name}</td>
                            <td>{vendor.area}</td>
                            <td>{vendor.type}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default VendorDatabase;
