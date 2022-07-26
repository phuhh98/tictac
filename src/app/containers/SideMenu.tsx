import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import SideMenu from '../../components/SideMenu/SideMenu';

import {
  setPlayerMove,
  setComputerLevel,
} from '../../app/features/gameSettingsSlice';

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  SetPlayerMove: (val: any) => dispatch(setPlayerMove(val)),
  SetComputerLevel: (val: any) => dispatch(setComputerLevel(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
