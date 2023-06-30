import { useNavigate } from 'react-router-dom';

import { PATH } from '@/constants/path';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(PATH.MAIN);
  };

  return (
    <div>
      <p>404 Not Found</p>
      <button style={{ color: 'white', background: 'black' }} onClick={handleButton}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default NotFoundPage;
