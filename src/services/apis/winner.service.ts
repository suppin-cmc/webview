import { WinnerPayload, WinnerResponseType } from '@/types/winner';
import { axiosInstance } from '../axios-instance';

export const draftWinners = async (
  payload: WinnerPayload
): Promise<WinnerResponseType> => {
  const { data } = await axiosInstance.post('/survey/draft', payload);
  return data;
};
