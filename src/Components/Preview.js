import React,{Component} from 'react';
import '../App.css';
import { observer, inject } from 'mobx-react';
import {sectionA_ImgList, sectionB_ImgList} from '../constants/systemSetting';

@inject('sections')
@observer
class Preview extends Component {
  render(){
    const { sections } = this.props;
    return (
      <div className="preview">
        <div className="preview_a">
          <img src={sectionA_ImgList[sections.selectedA]} alt="" />
        </div>
        <div className="preview_b">
          <img src={sectionB_ImgList[sections.selectedB]} alt="" />
        </div>   
      </div>
    );
  }
}

export default Preview;
