import { connect } from 'react-redux';
import ListingMap from './listing_map';
import { logout } from '../../actions/session_actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingMap);
