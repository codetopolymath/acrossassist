import React, { useState, useCallback } from 'react';
import { 
  Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Typography, Menu, MenuItem, IconButton, Box
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PlanBenefits = () => {
  const [benefits, setBenefits] = useState([
    { id: 1, name: 'Medical Expenses including Evacuation', sumInsured: 100000, deductibles: 100, checked: false },
    { id: 2, name: 'Personal Accident', sumInsured: 100000, deductibles: 0, checked: false },
    { id: 3, name: 'Loss of passport', sumInsured: 2000, deductibles: 100, checked: false },
    { id: 4, name: "Golfer's Hole-In-One", sumInsured: 2000, deductibles: 100, checked: false },
    { id: 5, name: 'Home Burglary Insurance', sumInsured: 2000, deductibles: 100, checked: false },
    { id: 6, name: 'Loss of Checked Baggage', sumInsured: 2000, deductibles: 100, checked: false },
    { id: 7, name: 'Trip Cancellation', sumInsured: 2000, deductibles: 100, checked: false },
  ]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedBenefitId, setSelectedBenefitId] = useState(null);

  const handleCheck = useCallback((id) => {
    setBenefits((prevBenefits) =>
      prevBenefits.map((benefit) =>
        benefit.id === id ? { ...benefit, checked: !benefit.checked } : benefit
      )
    );
  }, []);

  const handleActionClick = useCallback((event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedBenefitId(id);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setSelectedBenefitId(null);
  }, []);

  const handleViewDetails = useCallback(() => {
    console.log(`View details for benefit ID: ${selectedBenefitId}`);
    window.location.href = '/policy-view';
    handleClose();
  }, [selectedBenefitId]);

  const handleStartClaim = useCallback(() => {
    console.log(`Start claim for benefit ID: ${selectedBenefitId}`);
    // Functionality for starting a claim will be added here later
    handleClose();
  }, [selectedBenefitId]);

  return (
    <Box sx={{ margin: '20px', marginBottom: '40px' }}> 
      <Paper elevation={3} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
        <Typography 
          variant="h5" 
          align="center" 
          sx={{ 
            padding: '24px', 
            backgroundColor: '#f0f8ff', 
            color: '#333',
            fontWeight: 'bold',
            borderBottom: '2px solid #e0e0e0'
          }}
        >
          POLICIES AND BENEFITS
        </Typography>
        <TableContainer sx={{ maxHeight: 'calc(100vh - 250px)' }}> {/* Adjusted maxHeight */}
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Select</TableCell>
                <TableCell sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Benefit Name</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Sum Insured</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Deductibles</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {benefits.map(({ id, name, sumInsured, deductibles, checked }) => (
                <TableRow 
                  key={id}
                  sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}
                >
                  <TableCell align="center">
                    <Checkbox
                      checked={checked}
                      onChange={() => handleCheck(id)}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>{name}</TableCell>
                  <TableCell align="right">${sumInsured.toLocaleString()}</TableCell>
                  <TableCell align="right">${deductibles.toLocaleString()}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={(event) => handleActionClick(event, id)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleViewDetails}>View Details</MenuItem>
        <MenuItem onClick={handleStartClaim}>Start Claim</MenuItem>
      </Menu>
    </Box>
  );
};

export default PlanBenefits;