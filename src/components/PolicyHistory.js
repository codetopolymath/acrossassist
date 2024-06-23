import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from './Sidebar';


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
  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <header style={{ padding: '10px', backgroundColor: '#f5f5f5', textAlign: 'center', width: '100%' }}>
        <h1>Policy History</h1>
        <div>
            <img style={{ paddingRight: '40px', width:'40px', height:'40px'}} src="https://aacrm.thorintech.com/assets/images/avatars/avatar_default.jpg" alt="User Icon" />
          </div>
      </header>
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <Sidebar isOpen={true} style={{ width: 240, flexShrink: 0 }} />
        <div style={{ flexGrow: 1, padding: '20px', overflow: 'auto' }}>
          <DataGrid
            style={{ width: '100%' }}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}