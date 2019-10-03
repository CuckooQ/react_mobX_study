import React,{Component} from 'react';
import '../App.css';
import { observer, inject } from 'mobx-react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {sectionA_NameList, sectionB_NameList} from '../constants/systemSetting';

@inject('sections')
@observer
class Menu extends Component {
  render(){
    const { sections } = this.props;
    return (
      <div className="menu">
        <div className="menu_title">
          AQUARIUM INFO
        </div>
        <div className="sections">
          <div className="select_a">
            <SelectField
              floatingLabelText="SectionA"
              floatingLabelStyle={{color: '#282C34'}}
              value={sections.selectedA}
              onChange={sections.selectA}
            >
              {
                sectionA_NameList.map((value, index)=>
                  <MenuItem key={`a_${index}`} value={index} primaryText={value} />
              )}
            </SelectField>
          </div>
          <div className="select_b">
            <SelectField
              floatingLabelText="SectionB"
              floatingLabelStyle={{color: '#282C34'}}
              value={sections.selectedB}
              onChange={sections.selectB}
            >
             {
                sectionB_NameList.map((value, index)=>
                  <MenuItem key={`b_${index}`} value={index} primaryText={value} />
              )}
            </SelectField>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
