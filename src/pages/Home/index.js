import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';
import Cart from '../../components/Cart';
import Navbar from '../../components/Navbar';
import { Card, Container, Grid, Table, TableBody, Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import useStyles from './homeStyles.js';
import formatRupiah from '../../utils/formatRupiah';
const Home = () => {
    const classes = useStyles();
    const { storeProducts } = useContext(ProductContext);
    return (
        <div>
            <Navbar />

            <Container>
                <Typography className={classes.homeTitle} variant="h4" align="center">Pilih Belanjaanmu</Typography>

                <Grid container spacing={3}>
                    <Grid xs={8} item>
                        <Card>
                            <Table>
                                <TableHead className={classes.tableHead}>
                                    <TableRow>
                                        <TableCell className={classes.tableTitle} align="center" colSpan={2}>
                                            Produk
                                        </TableCell>
                                        <TableCell className={classes.tableTitle} align="center">
                                            Harga
                                        </TableCell>
                                        <TableCell className={classes.tableTitle} align="center">
                                            Aksi
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    
                                    {
                                        storeProducts.map(product => (
                                            <TableRow key={product.id}>
                                                <TableCell align="center">
                                                    <img className={classes.productImage} src={product.image} alt={product.name} />
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Typography className={classes.productName}>
                                                        {product.name}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="center">
                                                    {formatRupiah(product.price)}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Link className={classes.productLink} to={`/products/${product.id}`}>
                                                        <Chip clickable color="secondary" variant="outlined" size="small" label="detail" />
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </Card>
                    </Grid>
                    <Grid xs={4} item>
                        <Cart />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
