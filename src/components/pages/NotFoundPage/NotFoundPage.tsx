import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';
import PageLayout from '../../templates/PageLayout/PageLayout';

export function NotFoundPage({ message = 'Такой страницы в гиде нет.' }: { message?: string }) {
  return (
    <PageLayout narrow>
      <Result
        status="404"
        title="404"
        subTitle={message}
        extra={
          <Link to="/">
            <Button type="primary">Вернуться к списку мест</Button>
          </Link>
        }
      />
    </PageLayout>
  );
}

export default NotFoundPage;
