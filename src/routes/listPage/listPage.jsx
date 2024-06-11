import { listData } from "../../libraries/dummyData";
import "../../routes/listPage/listPage.scss";
import Filter  from "../../components/filter/filter";

export default function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper"><Filter/></div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  );
}
