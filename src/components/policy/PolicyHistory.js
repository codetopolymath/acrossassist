import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, MenuItem, Select, FormControl, InputLabel, Button, IconButton, Typography, Card, Chip } from '@mui/material';
import { Search, Filter, ArrowForward } from 'lucide-react';
import { format } from 'date-fns';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#e6f7ff',
    color: '#2c3e50',
    fontFamily: 'sans-serif',
  },
  mainContent: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    padding: '20px',
    overflow: 'hidden',
  },
  header: {
    marginBottom: '20px',
  },
  searchFilters: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center',
  },
  dataGrid: {
    backgroundColor: '#f0f2f5',
    borderRadius: '10px',
    overflow: 'hidden',
    '& .MuiDataGrid-root': {
      border: 'none',
    },
    '& .MuiDataGrid-cell': {
      borderBottom: '1px solid #e0e0e0',
      padding: '10px', // Add padding to prevent overlapping
    },
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: '#3498db',
      color: 'black',
    },
    '& .MuiDataGrid-footerContainer': {
      borderTop: 'none',
    },
  },
};

const columns = [
  { field: 'policyNumber', headerName: 'Policy Number', flex: 1 },
  { field: 'policyType', headerName: 'Policy Type', flex: 1 },
  { field: 'customerName', headerName: 'Customer Name', flex: 1 },
  { 
    field: 'policyStatus', 
    headerName: 'Policy Status', 
    flex: 1.5,
    renderCell: (params) => (
      <Chip 
        label={params.value.split('(')[0].trim()} 
        color={getStatusColor(params.value)}
        size="small"
      />
    ),
  },
  { 
    field: 'policyEndDate', 
    headerName: 'Policy End Date', 
    flex: 1.5,
    renderCell: (params) => (
      <Box>
        <Typography variant="body2">{formatDate(params.value.split('(')[0].trim())}</Typography>
        {params.value.includes('Renewal Due') && (
          <Chip label="Renewal Due" color="warning" size="small" />
        )}
      </Box>
    ),
  },
  { 
    field: 'sumInsured', 
    headerName: 'Sum Insured', 
    flex: 1,
    renderCell: (params) => `$${params.value.toLocaleString()}`,
  },
  { 
    field: 'reservedAmount', 
    headerName: 'Reserved Amount', 
    flex: 1,
    renderCell: (params) => `$${params.value.toLocaleString()}`,
  },
  { 
    field: 'claimAmount', 
    headerName: 'Claim Amount', 
    flex: 1,
    renderCell: (params) => `$${params.value.toLocaleString()}`,
  },
  { 
    field: 'approved', 
    headerName: 'Approved', 
    flex: 1,
    renderCell: (params) => (
      <Chip 
        label={params.value} 
        color={getApprovalColor(params.value)}
        size="small"
      />
    ),
  },
];

const rows = [
  {
    id: 1,
    policyNumber: '598345',
    policyType: 'Health Insurance',
    customerName: 'Manu Jinnah',
    policyStatus: 'Active (Issued on Wed May 10, 2023)',
    policyEndDate: 'Fri Aug 03, 2024 (Renewal Due)',
    sumInsured: 122000,
    reservedAmount: 0,
    claimAmount: 0,
    approved: 'N/A'
  },
  {
    id: 2,
    policyNumber: '123456',
    policyType: 'Auto Insurance',
    customerName: 'Alice Smith',
    policyStatus: 'In Review (Quote Submitted on Mon Jun 17, 2024)',
    policyEndDate: 'N/A',
    sumInsured: 50000,
    reservedAmount: 0,
    claimAmount: 0,
    approved: 'Pending'
  },
  {
    id: 3,
    policyNumber: '789012',
    policyType: 'Life Insurance',
    customerName: 'Bob Johnson',
    policyStatus: 'Expired (Ended on Thu Mar 12, 2023)',
    policyEndDate: 'Thu Mar 12, 2023',
    sumInsured: 200000,
    reservedAmount: 0,
    claimAmount: 150000,
    approved: 'Yes'
  },
  {
    id: 4,
    policyNumber: '456789',
    policyType: 'Home Insurance',
    customerName: 'Clara Oswald',
    policyStatus: 'Cancelled (Cancelled on Tue Jan 05, 2024)',
    policyEndDate: 'Wed May 10, 2025',
    sumInsured: 300000,
    reservedAmount: 50000,
    claimAmount: 0,
    approved: 'N/A'
  },
  {
    id: 5,
    policyNumber: '987654',
    policyType: 'Travel Insurance',
    customerName: 'Danny Phantom',
    policyStatus: 'Active (Issued on Fri Jul 02, 2024)',
    policyEndDate: 'Sat Jul 02, 2025 (Renewal Due)',
    sumInsured: 10000,
    reservedAmount: 0,
    claimAmount: 0,
    approved: 'N/A'
  }
];

const getStatusColor = (status) => {
  if (status.includes('Active')) return 'success';
  if (status.includes('In Review')) return 'info';
  if (status.includes('Expired')) return 'error';
  if (status.includes('Cancelled')) return 'default';
  return 'default';
};

const getApprovalColor = (approval) => {
  if (approval === 'Yes') return 'success';
  if (approval === 'Pending') return 'warning';
  return 'default';
};

const formatDate = (dateString) => {
  if (dateString === 'N/A') return dateString;
  return format(new Date(dateString), 'MMM dd, yyyy');
};

export default function PolicyHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleSearch = () => {
    const filtered = rows.filter(row => 
      row.policyNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.policyType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRows(filtered);
  };

  const handleFilter = () => {
    const filtered = rows.filter(row => {
      const policyDate = new Date(row.policyEndDate.split('(')[0].trim());
      const isTypeMatch = filterType ? row.policyType === filterType : true;
      const isStartDateMatch = startDate ? policyDate >= new Date(startDate) : true;
      const isEndDateMatch = endDate ? policyDate <= new Date(endDate) : true;
      return isTypeMatch && isStartDateMatch && isEndDateMatch;
    });
    setFilteredRows(filtered);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.mainContent}>
        <Box sx={styles.header}>
          <Typography variant="h4" fontWeight="bold" color="#2c3e50">Policy History</Typography>
        </Box>
        <Card elevation={3} sx={{ padding: '20px', marginBottom: '20px', borderRadius: '10px' }}>
          <Box sx={styles.searchFilters}>
            <Box sx={styles.search}>
              <TextField 
                label="Search policies"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleSearch}>
                      <Search size={20} />
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <Box sx={styles.filters}>
              <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Policy Type</InputLabel>
                <Select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  label="Policy Type"
                >
                  <MenuItem value=""><em>All</em></MenuItem>
                  <MenuItem value="Health Insurance">Health Insurance</MenuItem>
                  <MenuItem value="Auto Insurance">Auto Insurance</MenuItem>
                  <MenuItem value="Life Insurance">Life Insurance</MenuItem>
                  <MenuItem value="Home Insurance">Home Insurance</MenuItem>
                  <MenuItem value="Travel Insurance">Travel Insurance</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Start Date"
                type="date"
                variant="outlined"
                size="small"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="End Date"
                type="date"
                variant="outlined"
                size="small"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <Button 
                variant="contained" 
                onClick={handleFilter} 
                startIcon={<Filter size={20} />}
                sx={{ 
                  bgcolor: '#2ecc71', 
                  '&:hover': { bgcolor: '#27ae60' } 
                }}
              >
                Apply Filters
              </Button>
            </Box>
          </Box>
        </Card>
        <Box sx={styles.dataGrid}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
            autoHeight
          />
        </Box>
      </Box>
    </Box>
  );
}
