import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, MenuItem, Select, FormControl, InputLabel, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Sidebar from '../sidebar/Sidebar';

// Define styles as objects outside the component to prevent re-creation on each render
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  mainContent: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  contentArea: {
    flexGrow: 1,
    padding: '20px',
    overflow: 'auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
  },
  filters: {
    display: 'flex',
    alignItems: 'center',
  },
  dataGrid: {
    width: '100%',
  },
};

const columns = [
  { field: 'policyNumber', headerName: 'Policy Number', width: 150 },
  { field: 'policyType', headerName: 'Policy Type', width: 150 },
  { field: 'customerName', headerName: 'Customer Name', width: 150 },
  { field: 'policyStatus', headerName: 'Policy Status', width: 150 },
  { field: 'policyEndDate', headerName: 'Policy End Date', width: 150 },
  { field: 'sumInsured', headerName: 'Sum Insured', width: 150 },
  { field: 'reservedAmount', headerName: 'Reserved Amount', width: 150 },
  { field: 'claimAmount', headerName: 'Claim Amount', width: 150 },
  { field: 'approved', headerName: 'Approved', width: 150 },
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

export default function PolicyHistory() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterType, setFilterType] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleSearch = () => {
    const filtered = rows.filter(row => 
      row.policyNumber.includes(searchTerm) ||
      row.policyType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRows(filtered);
  };

  const handleFilter = () => {
    const filtered = rows.filter(row => {
      const policyDate = new Date(row.policyEndDate);
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
        <Box sx={styles.contentArea}>
          <Box sx={styles.header}>
            <Box sx={styles.search}>
              <TextField 
                label="Search"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                sx={{ marginRight: '10px', marginBottom: '10px', marginLeft: '10px'}}
              />
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </Box>
            <Box sx={styles.filters}>
              <FormControl variant="outlined" size="small" sx={{ minWidth: 120, marginRight: '10px' }}>
                <InputLabel>Type</InputLabel>
                <Select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  label="Type"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
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
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ marginRight: '10px' }}
              />
              <TextField
                label="End Date"
                type="date"
                variant="outlined"
                size="small"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ marginRight: '10px' }}
              />
              <Button variant="contained" color="primary" onClick={handleFilter} startIcon={<FilterListIcon />}>
                Filter
              </Button>
            </Box>
          </Box>
          <DataGrid
            style={styles.dataGrid}
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>
      </Box>
    </Box>
  );
}