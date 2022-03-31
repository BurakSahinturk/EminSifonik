import React, { useState } from "react";
import drainsdata from "./drainsdata";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ScrollToTopOnMount from "./scrolltotoponmount";
import _ from "lodash";
import OrderingIcon from "./drainlisttools/orderingbutton";
import EmptyOrderingIcon from "./drainlisttools/orderingbuttonempty";

const DrainsTable = () => {
  const [data, setData] = useState(drainsdata);
  const [selectedType, setSelectedType] = useState("none");
  const [selectedDia, setSelectedDia] = useState("none");
  const [selectedMaterial, setSelectedMaterial] = useState("none");
  const [selectedConnection, setSelectedConnection] = useState("none");
  const [selectedAppliedTo, setSelectedAppliedTo] = useState("none");
  const [sortBy, setSortBy] = useState("ShortCode");
  const [ascOrDesc, setAscOrDesc] = useState("asc");

  const filterType = (input, filtering) => {
    let output = [];
    switch (filtering) {
      case "none":
        output = input;
        return output;
      case "other":
        output = input.filter(
          (f) => f.Type !== "Primer" && f.Type !== "Taşkan"
        );
        return output;
      default:
        output = input.filter((f) => f.Type === filtering);
        return output;
    }
  };

  const filterDia = (input, filtering) => {
    let output = [];
    filtering === "none"
      ? (output = input)
      : (output = input.filter((f) => f.Dia === filtering));
    return output;
  };

  const filterMaterial = (input, filtering) => {
    let output = [];
    filtering === "none"
      ? (output = input)
      : (output = input.filter((f) => f.Material.includes(filtering)));
    return output;
  };

  const filterConnection = (input, filtering) => {
    let output = [];
    filtering === "none"
      ? (output = input)
      : (output = input.filter((f) => f.Connection === filtering));
    return output;
  };

  const filterAppliedTo = (input, filtering) => {
    let output = [];
    filtering === "none"
      ? (output = input)
      : (output = input.filter((f) => f.AppliedTo.includes(filtering)));
    return output;
  };

  const filterData = (newValueType, newValue) => {
    let typeFiltered = [];
    let diaFiltered = [];
    let materialFiltered = [];
    let connectionFiltered = [];
    let apliedToFiltered = [];
    let finalFiltered = [];

    if (newValueType === "Type") {
      setSelectedType(newValue);
      typeFiltered = filterType(drainsdata, newValue);
    } else typeFiltered = filterType(drainsdata, selectedType);

    if (newValueType === "Dia") {
      setSelectedDia(newValue);
      diaFiltered = filterDia(typeFiltered, newValue);
    } else diaFiltered = filterDia(typeFiltered, selectedDia);

    if (newValueType === "Material") {
      setSelectedMaterial(newValue);
      materialFiltered = filterMaterial(diaFiltered, newValue);
    } else materialFiltered = filterMaterial(diaFiltered, selectedMaterial);

    if (newValueType === "Connection") {
      setSelectedConnection(newValue);
      connectionFiltered = filterConnection(materialFiltered, newValue);
    } else
      connectionFiltered = filterConnection(
        materialFiltered,
        selectedConnection
      );

    if (newValueType === "AppliedTo") {
      setSelectedAppliedTo(newValue);
      apliedToFiltered = filterAppliedTo(connectionFiltered, newValue);
    } else
      apliedToFiltered = filterAppliedTo(connectionFiltered, selectedAppliedTo);
    finalFiltered = sortList(apliedToFiltered, sortBy, ascOrDesc);
    setData(apliedToFiltered);
  };

  const sortList = (inputdata, sorter, sortorder) => {
    let sorted = [];
    sorter === "ShortCode"
      ? (sorted = _.orderBy(inputdata, [sorter], [sortorder]))
      : (sorted = _.orderBy(
          inputdata,
          [sorter, drainsdata.ShortCode],
          [sortorder, "asc"]
        ));
    return sorted;
  };

  const handleSort = (sorter) => {
    let newSortOrder = "";
    let newSorter = "";
    if (sorter === sortBy) {
      ascOrDesc === "asc" ? (newSortOrder = "desc") : (newSortOrder = "asc");
    } else {
      newSortOrder = "asc";
    }
    newSorter = sorter;
    setAscOrDesc(newSortOrder);
    setSortBy(newSorter);
    let newData = sortList(data, newSorter, newSortOrder);
    setData(newData);
  };

  let finalData = data.map((drain) => {
    return (
      <tr key={drain.ShortCode}>
        <td>{drain.Code}</td>
        <td>{drain.Type}</td>
        <td>{drain.Dia}mm</td>
        <td>{drain.Material}</td>
        {drain.Connection ? (
          <td>{drain.Connection}</td>
        ) : (
          <td colSpan={2}>{drain.AppliedTo}</td>
        )}
        {drain.Connection && <td>{drain.AppliedTo}</td>}
        <td>{drain.MinFlow ? drain.MinFlow : " "}</td>
        <td>{drain.MaxFlow ? drain.MaxFlow : " "}</td>
        <td>{drain.Description}</td>
      </tr>
    );
  });

  let listedDrainNumber = finalData.length;

  const sorted = [];

  return (
    <main>
      <ScrollToTopOnMount />
      <div className="m-3 container-flex">
        <div className="row">
          <div className="col-md">
            <Card>
              <Card.Header>Süzgeç/Ürün Tipi</Card.Header>
              <ListGroup variant="flush" id="Type" defaultActiveKey="link1">
                <ListGroup.Item
                  action
                  eventKey="link1"
                  onClick={() => filterData("Type", "none")}
                >
                  Hepsi
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link2"
                  onClick={() => filterData("Type", "Primer")}
                >
                  Primer
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link3"
                  onClick={() => filterData("Type", "Taşkan")}
                >
                  Taşkan
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link4"
                  onClick={() => filterData("Type", "other")}
                >
                  Aksesuar
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="col-md">
            <Card>
              <Card.Header>Çıkış Boru Çapı</Card.Header>
              <ListGroup variant="flush" id="Dia" defaultActiveKey="link1">
                <ListGroup.Item
                  action
                  eventKey="link1"
                  onClick={() => filterData("Dia", "none")}
                >
                  Hepsi
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link2"
                  onClick={() => filterData("Dia", "50")}
                >
                  ∅50
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link3"
                  onClick={() => filterData("Dia", "75")}
                >
                  ∅75
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link4"
                  onClick={() => filterData("Dia", "125")}
                >
                  ∅125
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
          <div className="col-md">
            <Card>
              <Card.Header>Malzeme</Card.Header>
              <ListGroup variant="flush" id="Material" defaultActiveKey="link1">
                <ListGroup.Item
                  action
                  eventKey="link1"
                  onClick={() => filterData("Material", "none")}
                >
                  Hepsi
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link2"
                  onClick={() => filterData("Material", "Ps")}
                >
                  Paslanmaz Çelik
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link3"
                  onClick={() => filterData("Material", "Galvanize")}
                >
                  Galvanize Çelik
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link4"
                  onClick={() => filterData("Material", "Alüminyum")}
                >
                  Alüminyum
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>

          <div className="col-md">
            <Card>
              <Card.Header>Bağlantı Tipi</Card.Header>
              <ListGroup
                variant="flush"
                id="Connection"
                defaultActiveKey="link1"
              >
                <ListGroup.Item
                  action
                  eventKey="link1"
                  onClick={() => filterData("Connection", "none")}
                >
                  Hepsi
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link2"
                  onClick={() => filterData("Connection", "Kelepçeli")}
                >
                  Kelepçeli
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link3"
                  onClick={() => filterData("Connection", "Vidalı")}
                >
                  Vidalı
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link4"
                  onClick={() => filterData("Connection", "Kaynaklı")}
                >
                  Kaynaklı
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>

          <div className="col-md">
            <Card>
              <Card.Header>Uygulama Yeri</Card.Header>
              <ListGroup
                variant="flush"
                id="AppliedTo"
                defaultActiveKey="link1"
              >
                <ListGroup.Item
                  action
                  eventKey="link1"
                  onClick={() => filterData("AppliedTo", "none")}
                >
                  Hepsi
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link2"
                  onClick={() => filterData("AppliedTo", "Oluk")}
                >
                  Oluk
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link3"
                  onClick={() => filterData("AppliedTo", "Teras")}
                >
                  Teras
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  eventKey="link4"
                  onClick={() => filterData("AppliedTo", "Dış")}
                >
                  Dışmekan
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover table-bordered caption-top">
        <caption>
          <h2 className="text-center">HydroMax® Sifonik Süzgeç Listesi</h2>
          {listedDrainNumber ? (
            <p className="text-center mb-0">
              {listedDrainNumber} adet süzgeç listeleniyor
            </p>
          ) : (
            <p className="text-center mb-0">
              Seçili Kriterlere uygun süzgecimiz bulunmamaktadır
            </p>
          )}
        </caption>
        <thead>
          <tr>
            <th
              className="table-dark border border-light text-center"
              style={{ position: "sticky", top: "63px" }}
              onClick={() => handleSort("ShortCode")}
            >
              ÜRÜN KODU
              {sortBy === "ShortCode" ? (
                <OrderingIcon order={ascOrDesc} />
              ) : (
                <EmptyOrderingIcon />
              )}
            </th>
            <th
              className="table-dark border border-light text-center"
              style={{ position: "sticky", top: "63px" }}
              onClick={() => handleSort("Type")}
            >
              SÜZGEÇ TİPİ
              {sortBy === "Type" ? (
                <OrderingIcon order={ascOrDesc} />
              ) : (
                <EmptyOrderingIcon />
              )}
            </th>
            <th
              className="table-dark border border-light text-center"
              style={{ position: "sticky", top: "63px" }}
              onClick={() => handleSort("Dia")}
            >
              BORU ÇAPI
              {sortBy === "Dia" ? (
                <OrderingIcon order={ascOrDesc} />
              ) : (
                <EmptyOrderingIcon />
              )}
            </th>
            <th
              className="table-dark border border-light text-center"
              style={{ position: "sticky", top: "63px" }}
              onClick={() => handleSort("Material")}
            >
              MALZEME
              {sortBy === "Material" ? (
                <OrderingIcon order={ascOrDesc} />
              ) : (
                <EmptyOrderingIcon />
              )}
            </th>
            <th
              className="table-dark border border-light text-center"
              style={{ position: "sticky", top: "63px" }}
              onClick={() => handleSort("Connection")}
            >
              BAĞLANTI TİPİ
              {sortBy === "Connection" ? (
                <OrderingIcon order={ascOrDesc} />
              ) : (
                <EmptyOrderingIcon />
              )}
            </th>
            <th
              className="table-dark border border-light text-center text-center"
              style={{ position: "sticky", top: "63px" }}
              onClick={() => handleSort("AppliedTo")}
            >
              UYGULAMA YERİ
              {sortBy === "AppliedTo" ? (
                <OrderingIcon order={ascOrDesc} />
              ) : (
                <EmptyOrderingIcon />
              )}
            </th>
            <th
              className="table-dark border border-light text-center"
              style={{ position: "sticky", top: "63px" }}
            >
              Min DEBİ
            </th>
            <th
              className="table-dark border border-light text-center"
              style={{ position: "sticky", top: "63px" }}
            >
              Max DEBİ
            </th>
            <th
              className="table-dark border border-light"
              style={{ position: "sticky", top: "63px" }}
            >
              AÇIKLAMA
            </th>
          </tr>
        </thead>
        <tbody>{finalData}</tbody>
      </table>
      {listedDrainNumber ? (
        <span>{listedDrainNumber} adet süzgeç listeleniyor</span>
      ) : (
        <span>Seçili Kriterlere uygun süzgecimiz bulunmamaktadır</span>
      )}
    </main>
  );
};

export default DrainsTable;
