import {
  ConfigFormSection,
  LimitedFormlyFieldConfig,
} from 'src/app/features/config/global-config.model';
import { AsanaCfg } from './asana.model';

export const DEFAULT_ASANA_CFG: AsanaCfg = {
  isEnabled: false,
  api_key: null,
  projectId: null,
};

export const ASANA_CONFIG_FORM: LimitedFormlyFieldConfig<AsanaCfg>[] = [
  {
    key: 'api_key',
    type: 'input',
    hideExpression: (model: any) => !model.isEnabled,
    templateOptions: {
      label: 'API Key',
      required: true,
      type: 'password',
    },
  },
  {
    key: 'projectId',
    type: 'input',
    hideExpression: (model: any) => !model.isEnabled,
    templateOptions: {
      label: 'Project ID',
      type: 'text',
      required: true,
      description: 'PROJECT ID DESCRIPTION',
    },
  },
];

export const ASANA_CONFIG_FORM_SECTION: ConfigFormSection<AsanaCfg> = {
  title: 'ASANA FORM SECTION',
  key: 'REDMINE',
  items: ASANA_CONFIG_FORM,
  help: 'ASANA FORM HELP',
};
