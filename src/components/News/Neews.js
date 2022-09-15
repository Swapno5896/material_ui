import React, { useEffect, useState } from 'react';
import Arttical from '../Arttical/Arttical'
import Grid from '@mui/material/Grid'
const Neews = () => {
    const [articals, setArticals] = useState([])
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-08-15&sortBy=publishedAt&apiKey=625ea15c7cbe4b5c9b14c17eea4bcde5")
            .then(res => res.json())
            .then(data => setArticals(data.articles))
    }, [])
    console.log(articals)
    return (
        <div>
            <Grid container spacing={2}>


                {
                    articals.map(artical => <Arttical artical={artical}></Arttical>)
                }
            </Grid>


        </div>

    );
};

export default Neews;