import { Tag } from 'antd';
import type { AttractionStatus } from '../../../data/types';

const STATUS_MAP: Record<AttractionStatus, { label: string; color: string } | null> = {
  ready: null,
  draft: { label: 'Черновик', color: 'gold' },
  planned: { label: 'В планах', color: 'default' },
};

/** Показывает, насколько готова страница места. Для готовых ничего не рисует. */
export function StatusBadge({ status }: { status: AttractionStatus }) {
  const config = STATUS_MAP[status];
  if (!config) return null;

  return (
    <Tag color={config.color} bordered={false} className="status-badge">
      {config.label}
    </Tag>
  );
}

export default StatusBadge;
