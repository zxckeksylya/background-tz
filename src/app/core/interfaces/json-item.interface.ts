import { ControlTypes } from '../constants/control-types.constants';

export interface JsonItem {
  label: string;
  controlType: ControlTypes;
  required?: boolean;
  description?: string;
  choices?: string[];
}
