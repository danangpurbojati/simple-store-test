import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Button, Card, CardContent, Container, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@material-ui/core';
import useStyles from './cartDetailStyles';
import formatRupiah from '../../utils/formatRupiah';
import sumPrice from '../../utils/sumPrice';

const CartDetail = () => {
    const classes = useStyles();
    const { cart } =  useContext(CartContext);
    const history = useHistory();

    const stripeButton = () => {
        history.push("/payment");
    }

    return (
        <div>
            <Navbar />
            
            <Container className={classes.pageWrapper} maxWidth="sm">
                <Card>
                    <CardContent>
                        <Typography className={classes.pageTitle} variant="h4" align="center">Keranjang Belanja</Typography>
                        {
                            cart.length > 0 ? (
                                <div>
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center" colSpan={2}>
                                                    Produk
                                                </TableCell>
                                                <TableCell align="center">
                                                    Jumlah
                                                </TableCell>
                                                <TableCell align="right">
                                                    Harga
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                cart.map(item => (
                                                    <TableRow key={item.id}>
                                                        <TableCell>
                                                            <img className={classes.productImage} src={item.image} alt={item.name} />
                                                        </TableCell>
                                                        <TableCell>
                                                            {item.name}
                                                        </TableCell>
                                                        <TableCell align="center">
                                                            {item.qty}
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            {formatRupiah(item.qty * item.price)}
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow>
                                                <TableCell className={classes.totalPrice} colSpan={3}>
                                                    Total
                                                </TableCell>
                                                <TableCell className={classes.totalPrice} align="right">
                                                    {formatRupiah(sumPrice(cart))}
                                                </TableCell>
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                    <Button variant="contained" fullWidth onClick={stripeButton}>Pembayaran</Button>
                                </div>
                            ) : (
                                <Typography align="center">tidak ada barang</Typography>
                            )
                        }
                    </CardContent>
                </Card>

            </Container>
        </div>
    )
}

export default CartDetail
