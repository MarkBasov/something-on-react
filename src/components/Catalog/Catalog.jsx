import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsStartAsync, clearProducts } from '../../redux/products/productsSlice'
import { selectGetProducts } from '../../redux/products/selector'
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

const useStyles = makeStyles({
  tableImg: {
    width: 60,
    height: 'auto',
  },
})

const Catalog = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  const selectedProducts = useSelector(selectGetProducts)

  const fetchGetProductStart = () => {
    dispatch(fetchProductsStartAsync())
  }

  useEffect(() => {
    fetchGetProductStart()
    return () => dispatch(clearProducts)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (selectedProducts?.length) {
      setProducts([...selectedProducts])
    }
  }, [selectedProducts])

  const columns = [
    {
      field: 'id',
      headName: 'ID',
      id: 0,
      minWidth: 170,
    },
    {
      field: 'date',
      headName: 'Date',
      id: 1,
      minWidth: 170,
    },
    {
      field: 'name',
      headName: 'Name',
      id: 2,
      minWidth: 170,
    },
    {
      field: 'image',
      headName: 'View',
      id: 3,
      minWidth: 170,
    }
  ]
      // rows={products} columns={columns} pageSize={5} checkboxSelection />
  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {(columns?.map((column) => (
              <TableCell
                key={column.id}
                style={{ minWidth: column.minWidth }}
              >
                {column.headName}
              </TableCell>
              ))) || null}
            </TableRow>
          </TableHead>
          <TableBody>
          {(products?.map((row, key) => (
            <TableRow key = {row.id}>
              <TableCell>
                {row?.id}
              </TableCell>
              <TableCell>
                {row?.first_brewed}
              </TableCell>
              <TableCell>
                {row?.name}
              </TableCell>
              <TableCell>
                <img className={classes.tableImg} src={row?.image_url} alt="Картинки нет((" />
              </TableCell>
            </TableRow>
          )))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default Catalog
