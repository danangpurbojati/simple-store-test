import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';
import { Button, Card, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './cartStyles';
import formatRupiah from '../../utils/formatRupiah';

const Cart = () => {
    const classes = useStyles();
    const { restoreStock } = useContext(ProductContext);
    const { cart, removeItem } =  useContext(CartContext);

    const removeProduct = (item) => {
        removeItem(item, item.qty);
        restoreStock(item.id, item.qty);
    }

    return (
        <Card>
            <Typography align="center" className={classes.cartTitle}>Keranjang Belanja</Typography>
            {
                cart.length > 0 ? (
                    <div>
                        <Table>
                            <TableHead className={classes.cartHeader}>
                                <TableRow>
                                    <TableCell className={classes.cartTitleHeader} align="center">
                                        Produk
                                    </TableCell>
                                    <TableCell className={classes.cartTitleHeader} align="center">
                                        Jumlah
                                    </TableCell>
                                    <TableCell className={classes.cartTitleHeader} align="center">
                                        Harga
                                    </TableCell>
                                    <TableCell className={classes.cartTitleHeader} align="center">
                                        Aksi
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    cart.map(item => (
                                        <TableRow  key={item.id}>
                                            <TableCell align="center">{item.name}</TableCell>
                                            <TableCell align="center">{item.qty}</TableCell>
                                            <TableCell align="center">{formatRupiah(item.qty * item.price)}</TableCell>
                                            <TableCell align="center">
                                                <IconButton color="secondary" onClick={() => removeProduct(item)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>

                        <Link className={classes.cartLink} to="/cart-detail">
                            <Button variant="contained" fullWidth>
                                Checkout
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <Typography align="center">tidak ada barang</Typography>
                )
            }
        </Card>
    )
}

export default Cart
