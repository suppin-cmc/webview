import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SignleDatePickerWrapper = styled.div`
  .date-box {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .calendar {
    width: 0.875rem;
    height: 0.875rem;
    margin-bottom: 0.25rem;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container {
    input {
      width: 100%;
      background: transparent;
      border: none;
      color: ${COLORS.Gray2};
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
  .react-datepicker__navigation--next--with-time:not(
      .react-datepicker__navigation—next—with-today-button
    ) {
    right: 2px;
  }

  .react-datepicker-popper {
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    will-change: transform;
    margin-top: 1rem;
  }
  .react-datepicker__time-container {
    width: 100% !important;
  }
`;
