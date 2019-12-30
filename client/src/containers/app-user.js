import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import store from "../store";
import "../resources/css/app.css";
import HeaderUser from "../components/header-user";
import Breadcrumb from "../components/breadcrumb";
import ContentUser from "../components/content-user";
import SidebarUser from "../components/sidebar-user";
import LogoSection from "../components/logo-section";
import Authentication from '../utils/authentication';
import CandidateNotify from '../components/candidate-notify';

let schemaName = JSON.parse(localStorage.getItem('userProfile')) !== null ? JSON.parse(localStorage.getItem('userProfile')).schemaName : "";

const styles = theme => ({
  navIconHide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

class AppUser extends Component {

  state = {
    isCollapsed: false,
    expandOrCollapse: "",
    isDisplaySendEmailToCandidate: false,
    isdisplaySendIcon : false,
  }

  expandOrCollapseSidebar(isCollapsed) {
    this.setState({
      isCollapsed: isCollapsed,
      expandOrCollapse: isCollapsed ? "collapse" : "expand"
    });
  }

  updateExpandOrCollapseAsEmpty() {
    this.setState({
      expandOrCollapse: ""
    });
  }

  componentWillMount() {
    if (this.props.history.location.pathname !== `/${schemaName}/user/forgot-password`) {
      this.authenticateUser();
    }
  }

  authenticateUser() {
    if (!Authentication.isUserAuthenticated()) {
      return this.props.history.push({
        pathname: `/${schemaName}/user/login`
      })
    }
  }
  expandOrCollapseOnDemand(collapse) {
    // if(collapse === "collapse"){
    //   this.setState({
    //     isCollapsed : true
    //   })
    // }
  }
  handleClickGoToAdmin = () => {
    this.props.history.push(`/${schemaName}/user/login`);
  }
  callBacklogOut = () => {
    Authentication.deauthenticateUser();
    store.dispatch({
      type: 'GET_LOGGED_USER_DETAILS_FULFILLED',
      payload: {},
    })
    return this.props.history.push({ pathname: "/"+ this.props.match.params.schemaUser + "/user/login" })
    // this.props.history.push({ pathname: "/"+ window.location.pathname.split("/")[1] + "/admin/login" })// also working
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        
        { JSON.parse(localStorage.getItem('userProfile')) !== null && JSON.parse(localStorage.getItem('userProfile')).schemaName !== undefined &&
          JSON.parse(localStorage.getItem('userProfile')).prod === "User" && JSON.parse(localStorage.getItem('userProfile')) !== null && window.location.pathname.split("/")[2].slice(0, 5) === "user" ?

          JSON.parse(localStorage.getItem('userProfile')) !== null && JSON.parse(localStorage.getItem('userProfile')).schemaName !== undefined &&
            window.location.pathname.split("/")[1] === JSON.parse(localStorage.getItem('userProfile')).schemaName ?

          <MuiThemeProvider>
            {localStorage.getItem('authToken') !== null && localStorage.getItem('userProfile') !== null ? <Grid container>
              <Grid id="div-sidebar" item xs={12} sm={2} className={this.state.isCollapsed == true ? "sidebar-width" : "" + classes.navIconHide}>
                <LogoSection expandOrCollapseSidebar={this.expandOrCollapseSidebar.bind(this)} />
                <SidebarUser {...this.props} isCollapsed={this.state.isCollapsed} expandOrCollapse={this.state.expandOrCollapse} updateExpandOrCollapseAsEmpty={this.updateExpandOrCollapseAsEmpty.bind(this)} expandOrCollapseOnDemand={this.expandOrCollapseOnDemand.bind(this)} />
              </Grid>
              <Grid id="div-main-container" item xs={12} sm={10} className={this.state.isCollapsed === true ? "container-width" : ""}>
                <HeaderUser {...this.props} />
                <Breadcrumb className={classes.navIconHide} {...this.props} />
                <ContentUser />
              </Grid>
            </Grid> : this.authenticateUser.bind(this)}
            
            <CandidateNotify />

          </MuiThemeProvider>
          : <div style={{ textAlign: "center", marginTop: "15%", }}><span style={{ display: "none" }}>{setTimeout(this.callBacklogOut, 2000)}</span><h1> You are not authorised to access this page</h1></div>
          : <div style={{ textAlign: "center", marginTop: "15%", }}>
            <h1>You are not authorised to access this page</h1>
            <p style={{ color: "#636363" }}>Click here for <span style={{ color: "#0d79d0", cursor: "pointer" }} onClick={this.handleClickGoToAdmin}>User Login</span></p>
          </div>
        }
      </div>
      //:
      // JSON.parse(localStorage.getItem('userProfile')).prod === "User" && window.location.pathname.slice(1, 5) === "user" ?
      //     <MuiThemeProvider>
      //       {localStorage.getItem('authToken') !== null && localStorage.getItem('userProfile') !== null ? <Grid container>
      //         <Grid id="div-sidebar" item xs={12} sm={2} className={this.state.isCollapsed == true ? "sidebar-width" : "" + classes.navIconHide}>
      //           <LogoSection expandOrCollapseSidebar={this.expandOrCollapseSidebar.bind(this)} />
      //           <SidebarUser {...this.props} isCollapsed={this.state.isCollapsed} expandOrCollapse={this.state.expandOrCollapse} updateExpandOrCollapseAsEmpty={this.updateExpandOrCollapseAsEmpty.bind(this)} expandOrCollapseOnDemand={this.expandOrCollapseOnDemand.bind(this)} />
      //         </Grid>
      //         <Grid id="div-main-container" item xs={12} sm={10} className={this.state.isCollapsed === true ? "container-width" : ""}>
      //           <HeaderUser {...this.props} />
      //           <Breadcrumb className={classes.navIconHide} {...this.props} />
      //           <ContentUser />
      //         </Grid>
      //       </Grid> : this.authenticateUser.bind(this)}
      //     </MuiThemeProvider> :
      //     <div style={{ textAlign: "center", marginTop: "15%", }}><h1>You are not authorised to access this page</h1>
      //     <p style={{color: "#636363"}}>Click here for <span style={{color:"#0d79d0", cursor: "pointer" }} onClick={this.handleClickGoToAdmin}>User Login</span></p>
      //     </div>
    );
  }
}

AppUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(store) {
  return {
    userStore: store.userStore,
    breadcrumbStore: store.breadcrumbStore
  };
}

export default connect(mapStateToProps)(withStyles(styles)(AppUser));