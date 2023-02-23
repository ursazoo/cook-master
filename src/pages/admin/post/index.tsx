import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cherry from 'cherry-markdown';
import { CherryOptions } from 'cherry-markdown/dist/types/Cherry';

import Layout from '@/layout';

import 'cherry-markdown/dist/cherry-markdown.min.css';
import { Button } from 'antd';
import styles from './index.module.less';

const PostPage = () => {
  const { type, id } = useParams();
  console.log(`type: ${type}`);
  console.log(`id: ${id}`);
  const [cherryInstance, setCherryInstance] = useState<Cherry>();
  // console.log('===cherryInstance===');
  // console.log(cherryInstance);

  useEffect(() => {
    const option: CherryOptions = {
      id: 'markdown',
      value: '',
      placeholder: '这是占位符',
      engine: {},
      editor: {
        height: '100%',
        defaultModel: type === 'view' ? 'previewOnly' : 'edit&preview',
      },
    };

    setCherryInstance(new Cherry(option));

    return () => {};
  }, []);

  // const editorConfiguration = {
  //   plugins: [Paragraph, Bold, Italic, Essentials],
  //   toolbar: ['bold', 'italic'],
  // };
  return (
    <Layout>
      <div className={styles.postPageContainer}>
        <div className={styles.operations}>
          <Button onClick={() => console.log(cherryInstance?.getMarkdown())}>获得内容</Button>
          <Button onClick={() => cherryInstance?.setMarkdown('')}>清空内容</Button>
        </div>
        <div className={styles.editor}>
          <div id="markdown" />
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
