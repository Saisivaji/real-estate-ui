import { listData } from "../../libraries/dummyData";
import "../../routes/listPage/listPage.scss";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";

export default function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  );
}
