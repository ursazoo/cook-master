import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate('/')}>返回首页</Button>
    </div>
  );
};

export default NotFoundPage;
