import React, { useState, useEffect } from "react";
import { Typography, CircularProgress } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Grid from '@mui/material/Grid2';
import { axiosInstance } from "../utils/axiosInstance.js";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "80vh" }}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom align="center">
        Product List
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Footer />
    </div>
  );
};

export default Home;
