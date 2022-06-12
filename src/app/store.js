import { configureStore } from '@reduxjs/toolkit';

import authSlicer from './reducers/authSlicer';
import goalSlicer from './reducers/taskSlicer';


const store = configureStore({
  reducer: {
    auth: authSlicer,
    goals: goalSlicer,
  },
});

export {store};
