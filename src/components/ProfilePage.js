import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import Header from './Header'

export default class ProfilePage extends React.Component {
  render() {
    document.body.style.backgroundColor = '#1B1B1B'
    return (
      <DocumentTitle title={`My Profile`}>
      <div className="container">
      <Header />
          <div className="row">
            <div className="col-xs-12">
              <h3>My Profile</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <UserProfileForm />
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
