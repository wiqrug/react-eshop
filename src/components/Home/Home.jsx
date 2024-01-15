// src/components/Home/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader, CardMedia, Typography } from "@mui/material";


export default function Home({certificates, cookie}) {
  // const [url, setUrl] = useState("http://localhost:3000/");
  // const [data, setData] = useState();
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const redirectOnCertificates = (e) => {
  //     e.preventDefault();
  //     setUrl("http://localhost:3000/Certificates")
  // };
  return (
    <>
      {/* <Routes>
                <Route path="/" element={<Certificates/>}/>
            </Routes> */}
      {cookie && cookie.candidateNumber !==0 && (<h1>Welcome back, {cookie.firstName}!</h1>)}
        <>
          <h2>Best Sellers</h2>
          <div className="cards"style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
            {certificates?.slice(0, 3).map(({ $id: id, title, price, description, imageSrc }) => (
              <Card key={id} sx={{ maxWidth: 345, flex: '1 0 30%', margin: '0.5rem'  }}>
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
              </Card>
            ))}
            {certificates && certificates.length > 3 && (
            <Card sx={{ maxWidth: 345, flex: '1 0 30%', margin: '0.5rem' }}>
              <CardHeader>
                <Typography variant="h6">Want more?</Typography>
              </CardHeader>
              <CardContent>
                <Link to="/Certificates">View All</Link>
              </CardContent>
            </Card>
          )}
          </div>

        </>
        <h2>Awesome Discounts</h2>
        <div className="cards"style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
          {certificates?.slice(3, 6).map(({ $id: id, title, price, description, imageSrc }) => (
                <Card key={id} sx={{ maxWidth: 345, flex: '1 0 30%', margin: '0.5rem'  }}>
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
                </Card>
              ))}
        </div>
    </>
  );
}
