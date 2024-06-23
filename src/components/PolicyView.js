import React from 'react';
import { Box, Tab, Tabs, Typography, Container, Grid } from '@mui/material';

const PolicyView = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderOverview = () => (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: '15px', borderBottom: '1px dotted #ccc', paddingBottom: '10px', paddingTop: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Policy number:</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>59245</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: '15px', borderBottom: '1px dotted #ccc', paddingBottom: '10px', paddingTop: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Coverage Amounts (₹):</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>500000 Rs/-</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: '15px', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Policy type:</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>Travel Insurance</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: '15px', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Policy status:</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>Pending For <strong>APPROVAL</strong></Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: '15px', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Policy start date:</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>23 Jan 2023</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: '15px', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Policy end date:</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>24 Jan 2024</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: '15px', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Deductible:</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}><strong>NA</strong></Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: '15px', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Tenure:</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>1 Year</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
  

  const renderMoreInformation = () => (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: '15px', borderBottom: '1px dotted #ccc', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Insured Details :-</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Insured person's name :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>Sameer Dubey</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Insured person's date of birth :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>04/12/1980</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Relationship to the insured (if applicable) :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>--</Typography>
          </Box>
          <Box sx={{ marginBottom: '15px', borderBottom: '1px dotted #ccc', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Additional Insured :-</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Additional insured person's name :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>Karuna Dubey</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Additional Insured person's date of birth :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>08/23/1982</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Relationship to the insured (if applicable) :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>Spouse</Typography>
          </Box>
          <Box sx={{ marginBottom: '15px', borderBottom: '1px dotted #ccc', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Underwriting Information :-</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Name :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>Dr. Satendra Bhosale</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Email :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>john.doe@example.com</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Phone :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>555-123-4567</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Decisions Or Remark:</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>Approved with conditions</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginBottom: '15px', borderBottom: '1px dotted #ccc', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Insured person's contact information :-</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Phone Number :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>555-123-4545</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Email :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>Sameer.debey@abc.com</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Instagram Profile :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>https://instagram.com/john_doe</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Twitter Profile :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>https://twitter.com/john_doe</Typography>
          </Box>
          <Box sx={{ marginBottom: '15px', borderBottom: '1px dotted #ccc', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Additional Insured contact information :-</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Phone Number :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>NA</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Email :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>NA</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Instagram Profile :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>NA</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Twitter Profile :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>NA</Typography>
          </Box>
          <Box sx={{ marginBottom: '15px', borderBottom: '1px dotted #ccc', paddingBottom: '10px' }}>
            <Typography variant="h6" sx={{ marginBottom: '5px' }}>Policy Premiums and Payments :-</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Premium amount :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>457000 Rs/-</Typography>
            <Typography sx={{ marginBottom: '5px' }}>Frequency of premium payments :</Typography>
            <Typography color="text.secondary" sx={{ color: '#666' }}>Monthly</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
  
  const renderOther = () => (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box sx={{ borderBottom: '1px dotted #ccc', paddingBottom: '10px' }}>
          <Typography variant="h6" sx={{ marginBottom: '5px' }}>Create Date :</Typography>
          <Typography color="text.secondary" sx={{ color: '#666' }}>Jun 23, 2024 11:09 PM</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ borderBottom: '1px dotted #ccc', paddingBottom: '10px' }}>
          <Typography variant="h6" sx={{ marginBottom: '5px' }}>Modified Date :</Typography>
          <Typography color="text.secondary" sx={{ color: '#666' }}>Jun 23, 2024 11:09 PM</Typography>
        </Box>
      </Grid>
    </Grid>
      <Typography variant="h6" sx={{ marginBottom: '15px' }}>Policy Benefits</Typography>
      <Typography color="text.secondary" sx={{ marginBottom: '10px' }}>
        Enjoy peace of mind with 24/7 roadside assistance, a no-claims discount, and a courtesy car in case of an accident.
      </Typography>
  
      <Typography variant="h6" sx={{ marginBottom: '15px' }}>Making Changes to Your Policy</Typography>
      <Typography color="text.secondary" sx={{ marginBottom: '10px' }}>
        To make changes to your policy, such as updating your address or adding a new driver, please contact our customer service team.
      </Typography>
  
      <Typography variant="h6" sx={{ marginBottom: '15px' }}>Frequently Asked Questions (FAQ)</Typography>
      <Typography color="text.secondary" sx={{ marginBottom: '5px' }}>
        <strong>Q: How do I renew my policy?</strong><br />
        A: Your policy will be automatically renewed. We will notify you 30 days before your renewal date with any changes.
      </Typography>
      <Typography color="text.secondary" sx={{ marginBottom: '5px' }}>
        <strong>Q: What should I do in case of an accident?</strong><br />
        A: Immediately contact our claims department and provide your policy number and details of the incident.
      </Typography>
      <Typography color="text.secondary" sx={{ marginBottom: '5px' }}>
        <strong>Q: Can I cancel my policy at any time?</strong><br />
        A: Yes, you can cancel your policy at any time. Please note that fees may apply depending on the timing of the cancellation.
      </Typography>
    </Box>
  );


  return (
    <Container  sx={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '30px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleChange} aria-label="policy tabs">
          <Tab label="OVERVIEW" />
          <Tab label="MORE INFORMATION" />
          <Tab label="OTHER" />
        </Tabs>
      </Box>
      {activeTab === 0 && renderOverview()}
      {activeTab === 1 && renderMoreInformation()}
      {activeTab === 2 && renderOther()}
    </Container>
  );
};

export default PolicyView;