import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import store from "../store";
import { connect } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import "../resources/css/app.css";
import Authentication from '../utils/authentication';


const styles = theme => ({
  navIconHide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

class AppAdmin extends Component {
  state = {
    isCollapsed: false,
    expandOrCollapse: ""
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
     
      </div>
    );
  }
}

AppAdmin.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(store) {
  return {
    // userStore: store.userStore,
    // breadcrumbStore: store.breadcrumbStore
  };
}

export default connect(mapStateToProps)(withStyles(styles)(AppAdmin));