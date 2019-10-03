import React,{Component} from 'react';
import '../App.css';
import { observer, inject } from 'mobx-react';

// お知らせ
@inject('sections')
@observer
class Notice extends Component {
  render(){
    const { sections } = this.props;
    return (
      <div className="notice">
        <div className="notice__header">Notice!</div>
        <div className="notice__content">
          <div className="section_a_notice">
            <span className="section_notice__title">
              {`SectionA:`}  
            </span>
            <span className="section_notice__content">
              {sections.sectionAstatus}
            </span>
          </div>
          <div className="section_b_notice">
            <span className="section_notice__title">
              {`SectionB:`} 
            </span>
            <span className="section_notice__content">
              {sections.sectionBstatus}
            </span>
          </div>
          <div className="current_status">
            {sections.currentStatus}
          </div>
        </div>  
      </div>       
    );
  }
}

export default Notice;
