import { BaseIssueProviderCfg } from '../../issue.model';

export interface AsanaCfg extends BaseIssueProviderCfg {
  api_key: string | null;
  projectId: string | null;
}
