import Layout from '@/layout';
import { useParams } from 'react-router-dom';

const MenuPostPage = () => {
  const { id } = useParams();
  return (
    <Layout>
      <div>
        {`id: ${id}`}
        <div> MenuPostPage </div>
      </div>
    </Layout>
  );
};

export default MenuPostPage;
