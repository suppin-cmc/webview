import retryIcon from '@/assets/retry.png';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { Box } from '../common/box';
import { SurveyDoneWrapper } from './survey-done.styles';
import { SurveyQuestionItem } from './survey-question-item';

export const SurveyDone = () => {
  const { data } = useSelector((state: RootState) => state.surveyWinner);
  console.log(data);

  return (
    <SurveyDoneWrapper>
      <div className="header">
        <div className="title">
          <h1>당첨자 선별 조건</h1>
          <div className="retry">
            <img src={retryIcon} alt="retry" className="retry-img" />
            <span>다시뽑기</span>
          </div>
        </div>
        <div className="criteria">
          <div className="box">
            <div className="left">당첨자</div>
            <span className="right">
              {data.selectionCriteria.winnerCount}명
            </span>
          </div>
          <div className="box">
            <div className="left">응답기간</div>
            <span className="right">
              {data.selectionCriteria.startDate} ~{' '}
              {data.selectionCriteria.endDate}
            </span>
          </div>
          <div className="box">
            <div className="left">최소글자수</div>
            <span className="right">
              {data.selectionCriteria.minLength || 0}자
            </span>
          </div>
        </div>
      </div>
      <div className="winner">
        <h1>당첨자 리스트</h1>
        <div className="tags">
          {data.selectionCriteria.keywords.length > 0
            ? data.selectionCriteria.keywords.map((k, i) => (
                <div className="tag" key={i}>
                  #{k}
                </div>
              ))
            : null}
        </div>
        {data.winners.length > 0
          ? data.winners.map(w => (
              <Box key={w.participantId} className="winner-box">
                <div className="header">
                  <h2>{w.participantName}</h2>
                  <p>당첨자 세부정보</p>
                </div>
                <SurveyQuestionItem
                  answer={{
                    answerText: w.answerText,
                    participantName: w.participantName,
                    selectedOptions: [''],
                  }}
                />
              </Box>
            ))
          : null}
      </div>
    </SurveyDoneWrapper>
  );
};
