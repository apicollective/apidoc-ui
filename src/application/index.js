import { actions, actionTypes } from './actions';
import { takeLatestSaga } from './sagas';
import { reducers } from './reducers';

import Application from './components/Application';

const name = 'application';

export {
  name,
  actionTypes,
  actions,
  reducers,
  takeLatestSaga,
  Application,
};
