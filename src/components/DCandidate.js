import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/dCandidate";

import {
  Grid,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  styled,
} from "@mui/material";

import DCandidateForm from "./DCandidateForm";
const Styles = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2), // Adds margin around the Paper
  padding: theme.spacing(3), // Adds padding inside the Paper
}));
//{classes,props}=props
const DCandidate = (props) => {
  //props={classes,...props}
  //const[x,setX]=useState(0);  //0 is initial value
  //to update X we can use setX
  //setX(5);
  //use Effect callback function is called whenever the X changes
  useEffect(() => {
    props.fetchAllDCandidates();
  }, []); //componentDidMount

  return (
    <div>
      <Styles>
        <Paper elevation={3}>
          <Grid container>
            <Grid item xs={6}>
              {/* Assuming DCandidateForm is another component here */}
              <DCandidateForm />
            </Grid>
            <Grid item xs={6}>
              <div>List of Candidates</div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>Age</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.dCandidateList && props.dCandidateList.length > 0 ? (
                      props.dCandidateList.map((record, index) => (
                        <TableRow key={index}>
                          <TableCell>{record.fullName}</TableCell>
                          <TableCell>{record.address}</TableCell>
                          <TableCell>{record.age}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={3}>No candidates found</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Paper>
      </Styles>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dCandidateList: state.dCandidate.list,
});

const mapActionToProps = {
  fetchAllDCandidates: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionToProps)(DCandidate);
