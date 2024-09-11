import { WinnerType } from '@/types/winner';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { data: WinnerType } = {
  data: {
    winners: [
      {
        participantId: -1,
        answerText: '',
        participantName: '',
      },
    ],
    selectionCriteria: {
      endDate: '',
      keywords: [],
      minLength: 0,
      startDate: '',
      winnerCount: -1,
    },
  },
};

const surveyWinnerSlice = createSlice({
  name: 'survey-winner',
  initialState,
  reducers: {
    setSurveyWinners: (state, actions: PayloadAction<WinnerType>) => {
      state.data = actions.payload;
    },
  },
});

export const { setSurveyWinners } = surveyWinnerSlice.actions;

export default surveyWinnerSlice.reducer;
