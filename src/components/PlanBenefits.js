import React, { useState } from 'react';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const PlanBenefits = () => {
  const [benefits, setBenefits] = useState([
    { id: 1, name: 'Medical Expenses including Evacuation', sumInsured: 100000, deductibles: 100, checked: false },
    { id: 2, name: 'Personal Accident', sumInsured: 100000, deductibles: 0, checked: false },
    { id: 3, name: 'Loss of passport', sumInsured: 2000, deductibles: 100, checked: false },
    { id: 4, name: "Golfer's Hole-In-One", sumInsured: 2000, deductibles: 100, checked: false },
    { id: 5, name: 'Home Burglary Insurance', sumInsured: 2000, deductibles: 100, checked: false },
    { id: 6, name: 'Loss of Checked Baggage', sumInsured: 2000, deductibles: 100, checked: false },
    { id: 7, name: 'Trip Cancellation', sumInsured: 2000, deductibles: 100, checked: false },
    // Add the rest of the benefits here
  ]);

  const handleCheck = (id) => {
    setBenefits(benefits.map(benefit => 
      benefit.id === id ? { ...benefit, checked: !benefit.checked } : benefit
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" style={{ margin: '20px', padding: '40px' }} align="center">
        Plan Benefits (Your benefit wise sum insured is as follows)
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Select</TableCell>
            <TableCell>Benefit Name</TableCell>
            <TableCell align="right">Sum Insured</TableCell>
            <TableCell align="right">Deductibles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {benefits.map((benefit) => (
            <TableRow key={benefit.id}>
              <TableCell align="center">
                <Checkbox
                  checked={benefit.checked}
                  onChange={() => handleCheck(benefit.id)}
                  color="primary"
                />
              </TableCell>
              <TableCell>{benefit.name}</TableCell>
              <TableCell align="right">{benefit.sumInsured}</TableCell>
              <TableCell align="right">{benefit.deductibles}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlanBenefits;