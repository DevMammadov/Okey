import React, { FC, useState } from "react";
import { useStyles } from "./table.style";
import { TableContainer, TableBody, Table as MuiTable, Collapse, Button, TableRow, TableCell } from "@material-ui/core";
import { useTranslator } from "localization";

interface ITable {
  data: any[];
  show?: number;
}

export const Table: FC<ITable> = ({ data, show }) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const rows = show && show > 0 && data?.length > show ? data?.slice(0, show) : data;
  const lang = useTranslator("main");

  return (
    <>
      <TableContainer>
        <MuiTable className={styles.table} aria-label="customized table">
          <TableBody>
            {rows?.map((row: any, i: number) => (
              <TableRow className={styles.tableRow} key={i}>
                <TableCell className={styles.tableCell} align="left">
                  {row[Object.keys(row)[0]]}
                </TableCell>
                <TableCell className={styles.tableCell} align="left">
                  {row[Object.keys(row)[1]]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {show && show > 0 && data?.length > show && (
        <>
          <Collapse in={open} style={{ width: "100%" }}>
            <TableContainer>
              <MuiTable>
                <TableBody>
                  {data?.slice(show, data.length).map((row: any, i: number) => (
                    <TableRow className={styles.tableRowCollapse} key={i}>
                      <TableCell className={styles.tableCell} align="left">
                        {row[Object.keys(row)[0]]}
                      </TableCell>
                      <TableCell className={styles.tableCell} align="left">
                        {row[Object.keys(row)[1]]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </MuiTable>
            </TableContainer>
          </Collapse>
          <Button onClick={() => setOpen(!open)} className={styles.moreButton}>
            {lang.lookAll}
          </Button>
        </>
      )}
    </>
  );
};
