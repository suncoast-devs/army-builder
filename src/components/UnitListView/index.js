import React from "react";
import { observer } from "mobx-react";
import store from "../../store";
import PanelView from "../PanelView";
import UnitView from "../UnitView";
import style from "./style.module.sass";

@observer
class UnitListView extends React.Component {
  render() {
    const unitViews = Object.keys(store.info).map(unit => (
      <UnitView unit={unit} key={unit} />
    ));
    return (
      <PanelView title="Units" className={style.unitList}>
        <table cellSpacing="0">
          <tbody>{unitViews}</tbody>
        </table>
      </PanelView>
    );
  }
}

export default UnitListView;
