import Layout from '@/layout';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const DashBoardPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        DashBoardPage
        <Button onClick={() => navigate('/admin/post/create')}>创建教程</Button>
        <Button onClick={() => navigate('/admin/post/edit/123')}>编辑教程</Button>
        <Button onClick={() => navigate('/admin/post/view/123')}>查看教程</Button>
      </div>
    </Layout>
  );
};

export default DashBoardPage;
