import React,{useState, useEffect} from 'react'
import { Box, Button, Typography, Divider, TextField } from '@mui/material'
import { Autocomplete, FormControl } from "@mui/material"
import { List, ListItem, ListItemText } from "@mui/material";

const BillingDetails = () => {

  const [tambons, setTambons] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [provinces, setProvinces] = useState([]);

  const [tambonID, setTambonID] = useState(0); 
  const [amphureID, setAmphureID] = useState(0);
  const [provinceID, setProvinceID] = useState(0);
  const [country, setCountry] = useState('TH');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [addInfo, setAddInfo] = useState('');

  const [selectedIndex, setSelectedIndex] = useState(null);

  const paymentOptions = [
    "Direct Bank Transfer",
    "Cash On Paotang",
    "Cash On Delivery",
  ];

  useEffect(() => {
    const fetchData = async () => {
        try {
        const [provinceRes, districtRes, subDistrictRes] = await Promise.all([
            fetch("https://raw.githubusercontent.com/kongvut/thai-province-data/refs/heads/master/api/latest/province.json"),
            fetch("https://raw.githubusercontent.com/kongvut/thai-province-data/refs/heads/master/api/latest/district.json"),
            fetch("https://raw.githubusercontent.com/kongvut/thai-province-data/refs/heads/master/api/latest/sub_district.json")
        ]);

        const [provinceData, districtData, subDistrictData] = await Promise.all([
            provinceRes.json(),
            districtRes.json(),
            subDistrictRes.json()
        ]);

        setProvinces(provinceData);
        setAmphures(districtData);
        setTambons(subDistrictData);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (tambonID) {
      // filter และเอา zip_code แรกที่เจอ
      const district = tambons.find(item => item.id === tambonID);
      if (district) {
        setZipCode(district.zip_code);
      } else {
        setZipCode(""); // ถ้าไม่เจอ
      }
    }
  }, [tambonID]);
    
  return (
    <>
        <Box sx={{maxWidth: '100%', height: 'auto', mx: 'auto', mt: 4, p: 4}}>
            <Typography sx={{typography: { xs: "h4", md: "h3" }, textAlign: 'center', fontWeight: { xs: "bold", md: "bold" }, mb: 4}}>Billing Details</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: { xs: "none", md: 'repeat(2, 1fr)' }, gap: 4}}>
                <Box sx={{display: 'grid', gap: 4, fontWeight: 'bold'}}>
                    <Box sx={{ display: { xs: "grid", md: 'flex' }, justifyContent: { xs: "none", md: 'flex-start' }, gap: 4 }}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            placeholder="Enter first name"
                            sx={{
                                width: '100%',
                                bgcolor: 'white',
                                borderRadius: '10px',
                                '& .MuiOutlinedInput-root': {
                                    height: 64, // เท่ากับ h-16
                                },
                            }}
                        fullWidth
                        />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            placeholder="Enter last name"
                            sx={{
                                bgcolor: 'white',
                                borderRadius: '10px',
                                '& .MuiOutlinedInput-root': {
                                    height: 64,
                                },
                            }}
                        fullWidth
                        />
                    </Box>
                    <TextField
                        label="Company Name (Optional)"
                        variant="outlined"
                        placeholder="Enter Company Name"
                        sx={{
                            bgcolor: 'white',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                            height: 64, // เท่ากับ h-16
                            },
                        }}
                    fullWidth
                    />
                    <FormControl
                        sx={{
                            width: { xs: '100%', md: "48%" },
                            mt: 2,
                            bgcolor: 'white',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                            height: 64, // เท่ากับ h-16
                            },
                        }}
                    >
                        <Autocomplete
                            value={provinces.find(p => p.id === provinceID) || null}
                            onChange={(event, newValue) => {
                            setProvinceID(newValue ? newValue.id : null);
                            }}
                            options={country === "TH" ? provinces : []}
                            getOptionLabel={(option) => `${option.name_th} - ${option.name_en}`}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Choose Province"
                                variant="outlined"
                                sx={{
                                height: 64,
                                "& .MuiOutlinedInput-root": {
                                    height: 64,
                                },
                                }}
                            />
                            )}
                        />
                    </FormControl>
                    <FormControl
                        sx={{
                            width: { xs: '100%', md: "48%" },
                            mt: 2,
                            bgcolor: 'white',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                            height: 64,
                            },
                        }}
                    >
                    <Autocomplete
                        value={amphures.find(a => a.id === amphureID) || null}
                        onChange={(event, newValue) => {
                        setAmphureID(newValue ? newValue.id : null);
                        }}
                        options={amphures.filter(a => a.province_id === provinceID)}
                        getOptionLabel={(option) => `${option.name_th} - ${option.name_en}`}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose District"
                            variant="outlined"
                            sx={{
                            height: 64,
                            "& .MuiOutlinedInput-root": {
                                height: 64,
                            },
                            }}
                        />
                        )}
                    />
                    </FormControl>
                    <FormControl
                        sx={{
                            width: { xs: '100%', md: "48%" },
                            mt: 2,
                            bgcolor: 'white',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                                height: 64, // เท่ากับ h-16
                            },
                        }}
                    >
                    <Autocomplete
                        value={tambons.find(t => t.id === tambonID) || null}
                        onChange={(event, newValue) => {
                        setTambonID(newValue ? newValue.id : null);
                        }}
                        options={tambons.filter(t => t.district_id === amphureID)}
                        getOptionLabel={(option) => `${option.name_th} - ${option.name_en}`}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose Sub-District"
                            variant="outlined"
                            sx={{
                            height: 64,
                            "& .MuiOutlinedInput-root": {
                                height: 64,
                            },
                            }}
                        />
                        )}
                    />
                    </FormControl>
                    <TextField
                        label="ZIP code"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        variant="outlined"
                        sx={{
                            bgcolor: 'white',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                                height: 64, // เท่ากับ h-16
                            },
                        }}
                    fullWidth
                    />
                    <TextField
                        label="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        variant="outlined"
                        placeholder="Enter Phone"
                        sx={{
                            bgcolor: 'white',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                                height: 64, // เท่ากับ h-16
                            },
                        }}
                    fullWidth
                    />
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        placeholder="Enter Email"
                        sx={{
                            bgcolor: 'white',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                                height: 64, // เท่ากับ h-16
                            },
                        }}
                    fullWidth
                    />
                    <TextField
                        label="Additional Information"
                        value={addInfo}
                        onChange={(e) => setAddInfo(e.target.value)}
                        variant="outlined"
                        sx={{
                            bgcolor: 'white',
                            borderRadius: '10px',
                            '& .MuiOutlinedInput-root': {
                                height: 64, // เท่ากับ h-16
                            },
                        }}
                    fullWidth
                    />
                </Box>
                <Box sx={{typography: 'h4', px: { xs: 2, md: 10 }}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                            <Typography sx={{typography: { xs: "h5", md: "h3" }, textAlign: 'start', fontWeight: { xs: "bold", md: "bold" }, color: 'black'}}>Product</Typography>
                            <Typography sx={{typography: { xs: "body", md: "h6" }, textAlign: 'start', color: 'gray'}}>Asgaard sofa x 1</Typography>
                            <Typography sx={{typography: { xs: "body", md: "h6" }, textAlign: 'start', color: 'gray'}}>Subtotal</Typography>
                            <Typography sx={{typography: { xs: "body", md: "h6" }, textAlign: 'start', color: 'gray'}}>Total</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4}}>
                            <Typography sx={{typography: { xs: "h5", md: "h3" }, textAlign: 'end', fontWeight: { xs: "bold", md: "bold" }, color: 'black'}}>Subtotal</Typography>
                            <Typography sx={{typography: { xs: "body", md: "h6" }, textAlign: 'start', color: 'gray'}}>Rs. 250,000.00</Typography>
                            <Typography sx={{typography: { xs: "body", md: "h6" }, textAlign: 'start', color: 'gray'}}>Rs. 250,000.00</Typography>
                            <Typography sx={{typography: { xs: "h6", md: "h4" }, textAlign: 'start', fontWeight: { xs: "bold", md: "bold" }, color: '#B88E2F'}}>Rs. 250,000.00</Typography>
                        </Box>                        
                    </Box>
                    <Divider/>
                    <List
                        sx={{
                            listStyleType: "disc",
                            display: "flex",
                            flexDirection: "column",
                            gap: 0,
                        }}
                    >
                    {paymentOptions.map((text, index) => (
                        <ListItem
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            sx={{
                                display: "list-item",
                                p: 0,
                                cursor: "pointer",
                                color: selectedIndex === index ? "black" : "gray",
                                textDecoration: selectedIndex === index ? "underline" : "none",
                                transition: "color 0.2s",
                                "&:hover": { color: "black" },
                            }}
                        >
                        <ListItemText
                            primary={<Typography variant="h6">{text}</Typography>}
                        />
                        </ListItem>
                    ))}
                    </List>
                    <Typography
                        sx={{
                            typography: { xs: "body2", md: "h6" },
                            textAlign: "start",
                            color: "black"
                        }}
                    >
                    Your personal data will be used to support your experience
                    throughout this website to manage access to your account, and for other purposes described in our{" "}
                    <Box
                        component="span"
                        sx={{
                        fontWeight: "bold",
                        color: "black",
                        display: "inline",
                        }}
                    >
                        Privacy Policy.
                    </Box>
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2}}>
                        <Button
                            variant="contained"
                            sx={{
                                typography: 'h6',
                                bgcolor: 'white',
                                color: 'black',
                                fontWeight: 'bold',
                                border: 1,
                                borderRadius: 2,
                                textTransform: 'none', // ไม่ให้เป็นตัวพิมพ์ใหญ่หมด
                                px: 4,
                                py: 1.5,
                                '&:hover': {
                                    bgcolor: '#f5f5f5',
                                },
                            }}
                        >
                            Place Order
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default BillingDetails