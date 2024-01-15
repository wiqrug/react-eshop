// src/components/Home/Home.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardHeader, CardMedia, CssBaseline, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


export default function Home({certificates, cookie}) {

  const navigate = useNavigate();

  const theme = createTheme({
      palette: {
        background: {
          paper: '#ffffff'
        },
      },
    }
  );
  
  const handleClick = () => {
    navigate("/Certificates");
  }

  return (
    <div className="backgroundGrad">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {cookie && cookie.candidateNumber !==0 && (<h1>Welcome, {cookie.firstName}!</h1>)}
        <>
          <h1>Best Sellers</h1>
          <div className="cards"style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
            {certificates?.slice(0, 3).map(({ $id: id, title, price, description, imageSrc }) => (
              <Card key={id} className="card" sx={{ maxWidth: 330, flex: '1 0 30%', margin: '0.5rem 2rem' }}>
                <Link to={`/Certificate/${title}`} style={{textDecoration : "none"}}>
                
                <CardMedia
                  component="img"
                  height="194"
                  image={imageSrc? imageSrc : "https://thewisdomofwalt.com/wp-content/uploads/2019/10/Learn-something-new.jpg"}
                  sx={{objectFit: 'contain' }}
                />
                <CardHeader 
                  title={
                    <Typography variant="h6" noWrap sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap',textAlign: 'center' }}>
                      {title}
                    </Typography>
                  }
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
                </CardContent>
                </Link>
              </Card>
            ))}
            
          </div>
          {certificates && certificates.length > 3 && (
            <Button variant="contained" size="large" sx={{  m: "10px auto", display: "block" }} onClick={handleClick} disableElevation>
                View All Certificates
            </Button>            )}
        </>
        <h2>Awesome Discounts</h2>
        <div className="cards"style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
          {certificates?.slice(3, 6).map(({ $id: id, title, price, description, imageSrc }) => (
                <Card key={id} className="card" sx={{ maxWidth: 250, maxHeight:350, flex: '1 0 30%', margin: '0.5rem' }}>
                  <Link to={`/Certificate/${title}`} style={{textDecoration : "none"}}>
                  <CardHeader 
                    title={
                      <Typography variant="h6" noWrap sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {title}
                      </Typography>
                    }
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={imageSrc? imageSrc : "https://thewisdomofwalt.com/wp-content/uploads/2019/10/Learn-something-new.jpg"}
                    sx={{objectFit: 'contain' }}
                  />
                  <CardContent>
                  <Typography variant="body2" color="text.secondary" noWrap sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {description}
                  </Typography>
                  </CardContent>
                  </Link>
                </Card>
              ))}
        </div>
    </ThemeProvider>
    </div>
  );
}
