import { observable, action, computed } from 'mobx';
import {sectionA_NameList, sectionB_NameList} from '../constants/systemSetting';

export default class SectionStore {
  @observable selectedA = 0;
  @observable selectedB = 0;
  selectedA_prev = this.selectedA;
  selectedB_prev = this.selectedB;

  @computed 
  get currentStatus () { 
    return `'${sectionA_NameList[this.selectedA]}' is in SectionA and '${sectionB_NameList[this.selectedB]}' is in SectionB.`;
  };
  @computed 
  get sectionAstatus () { 
    return (this.selectedA_prev !== this.selectedA) ? `${sectionA_NameList[this.selectedA_prev]} -> ${sectionA_NameList[this.selectedA]}`:`Not changed.`;
  };
  @computed 
  get sectionBstatus () { 
    return (this.selectedB_prev !== this.selectedB) ? `${sectionB_NameList[this.selectedB_prev]} -> ${sectionB_NameList[this.selectedB]}`:`Not changed.`;
  };

  @action selectA = (_event, _index, value) => {
    this.selectedA_prev = this.selectedA;
    this.selectedA = value;
  }

  @action selectB = (_event, _index, value) => {
    this.selectedB_prev = this.selectedB;
    this.selectedB = value;
  }
}
