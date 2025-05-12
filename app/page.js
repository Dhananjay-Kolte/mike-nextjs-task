'use client';
import React, { useState } from 'react';
import {
  Box, Button, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, TextField, Pagination, Tabs, Tab, Select, MenuItem, Checkbox, FormControlLabel
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonIcon from '@mui/icons-material/Person';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LogoutIcon from '@mui/icons-material/Logout';
import ExtensionIcon from '@mui/icons-material/Extension';
import SettingsIcon from '@mui/icons-material/Settings';

const rows = [
  { filename: 'text.txt', date: '9/2/2023, 10:57:53 AM', source: 'https://mercury.com/investor-database', name: 'Ben Savage', link: '/investor-database/ben-savage' },
  { filename: 'text.txt', date: '9/2/2023, 10:57:53 AM', source: 'https://mercury.com/investor-database', name: 'Ben Zises', link: '/investor-database/ben-zises' },
  { filename: 'text.txt', date: '9/2/2023, 10:57:53 AM', source: 'https://mercury.com/investor-database', name: 'Ben Savage', link: '/investor-database/ben-savage' },
  { filename: 'text.txt', date: '9/2/2023, 10:57:53 AM', source: 'https://mercury.com/investor-database', name: 'Ben Zises', link: '/investor-database/ben-zises' },
  { filename: 'text.txt', date: '9/2/2023, 10:57:53 AM', source: 'https://mercury.com/investor-database', name: 'Ben Savage', link: '/investor-database/ben-savage' },
  { filename: 'text.txt', date: '9/2/2023, 10:57:53 AM', source: 'https://mercury.com/investor-database', name: 'Ben Zises', link: '/investor-database/ben-zises' },
 // ...add more rows as needed
];

function CustomPagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  // Show 5 pages: two before and two after the current page
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Box display="flex" gap={1}>
      <Button
        variant="outlined"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        sx={{ minWidth: 80 }}
      >
        Previous
      </Button>
      {pageNumbers.map((num) => (
        <Button
          key={num}
          variant={num === currentPage ? "contained" : "outlined"}
          color={num === currentPage ? "primary" : "inherit"}
          onClick={() => onPageChange(num)}
          sx={{
            minWidth: 40,
            bgcolor: num === currentPage ? "#1976d2" : "#fff",
            color: num === currentPage ? "#fff" : "#000",
            fontWeight: num === currentPage ? 700 : 400,
            boxShadow: num === currentPage ? 2 : 0,
          }}
        >
          {num}
        </Button>
      ))}
      <Button
        variant="outlined"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        sx={{ minWidth: 80 }}
      >
        Next
      </Button>
    </Box>
  );
}

export default function Home() {
  const [tab, setTab] = React.useState(0);
  const [language, setLanguage] = React.useState('English');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const paginatedRows = rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  const menuItems = [
    'Useful SaaS',
    'SaaS - competitor',
    'B2B Email sample',
    'Marketing tools',
    'BUSIEST AIRPORTS',
    'Tennis Clubs in',
    'Investors_URLs',
    'Investors_info',
    'Amazon - list of',
    'Key reachvox',
    'PH_info',
    'HR_full',
    'HR_list',
    'HR test',
    'HR test v2',
    'PH upvoters',
    'Twitter Profile',
    'Telegram test',
    'HR_full',
    'HR_list',
    'HR test',
    'HR test v2',
    'PH upvoters',
    'Twitter Profile',
    'Telegram test',
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar Drawer */}   
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: '#171717',
            color: '#fff',
            width: 260,
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
            boxShadow: 4,
            zIndex: 1800,
            overflowX: 'hidden',
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', p: 1, justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#fff', borderRadius: '50%', bgcolor: '#232323', '&:hover': { bgcolor: '#333' } }}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>

            <Box alignItems="center" sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' , gap:1, pb:4}}>
              <Button variant="outlined" sx={{width:'90%', backgroundColor: '#40a17f',textAlign:'center', color: '#fff', fontWeight: 500, textTransform: 'none'}}>
               New Transformations
              </Button>
              <Button variant="outlined" sx={{width:'90%', textAlign:'start',  backgroundColor: '#fff', color: '#b8b6b6', fontWeight: 500, textTransform: 'none' }}>
               Search transformations
              </Button>
            </Box>
         
        <Divider sx={{ bgcolor: '#232323', width: '80%', margin: '0' }} />
        <Box sx={{ height: 600, overflowY: 'auto'}}>
          <List>
            {menuItems.map((text, index) => (
              <ListItem
                key={`${text}-${index}`}
                sx={{
                  p: 0,
                  minHeight: 32,
                  bgcolor: selectedMenuIndex === index ? '#232323' : 'inherit',
                  borderRadius: selectedMenuIndex === index ? 1 : 0,
                  cursor: 'pointer',
                }}
                disableGutters
                onClick={() => setSelectedMenuIndex(index)}
              >
                <Box display="flex" alignItems="center" width="100%">
                  <Box display="flex" alignItems="center" gap={0}>
                    <ListItemIcon sx={{ color: '#fff', minWidth: 28, justifyContent: 'center', alignItems: 'center', p: 1 }}>
                      <CommentOutlinedIcon sx={{ fontSize: 18 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        fontSize: 8,
                        minWidth: 0,
                        '.MuiListItemText-primary': {
                          fontSize: 12,
                          m: 0,
                          p: 0,
                          color: '#fff',
                          fontWeight: selectedMenuIndex === index ? 700 : 400,
                        },
                      }}
                    />
                  </Box>
                  <Box display="flex" alignItems="center" gap={0} ml="auto">
                    {index !== 0 && <ArrowUpwardIcon sx={{ fontSize: 14, color: '#fff' }} />}
                    <ArrowDownwardIcon sx={{ fontSize: 14, color: '#fff' }} />
                    <MoreVertIcon sx={{ fontSize: 16, color: '#fff' }} />
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Drawer bottom section */}
        <Divider sx={{ bgcolor: '#232323', width: '80%', margin: '0 auto' , p:0}} />
        <List>
          {['Subscription', 'Profile', 'Integrations', 'Logout', 'Install Chrome Browser Extension'].map((text, index) => {
            let icon;
            if (text === 'Subscription') icon = <CreditCardIcon sx={{ fontSize: 18, color: '#fff' }} />;
            else if (text === 'Profile') icon = <PersonIcon sx={{ fontSize: 18, color: '#fff' }} />;
            else if (text === 'Integrations') icon = <IntegrationInstructionsIcon sx={{ fontSize: 18, color: '#fff' }} />;
            else if (text === 'Logout') icon = <LogoutIcon sx={{ fontSize: 18, color: '#fff' }} />;
            else if (text === 'Install Chrome Browser Extension') icon = <ExtensionIcon sx={{ fontSize: 18, color: '#fff' }} />;
            return (
              <ListItem
                key={text}
                sx={{ p: 0, minHeight: 32, cursor: 'pointer' }}
                disableGutters
              >
                <Box display="flex" alignItems="center" width="100%">
                  <Box display="flex" alignItems="center" gap={0}>
                    <ListItemIcon sx={{ color: '#fff', minWidth: 28, justifyContent: 'center', alignItems: 'center', p: 1 }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        fontSize: 8,
                        minWidth: 0,
                        '.MuiListItemText-primary': {
                          fontSize: 12,
                          m: 0,
                          p: 0,
                          color: '#fff',
                          fontWeight: 400,
                        },
                      }}
                    />
                  </Box>
                </Box>
              </ListItem>
            ); 
          })}
        </List>
      </Drawer>
      {/* Drawer open button (when closed) */}
      {!drawerOpen && (
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{
            position: 'fixed',
            top: 16,
            left: 8,
            zIndex: 1400,
            bgcolor: '#232323',
            color: '#fff',
            borderRadius: '50%',
            boxShadow: 2,
            '&:hover': { bgcolor: '#333' },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}


      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,
          width: {
            xs: '100vw',
            md: drawerOpen ? 'calc(100vw - 260px)' : '100vw'
          },
          ml: {
            xs: 0,
            md: drawerOpen ? '260px' : 0
          },
          transition: 'width 0.3s, margin-left 0.3s',
        }}
      >
        <Box sx={{ p: 4, bgcolor: '#fff', minHeight: '100vh' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Tabs
              value={tab}
              onChange={(e, v) => setTab(v)}
              sx={{ mb: 2, '& .MuiTab-root': { color: '#40a17f', fontWeight: 500, fontSize: 16, textTransform: 'none'}, '& .Mui-selected': { color: '#40a17f',  fontWeight: 700  } }}
              TabIndicatorProps={{ style: { display: 'none' } }}
            >
              <Tab label="Investors_URLs" />
              <Tab label="History" />
              <Tab label="Exporting" />
              <Tab label="Export Logs" />
            </Tabs>
            
            <Box display="flex" justifyContent="flex-end" alignItems="center" mb={1}>
              <Button variant="contained" sx={{ bgcolor: '#a259ff', mr: 2, boxShadow: 3, '&:hover': { bgcolor: '#8e44ad' } }}>
                VIEW DEMO
              </Button>
              <Select
                value={language}
                onChange={e => setLanguage(e.target.value)}
                size="small"
                sx={{ bgcolor: '#fff', minWidth: 100 }}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>
                <MenuItem value="French">French</MenuItem>
              </Select>
            </Box>
          </Box>
         
          <Typography variant="h6" gutterBottom>
            Transformations left in this month: 9882 of 10000
          </Typography>
          <Button
            variant="contained"
            component="label"
            // startIcon={<CloudUploadIcon />}
            sx={{ mb: 2 , backgroundColor: '#40a17f', color: '#fff', fontWeight: 700, width:'300px', textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}
          >
            Choose File, Text, or Website to transform
            <input type="file" hidden />
            <Typography sx={{ color: '#000', fontSize: '15px', fontWeight: 600, mt: 0.5 }}>
              Max file size 50 Mb
            </Typography>
          </Button>
          {/* Add Column and Add Row buttons */}
          <Box sx={{ background: '#fff', display: 'inline-block', pb:3, pt:5}}>
            <Box display="flex" alignItems="center" gap={2}>
              <Button variant="outlined" startIcon={<AddCircleOutlineIcon sx={{ color: '#40a17f' }} />} sx={{ borderColor: '#40a17f', color: '#40a17f', fontWeight: 500, textTransform: 'none', '&:hover': { borderColor: '#2ecc71', background: '#f6fefb' } }}>
                Add Column
              </Button>
              <Button variant="outlined" startIcon={<AddCircleOutlineIcon sx={{ color: '#40a17f' }} />} sx={{ borderColor: '#40a17f', color: '#40a17f', fontWeight: 500, textTransform: 'none', '&:hover': { borderColor: '#2ecc71', background: '#f6fefb' } }}>
                Add Row
              </Button>
            </Box>
          </Box>
          <TableContainer component={Paper} sx={{ mb: 1, maxHeight: 400, overflowY: 'auto', boxShadow: 0, border: '1px solid #d3d3d3', borderRadius: 2 }}>
            <Table stickyHeader sx={{ borderCollapse: 'collapse' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ background: '#fff', zIndex: 2, border: '1px solid #d3d3d3', fontSize: 13, p: 0.5, fontWeight: 700 }}>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" alignItems="center">
                        FileName<SwapVertIcon/>
                      </Box>
                      <TextField size="small" placeholder="Filter FileName" sx={{ bgcolor: '#f6fefb', fontSize: 13, mt: 0.5 }} />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ background: '#fff', zIndex: 2, border: '1px solid #d3d3d3', fontSize: 13, p: 0.5, fontWeight: 700 }}>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" alignItems="center">
                        Date/Time<SwapVertIcon/>
                      </Box>
                      <TextField size="small" placeholder="Filter Date/Time" sx={{ bgcolor: '#f6fefb', fontSize: 13, mt: 0.5 }} />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ background: '#fff', zIndex: 2, border: '1px solid #d3d3d3', fontSize: 13, p: 0.5, fontWeight: 700 }}>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                          Source<SwapVertIcon/>
                        </Box>
                        <SettingsIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <TextField size="small" placeholder="Filter Source" sx={{ bgcolor: '#f6fefb', fontSize: 13, mt: 0.5 }} />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ background: '#fff', zIndex: 2, border: '1px solid #d3d3d3', fontSize: 13, p: 0.5, fontWeight: 700 }}>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                          Name<SwapVertIcon/>
                        </Box>
                        <SettingsIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <TextField size="small" placeholder="Filter Name" sx={{ bgcolor: '#f6fefb', fontSize: 13, mt: 0.5 }} />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ background: '#fff', zIndex: 2, border: '1px solid #d3d3d3', fontSize: 13, p: 0.5, fontWeight: 700 }}>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                          Link<SwapVertIcon/>
                        </Box>
                        <SettingsIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <TextField size="small" placeholder="Filter Link" sx={{ bgcolor: '#f6fefb', fontSize: 13, mt: 0.5 }} />
                    </Box>
                  </TableCell>
                  <TableCell align="right" sx={{ background: '#fff', zIndex: 2, border: '1px solid #d3d3d3', fontSize: 13, p: 0.5, fontWeight: 700 }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows.map((row, idx) => (
                  <TableRow
                    key={idx + (currentPage - 1) * rowsPerPage}
                    sx={{ minHeight: 16, height: 32, backgroundColor: idx % 2 === 1 ? '#f6f6f6' : '#fff' }}
                  >
                    <TableCell sx={{ border: '1px solid #d3d3d3', fontSize: 13, p: 0.5 }}>{row.filename}</TableCell>
                    <TableCell sx={{ border: '1px solid #d3d3d3', fontSize: 13, p: 0.5 }}>{row.date}</TableCell>
                    <TableCell sx={{ border: '1px solid #d3d3d3', fontSize: 13, p: 0.5 }}>{row.source}</TableCell>
                    <TableCell sx={{ border: '1px solid #d3d3d3', fontSize: 13, p: 0.5 }}>{row.name}</TableCell>
                    <TableCell sx={{ border: '1px solid #d3d3d3', fontSize: 13, p: 0.5 }}>{row.link}</TableCell>
                    <TableCell align="left" sx={{ border: '1px solid #d3d3d3', fontSize: 13, p: 0.5 }}>
                      <IconButton color="primary" sx={{ m: 0.5, border: '1px solid black', borderRadius: '10%' }}><EditIcon sx={{ fontSize: 16 }} /></IconButton>
                      <IconButton color="error" sx={{ m: 0.5, border: '1px solid black', borderRadius: '10%' }}><DeleteIcon sx={{ fontSize: 16 }} /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box display="flex" mt={2}>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </Box>
       {/* Sticky export-only footer bar */}
          <Box
            sx={{
              position: 'fixed',
              bottom: 0,
              left: {
                xs: 0,
                md: drawerOpen ? '260px' : 0
              },
              width: {
                xs: '100vw',
                md: drawerOpen ? 'calc(100vw - 260px)' : '100vw'
              },
              bgcolor: '#dbdbdb',
              py: 5,
              px: 4,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 1700,
              boxShadow: 3,
              transition: 'width 0.3s, left 0.3s',
            }}
          >
            {/* Left side */}
            <Box display="flex" alignItems="center" gap={2}>
              <Button variant="contained" sx={{ bgcolor: '#f3f3f3', color: '#232323', boxShadow: 'none', '&:hover': { bgcolor: '#e0e0e0' } }}>Update Google Sheet connection</Button>
              <Button variant="text" sx={{ color: '#8a8a8a', textTransform: 'none', minWidth: 0, p: 0, ml: 1, textDecoration: 'underline' }}>Reload Sample or Template</Button>
            </Box>
            {/* Center */}
            <Box display="flex" alignItems="center" gap={2}>
              <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#40a17f', '&.Mui-checked': { color: '#40a17f' } }} />} label={<span style={{ color: '#232323', fontWeight: 500 }}>Show sample data</span>} />
              <Button variant="contained" sx={{ bgcolor: '#f3f3f3', color: '#232323', boxShadow: 'none', '&:hover': { bgcolor: '#e0e0e0' } }}>Add Row to Sample Data</Button>
            </Box>
            {/* Right side */}
            <Button variant="contained" color="success" sx={{ minWidth: 120 }}>Export</Button>
          </Box>
        </Box>     
      </Box>  
      </Box>
   
  );
}
