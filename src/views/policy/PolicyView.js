import React from 'react';
import { Box, Tab, Tabs, Typography, Container, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, List } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import OverviewIcon from '@mui/icons-material/Visibility';
import OtherIcon from '@mui/icons-material/MoreHoriz';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PolicyView = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const faqs = [
    {
      question: 'How do I make a claim?',
      answer: 'To make a claim, please contact our customer service team at 555-123-4567 or email claims@insurance.com',
    },
    {
      question: 'How do I renew my policy?',
      answer: 'To renew your policy, please contact our customer service team at 555-123-4567 or email renewals@insurance.com',
    },
    {
      question: 'How do I cancel my policy?',
      answer: 'To cancel your policy, please contact our customer service team at 555-123-4567 or email cancellations@insurance.com',
    },
    {
      question: 'How do I update my address?',
      answer: 'To update your address, please log in to your account on our website or contact our customer service team at 555-123-4567',
    },
  ];

  const [overview, setOverview] = React.useState({
    policyNumber: '59245',
    coverageAmount: '500000 Rs/-',
    policyType: 'Travel Insurance',
    policyStatus: 'Pending For APPROVAL',
    policyStartDate: '23 Jan 2023',
    policyEndDate: '24 Jan 2024',
    deductible: 'NA',
    tenure: '1 Year'
  });

  const [other, setOther] = React.useState({
    createDate: 'Jun 22, 2023 11:09 PM',
    modifiedDate: 'Jun 23, 2024 11:09 PM',
  });

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const soothing = {
    background: '#f0f4f8', // Light blue-grey
    primary: '#5b8a72', // Soft green
    secondary: '#86a5d9', // Soft blue
    text: {
      primary: '#2c3e50', // Dark blue-grey
      secondary: '#34495e', // Lighter blue-grey
    },
    card: '#ffffff', // White
    hover: '#e8f4ea', // Very light green
  };

  const renderOverview = () => (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {Object.entries(overview).map(([label, value]) => (
          <Grid item xs={12} sm={6} key={label}>
            <Card elevation={0} sx={{ 
              height: '100%', 
              transition: 'all 0.3s', 
              backgroundColor: soothing.card,
              '&:hover': { 
                transform: 'translateY(-5px)', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                backgroundColor: soothing.hover,
              } 
            }}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: soothing.text.primary }}>
                  {label.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </Typography>
                <Typography variant="body1" sx={{ color: soothing.text.secondary }}>
                  {value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );


  const renderMoreInformation = () => {
    // Data of insurer, insured, and policy
    const sections = [
      {
        title: 'Insured Details :-',
        details: [
          ["Insured person's name :", "Sameer Dubey"],
          ["Insured person's date of birth :", "04/12/1980"],
          ["Relationship to the insured (if applicable) :", "--"],
        ],
      },
      {
        title: 'Additional Insured :-',
        details: [
          ["Additional insured person's name :", "Karuna Dubey"],
          ["Additional Insured person's date of birth :", "08/23/1982"],
          ["Relationship to the insured (if applicable) :", "Spouse"],
        ],
      },
      {
        title: 'Underwriting Information :-',
        details: [
          ["Name :", "Dr. Satendra Bhosale"],
          ["Email :", "john.doe@example.com"],
          ["Phone :", "555-123-4567"],
          ["Decisions Or Remark:", "Approved with conditions"],
        ],
      },
      {
        title: "Insured person's contact information :-",
        details: [
          ["Phone Number :", "555-123-4545"],
          ["Email :", "Sameer.debey@abc.com"],
          ["Instagram Profile :", "https://instagram.com/john_doe"],
          ["Twitter Profile :", "https://twitter.com/john_doe"],
        ],
      },
      {
        title: 'Additional Insured contact information :-',
        details: [
          ["Phone Number :", "NA"],
          ["Email :", "NA"],
          ["Instagram Profile :", "NA"],
          ["Twitter Profile :", "NA"],
        ],
      },
      {
        title: 'Policy Premiums and Payments :-',
        details: [
          ["Premium amount :", "457000 Rs/-"],
          ["Frequency of premium payments :", "Monthly"],
        ],
      },
    ];
  
    return (
      <Box sx={{ padding: '20px' }}>
        <Grid container spacing={3}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card elevation={0} sx={{ 
                height: '100%', 
                transition: 'all 0.3s', 
                backgroundColor: soothing.card,
                '&:hover': { 
                  transform: 'translateY(-5px)', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  backgroundColor: soothing.hover,
                } 
              }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: soothing.primary }}>{section.title}</Typography>
                  {section.details.map(([label, value]) => (
                    <Box key={label} sx={{ mb: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: soothing.text.primary }}>{label}</Typography>
                      <Typography variant="body2" sx={{ color: soothing.text.secondary }}>{value}</Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  
  const renderOther = () => (
    <Box sx={{ padding: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card elevation={0} sx={{ 
            height: '100%', 
            transition: 'all 0.3s', 
            backgroundColor: soothing.card,
            '&:hover': { 
              transform: 'translateY(-5px)', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              backgroundColor: soothing.hover,
            } 
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: soothing.primary }}>Create Date</Typography>
              <Typography variant="body1" sx={{ color: soothing.text.secondary }}>{other.createDate}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card elevation={0} sx={{ 
            height: '100%', 
            transition: 'all 0.3s', 
            backgroundColor: soothing.card,
            '&:hover': { 
              transform: 'translateY(-5px)', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              backgroundColor: soothing.hover,
            } 
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: soothing.primary }}>Modified Date</Typography>
              <Typography variant="body1" sx={{ color: soothing.text.secondary }}>{other.modifiedDate}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{ my: 3, fontWeight: 'bold', color: soothing.primary }}>Policy Benefits</Typography>
      <Typography variant="body1" paragraph sx={{ color: soothing.text.secondary }}>
        Enjoy peace of mind with 24/7 roadside assistance, a no-claims discount, and a courtesy car in case of an accident.
      </Typography>
  
      <Typography variant="h5" sx={{ my: 3, fontWeight: 'bold', color: soothing.primary }}>Making Changes to Your Policy</Typography>
      <Typography variant="body1" paragraph sx={{ color: soothing.text.secondary }}>
        To make changes to your policy, such as updating your address or adding a new driver, please contact our customer service team.
      </Typography>
  
      <Typography variant="h5" sx={{ my: 3, fontWeight: 'bold', color: soothing.primary }}>Frequently Asked Questions (FAQ)</Typography>
      <List>
        {faqs.map((faq, index) => (
          <Accordion 
            key={index} 
            sx={{ 
              mb: 2, 
              boxShadow: 'none', 
              '&:before': { display: 'none' }, 
              transition: 'all 0.3s',
              backgroundColor: soothing.card,
              '&:hover': { 
                transform: 'translateY(-2px)', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                backgroundColor: soothing.hover,
              } 
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: soothing.secondary }} />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
              sx={{ backgroundColor: soothing.background }}
            >
              <Typography sx={{ fontWeight: 'bold', color: soothing.text.primary }}>Q: {faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: soothing.card }}>
              <Typography sx={{ color: soothing.text.secondary }}>A: {faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', width: '100%', marginTop: '20px', backgroundColor: soothing.background }}>
      <Container maxWidth="lg" sx={{ 
        boxShadow: '0 0 20px rgba(0,0,0,0.05)', 
        borderRadius: '12px', 
        padding: '30px', 
        flexGrow: 1,
        backgroundColor: soothing.card
      }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs 
            value={activeTab} 
            onChange={handleChange} 
            aria-label="policy tabs" 
            variant="fullWidth" 
            indicatorColor="primary" 
            textColor="primary" 
            centered
            sx={{ 
              '& .MuiTab-root': { 
                fontWeight: 'bold', 
                fontSize: '1rem',
                transition: 'all 0.3s',
                color: soothing.text.secondary,
                position: 'relative',
                overflow: 'hidden',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: soothing.primary,
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.3s ease-in-out',
                },
                '&:hover': { 
                  color: soothing.primary,
                  backgroundColor: 'transparent',
                  '&::after': {
                    transform: 'translateX(0)',
                  },
                },
              },
              '& .Mui-selected': {
                color: `${soothing.primary} !important`,
                '&::after': {
                  transform: 'translateX(0)',
                },
              },
              '& .MuiTabs-indicator': {
                display: 'none', 
              }
            }}
          >
            <Tab icon={<OverviewIcon />} label="OVERVIEW" />
            <Tab icon={<InfoIcon />} label="MORE INFORMATION" />
            <Tab icon={<OtherIcon />} label="OTHER" />
          </Tabs>
        </Box>
        {activeTab === 0 && renderOverview()}
        {activeTab === 1 && renderMoreInformation()}
        {activeTab === 2 && renderOther()}
      </Container>
    </Box>
  );
};

export default PolicyView;

