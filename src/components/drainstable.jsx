import React, { Component } from "react";
import drainsdata from "./drainsdata";

const DrainsTable = () => {
  let drainsElements = drainsdata.map((drain) => {
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

  return (
    <div>
      <table className="table table-striped table-hover table-bordered caption-top">
        <caption>
          <h2 className="text-center">HydroMax® Sifonik Süzgeç Listesi</h2>
        </caption>
        <thead>
          <tr>
            <th
              className="table-dark border border-light"
              style={{ position: "sticky", top: "63px" }}
            >
              ÜRÜN KODU
            </th>
            <th
              className="table-dark border border-light"
              style={{ position: "sticky", top: "63px" }}
            >
              SÜZGEÇ TİPİ
            </th>
            <th
              className="table-dark border border-light"
              style={{ position: "sticky", top: "63px" }}
            >
              BORU ÇAPI
            </th>
            <th
              className="table-dark border border-light"
              style={{ position: "sticky", top: "63px" }}
            >
              MALZEME
            </th>
            <th
              className="table-dark border border-light"
              style={{ position: "sticky", top: "63px" }}
            >
              BAĞLANTI TİPİ
            </th>
            <th
              className="table-dark border border-light"
              style={{ position: "sticky", top: "63px" }}
            >
              UYGULAMA YERİ
            </th>
            <th
              className="table-dark border border-light"
              style={{ position: "sticky", top: "63px" }}
            >
              Min DEBİ
            </th>
            <th
              className="table-dark border border-light"
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
        <tbody>{drainsElements}</tbody>
      </table>
    </div>
  );
};

export default DrainsTable;
