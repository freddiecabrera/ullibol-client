import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import { LoginLink } from 'react-stormpath';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class MasterPage extends React.Component {
  render() {
    return (
      <DocumentTitle title='Ullibol | Login'>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div className='MasterPage'>
            {/*<Header />*/}
            { this.props.children }
          </div>
        </MuiThemeProvider>
      </DocumentTitle>
    );
  }
}
