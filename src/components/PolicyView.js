import React from 'react';
import { Box, Tab, Tabs, Typography, Container } from '@mui/material';

const PolicyView = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderOverview = () => (
    <Box>
    <Box sx={{ marginBottom: '15px', borderBottom: '1px dotted #ccc', paddingBottom: '10px', paddingTop: '10px' }}>
      <Typography variant="h6" sx={{  marginBottom: '5px' }}>Effective Date:</Typography>
      <Typography color="text.secondary" sx={{ color: '#666' }}>01 Jan 2023</Typography>
    </Box>
    <Box sx={{ marginBottom: '15px', paddingBottom: '10px' }}>
      <Typography variant="h6" sx={{ marginBottom: '5px' }}>Expiration Date:</Typography>
      <Typography color="text.secondary" sx={{ color: '#666' }}>31 Dec 2023</Typography>
    </Box>
    <Box sx={{ marginBottom: '15px', paddingBottom: '10px' }}>
      <Typography variant="h6" sx={{  marginBottom: '5px' }}>Coverage Limit:</Typography>
      <Typography color="text.secondary" sx={{ color: '#666' }}>$500,000</Typography>
    </Box>
    <Box sx={{ marginBottom: '15px', paddingBottom: '10px' }}>
      <Typography variant="h6" sx={{  marginBottom: '5px' }}>Deductible:</Typography>
      <Typography color="text.secondary" sx={{ color: '#666' }}>
        $1,000 per incident
      </Typography>
    </Box>
  </Box>
  );

  const renderMoreInformation = () => (
    <Box sx={{ padding: '20px' }}>
      <Box sx={{ marginBottom: '15px' }}>
        <Typography variant="h6" sx={{ marginBottom: '15px' }}>Coverage Details:</Typography>
        <Typography color="text.secondary" sx={{ marginBottom: '10px' }}>
          Includes comprehensive and collision coverage, liability coverage, uninsured motorist coverage, and personal injury protection.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '15px' }}>
        <Typography variant="h6" sx={{ marginBottom: '15px' }}>Premium Information:</Typography>
        <Typography color="text.secondary" sx={{ marginBottom: '10px' }}>
          Annual premium: $1200, payable in monthly installments of $100. First installment due at policy start date.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '15px' }}>
        <Typography variant="h6" sx={{ marginBottom: '15px' }}>Contact for Inquiries:</Typography>
        <Typography color="text.secondary" sx={{ marginBottom: '10px' }}>
          For any questions or further information, please contact our support team at support@example.com or call us at (123) 456-7890.
        </Typography>
      </Box>
    </Box>
  );
  
  const renderOther = () => (
    <Box sx={{ padding: '20px' }}>
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