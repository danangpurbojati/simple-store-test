import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import Cart from '../Cart';
import Navbar from '../Navbar';
import formatRupiah from '../../utils/formatRupiah';

import { Button, Card, CardContent, Container, Grid, TextField, Typography } from '@material-ui/core';
import useStyles from './productDetailStyles';

const ProductDetail = () => {
    const classes = useStyles();
    const { id } = useParams();
    const { storeProducts, reduceStock } = useContext(ProductContext);
    const { cart, addItem } =  useContext(CartContext);
    const [product, setProduct] = useState();
    const [ amount, setAmount] = useState(0);

    const amountChange = (event) => {
        setAmount(event.target.value)
    };

    const addProduct = (event) => {
        event.preventDefault();
        addItem(product, parseInt(amount));
        reduceStock(id, parseInt(amount));
        setAmount(0)
    };
    
    useEffect(() => {
        const filterProductById = (id) => {
            const productById = storeProducts.filter(product => product.id === id)[0];
            setProduct(productById);
        };

        filterProductById(id);
    });

    return (
        <div>
            <Navbar />
                <Typography align="center" variant="h4" className={classes.title}>Detail Produk</Typography>

            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Card>
                            <CardContent>
                                {
                                    product && (
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <img src={product.image} alt={product.name} />
                                            </Grid>
                                            <Grid item xs={8}>
                                                <div className={classes.productInfo}>
                                                    <Typography className={classes.productDesc}>Nama Produk:</Typography>
                                                    <Typography>{product.name}</Typography>
                                                </div>
                                                <div className={classes.productInfo}>
                                                    <Typography className={classes.productDesc}>Deskripsi:</Typography>
                                                    <Typography>{product.description}</Typography>
                                                </div>
                                                <div className={classes.productInfo}>
                                                    <Typography className={classes.productDesc}>Harga:</Typography>
                                                    <Typography>{formatRupiah(product.price)}</Typography>
                                                </div>
                                                <div>
                                                    <Typography className={classes.productDesc}>Jumlah Stok:</Typography>
                                                    <Typography>{product.stock}</Typography>
                                                </div>
                                                <form className={classes.form} onSubmit={addProduct}>
                                                    <Typography className={classes.productDesc}>Jumlah Pembelian</Typography>
                                                    <TextField variant="outlined" size="small" className={classes.input} value={amount} onChange={amountChange} type="number" min="0" max={product.stock} />
                                                    <Button variant="contained" type="submit" disabled={product.stock === 0 || amount === 0}>Tambahkan Ke Keranjang</Button>
                                                </form>
                                            </Grid>
                                        </Grid>
                                    )
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Cart />
                    </Grid>
                </Grid>
            </Container>            
        </div>
    )
}

export default ProductDetail
