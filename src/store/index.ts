import collectReducer from '@/store/collect';
import datesReducer from '@/store/comment';
import crawlingReducer from '@/store/crawling';
import signupReducer from '@/store/signup/signup';
import termsReducer from '@/store/signup/terms';
import surveyReducer from '@/store/survey';
import userReducer from '@/store/user';
import winnerReducer from '@/store/winner';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import surveyWinner from './survey-winner';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedWinnerReducer = persistReducer(persistConfig, winnerReducer);
const persistedReducer = persistReducer(persistConfig, collectReducer);

const store = configureStore({
  reducer: {
    login: userReducer,
    survey: surveyReducer,
    winner: persistedWinnerReducer,
    terms: termsReducer,
    signup: signupReducer,
    dates: datesReducer,
    collect: persistedReducer,
    crawling: crawlingReducer,
    surveyWinner,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // persist와 관련된 액션은 무시
      },
    }),
});

export const persistor = persistStore(store);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
