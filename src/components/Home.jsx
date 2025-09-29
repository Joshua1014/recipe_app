import React, { useState } from "react";
import { Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const recipes = [
        {
            id: 1,
            title: "Chicken Burger"
        },
        {
            id: 2,
            title: "Burritos"
        },
        {
            id: 3,
            title: "Pesto Pasta"
        }
    ]

    return (
        <Grid container spacing={3}>
            <Grid size={4}>
                {recipes.map((recipe, index) => (
                    <Card>
                        <CardContent>
                            <Typography>
                                {recipe.title}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                <Card>
                    <CardContent>
                        <Button onClick={() => navigate('/add-recipe')}>Add Recipe</Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
};

export default Home;
