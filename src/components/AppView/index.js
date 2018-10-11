import React from "react";
import UnitListView from "../UnitListView";
import ResourcesView from "../ResourcesView";
import SummaryView from "../SummaryView";

import style from "./style.module.sass";

class AppView extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <main>
          <UnitListView />
        </main>
        <aside>
          <ResourcesView />
          <SummaryView />
        </aside>
      </div>
    );
  }
}

export default AppView;
