import { COLORS } from '@/theme';
import styled from 'styled-components';

export const SurveyDoneWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 38px 20px;

  .header {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        color: ${COLORS.Gray1};
        font-weight: 600;
        font-size: 1.125rem;
      }

      .retry {
        display: flex;
        align-items: center;
        gap: 6px;
        border-bottom: 1px solid ${COLORS.Main};
        color: ${COLORS.Main};
        font-size: 0.75rem;
        padding-bottom: 4px;

        .retry-img {
          width: 13px;
          height: 13px;
          position: static;
          margin-top: 0.625rem;
        }
      }
    }

    .criteria {
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #e9efff80;
      border: 1px solid ${COLORS.Sub2};
      border-radius: 10px;
      padding: 14px 18px;

      .box {
        display: flex;
        align-items: center;
        height: 30px;
      }
      .left {
        color: ${COLORS.Gray2};
        font-size: 14px;
        font-weight: 600;
        min-width: 100px;
      }
      .right {
        font-size: 14px;
        font-weight: 400;
        color: ${COLORS.Gray2};
      }
    }
  }

  .winner {
    display: flex;
    flex-direction: column;
    gap: 12px;
    h1 {
      font-size: 18px;
      color: ${COLORS.Gray1};
    }
    .tags {
      display: flex;
      align-items: center;
      gap: 3px;
      .tag {
        width: fit-content;
        height: 30px;
        border-radius: 100px;
        padding: 0 10px;
        border: 1px solid ${COLORS.Main};
        color: ${COLORS.Main};
        font-size: 12px;
      }
    }

    .winner-box {
      background-color: ${COLORS.white};
      box-shadow: 0px 0px 4px 0px #00000040;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 13px;

      h2 {
        font-weight: 500;
        font-size: 1rem;
        color: ${COLORS.Gray1};
      }
      p {
        font-weight: 500;
        font-size: 12px;
        color: ${COLORS.Gray3};
      }
    }
  }
`;
