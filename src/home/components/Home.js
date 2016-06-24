import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { actions as orgActions } from '../../generated/organization';
import H1 from './../../components/H1';

import styles from './home.css';

const allActions = Object.assign({}, orgActions);

const Org = ({ organization }) =>
  <Link className={styles.link} to={`org/${organization.key}`}>{organization.name}</Link>;

Org.propTypes = {
  organization: PropTypes.object.isRequired,
};

const Organizations = ({ organizations }) =>
  <div>
  {organizations.map((organization, id) => (
    <Org key={id} organization={organization} />
  ))}
  </div>;

Organizations.propTypes = {
  organizations: PropTypes.array.isRequired,
};

class Home extends Component {
  componentDidMount() {
    this.props.actions.getOrganizations_get({ limit: 20, offset: 0 });
  }

  render() {
    return (
      <div>
        <H1>Organizations</H1>
        <Organizations organizations={this.props.organizations} />
      </div>
    );
  }
}
Home.propTypes = {
  actions: PropTypes.object.isRequired,
  organizations: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => (
  { organizations: state.app.get('organizations') }
);

const mapDispatchToProps = (dispatch) => (
  { actions: bindActionCreators(allActions, dispatch) }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export {
  styles,
};
