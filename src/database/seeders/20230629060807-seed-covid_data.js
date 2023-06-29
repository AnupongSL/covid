"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map((item) => {
      item.created_at = new Date();
      item.updated_at = new Date();
    });

    await queryInterface.bulkInsert("covid_data", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("covid_data", null, {});
  },
};

const data = [
  {
    fname: "อนุพงศ์",
    lname: "สูตรเลข",
    id_card: "0000000000000",
    age: 22,
    height: 174,
    weight: 59,
    sub_district: "ศรีถ้อย",
    district: "แม่ใจ",
    country: "พะเยา",
    postal: "56130"
  },
  {
    fname: "อัญชลีภรณ์",
    lname: "แสนเพ๊ชร",
    id_card: "1111111111111",
    age: 19,
    height: 165,
    weight: 52,
    sub_district: "บ้านเหล่า",
    district: "บ้านเหล่า",
    country: "พะเยา",
    postal: "56130"
  },
  {
    fname: "ศิรินภา",
    lname: "ศิริกันรัตน์",
    id_card: "2222222222222",
    age: 42,
    height: 158,
    weight: 45,
    sub_district: "ชัยพฤกษ์",
    district: "เมือง",
    country: "เลย",
    postal: "42000"
  },
  {
    fname: "ธมนวรรณ",
    lname: "จิตรกล้า",
    id_card: "3333333333333",
    age: 22,
    height: 165,
    weight: 48,
    sub_district: "ช้างเผือก",
    district: "เมือง",
    country: "เชียงใหม่",
    postal: "50300"
  },
  {
    fname: "วรรณวิสา",
    lname: "ปัญญาสัย",
    id_card: "4444444444444",
    age: 27,
    height: 159,
    weight: 65,
    sub_district: "โนนเปื่อย",
    district: "กุดชุม",
    country: "ยโสทร",
    postal: "35140"
  },
  {
    fname: "ชุดาภา",
    lname: "เรือนแก้ว",
    id_card: "5555555555555",
    age: 30,
    height: 155,
    weight: 48,
    sub_district: "ห้วยขวาง",
    district: "กำแพงแสน",
    country: "นครปฐม",
    postal: "73140"
  },
];