// src/components/Home/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardHeader, CardMedia, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


export default function Home({certificates, cookie}) {

  const theme = createTheme({
    palette: {
      background: {
        paper: '#d1cfcf', // your color
      },
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      {cookie && cookie.candidateNumber !==0 && (<h1>Welcome, {cookie.firstName}!</h1>)}
        <>
          <h2>Best Sellers</h2>
          <div className="cards"style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
            {certificates?.slice(0, 3).map(({ $id: id, title, price, description, imageSrc }) => (
              <Card key={id} sx={{ maxWidth: 345, flex: '1 0 30%', margin: '0.5rem'  }}>
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
                  image={imageSrc}
                  sx={{objectFit: 'contain' }}
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
                </CardContent>
                </Link>
              </Card>
            ))}
            {certificates && certificates.length > 3 && (
              <Button variant="contained" size="large" sx={{ mt: 3, mb: 2 }} ><Link to="/Certificates" style={{textDecoration : "none"}}>View All</Link></Button>
            )}
          </div>

        </>
        <h2>Awesome Discounts</h2>
        <div className="cards"style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
          {certificates?.slice(3, 6).map(({ $id: id, title, price, description, imageSrc }) => (
                <Card key={id} sx={{ maxWidth: 250, maxHeight:350, flex: '1 0 30%', margin: '0.5rem'  }}>
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
                    image={imageSrc}
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
  );
}
