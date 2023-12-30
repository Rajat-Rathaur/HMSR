import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { formatDate } from '../utilities/functions';
function Row(props) {
    const { index, row, headers, collapse } = props;
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

                {collapse &&
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                }
                {index && <TableCell>{index}</TableCell>}
                {Object?.keys(headers)?.map((headerKey) => (
                    !headers[headerKey]?.hidden && (
                        <TableCell
                            key={headerKey}
                            component="th"
                            scope="row"
                            align={headers[headerKey]?.align || 'center'}
                            sx={{ minWidth: headers[headerKey]?.minWidth }}
                        >
                            {headers[headerKey]?.type === 'date' ? formatDate(row[headerKey]) : row[headerKey]}
                        </TableCell>
                    )
                ))}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={Object?.keys(headers)?.length + 1}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography marginBottom={3} className='text-xs font-[Poppins] font-medium leading-4 px-1 text-zinc-400'>
                                Additional Details
                            </Typography>

                            <Table size="small" aria-label="additional-details">
                                <TableBody>
                                    {Object?.keys(row)?.map((property) => (headers[property] && headers[property]?.hidden && (
                                        <TableRow key={property}>
                                            <TableCell >
                                                {headers[property]?.label}
                                            </TableCell>
                                            <TableCell>
                                                {row[property] || '--'}
                                            </TableCell>
                                        </TableRow>)
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function TableCollapsible({ rowData, headers, isLoading, srNo = true, key, collapse = true }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event?.target?.value, 10));
        setPage(0);
    };

    const visibleHeaders = Object?.keys(headers)?.filter((headerKey) => !headers[headerKey]?.hidden);
    return (
        <Paper>

            <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead className="bg-slate-900">
                        <TableRow>
                            {collapse && <TableCell style={{ color: 'white' }} />}
                            <TableCell style={{ color: 'white' }}>SrNo</TableCell>
                            {visibleHeaders?.map((headerKey) => (
                                <TableCell key={headerKey} style={{ color: 'white' }} align={headers[headerKey]?.align || 'center'}>
                                    {headers[headerKey]?.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {(rowsPerPage > 0
                            ? rowData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rowData)?.map((row, index) => (
                                <Row key={key} row={row} index={index + 1} headers={headers} collapse={collapse} />
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 50, { label: 'All', value: -1 }]}
                component="div"
                count={rowData?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </Paper>
    );
}

