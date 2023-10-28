/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';
import { Grid } from '@mui/material';

function CardList() {
    return (
        <Grid className="main p-4" >
            <Grid display={'flex'} gap={2} marginBottom={'10px'}>
            <Grid className="comp">
                <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/wb-dsgn-ico1.svg" alt="imgg" />
                <h1>Brochure Websites</h1>
                <p>Websites designed for businesses to establish an online presence and promote their products or services.</p>
                <a href="#">Get in Touch</a>
            </Grid>
            <Grid className="comp mrgn">
                <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/wb-dsgn-ico1.svg" alt="imgg" />
                <h1>eCommerce Stores</h1>
                <p>Websites for online shopping, where users can browse and purchase products or services.</p>
                <a href="#">Get in Touch</a>
            </Grid>
            <Grid className="comp">
                <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/wb-dsgn-ico3.svg" alt="imgg" />
                <h1>Brochure Websites</h1>
                <p>Websites designed for businesses to establish an online presence and promote their products or services.</p>
                <a href="#">Get in Touch</a>
            </Grid>
            <Grid className="comp mrgn">
                <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/wb-dsgn-ico4.svg" alt="imgg" />
                <h1>eCommerce Stores</h1>
                <p>Websites for online shopping, where users can browse and purchase products or services.</p>
                <a href="#">Get in Touch</a>
            </Grid>
            </Grid>
            <Grid display={'flex'} gap={2}>
            <Grid className="comp">
                <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/wb-dsgn-ico5.svg" alt="imgg" />
                <h1>Brochure Websites</h1>
                <p>Websites designed for businesses to establish an online presence and promote their products or services.</p>
                <a href="#">Get in Touch</a>
            </Grid>
            <Grid className="comp mrgn">
                <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/wb-dsgn-ico6.svg" alt="imgg" />
                <h1>eCommerce Stores</h1>
                <p>Websites for online shopping, where users can browse and purchase products or services.</p>
                <a href="#">Get in Touch</a>
            </Grid>
            <Grid className="comp">
                <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/wb-dsgn-ico7.svg" alt="imgg" />
                <h1>Brochure Websites</h1>
                <p>Websites designed for businesses to establish an online presence and promote their products or services.</p>
                <a href="#">Get in Touch</a>
            </Grid>
            <Grid className="comp mrgn">
                <img src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/wb-dsgn-ico8.svg" alt="imgg" />
                <h1>eCommerce Stores</h1>
                <p>Websites for online shopping, where users can browse and purchase products or services.</p>
                <a href="#">Get in Touch</a>
            </Grid>
            </Grid>
        </Grid>
    );
}

export default CardList;
