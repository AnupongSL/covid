const db = require("../database/models");
const { Op } = require("sequelize");

exports.repoGetCovidDataAll = async () =>
  await db.Covid_data.findAll({
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });
exports.repoGetCovidDataAllSearch = async () =>
  await db.Covid_data.findAll({
  });


exports.repoGetCovidDataByID = async (id) =>
  await db.Covid_data.findOne({
    where: {
      id: id,
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByFirstName = async (fname) =>
  await db.Covid_data.findAll({
    where: {
      fname: {
        [Op.like]: `${fname}%`,
      },
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByLastName = async (lname) =>
  await db.Covid_data.findAll({
    where: {
      lname: {
        [Op.like]: `${lname}%`,
      },
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByIDcard = async (search) =>
  await db.Covid_data.findAll({
    where: {
      id: search,
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataBySubDistrict = async (sub_district) =>
  await db.Covid_data.findAll({
    where: {
      sub_district: {
        [Op.like]: `${sub_district}%`,
      },
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByDistrict = async (district) =>
  await db.Covid_data.findAll({
    where: {
      district: {
        [Op.like]: `${district}%`,
      },
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByCountry = async (country) =>
  await db.Covid_data.findAll({
    where: {
      country: {
        [Op.like]: `${country}%`,
      },
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByPostal = async (postal) =>
  await db.Covid_data.findAll({
    where: {
      postal: postal,
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByAge = async (age) =>
  await db.Covid_data.findAll({
    where: {
      age: age,
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByBetweenAge = async (age_start, age_stop) =>
  await db.Covid_data.findAll({
    where: {
      age: {
        [Op.gt]: age_start,
        [Op.lt]: age_stop,
      },
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByHeight = async (height) =>
  await db.Covid_data.findAll({
    where: {
      height: height,
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByBetweenHeight = async (height_start, height_stop) =>
  await db.Covid_data.findAll({
    where: {
      height: {
        [Op.gt]: height_start,
        [Op.lt]: height_stop,
      },
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByWeight = async (weight) =>
  await db.Covid_data.findAll({
    where: {
      weight: weight,
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByBetweenWeight = async (weight_start, weight_stop) =>
  await db.Covid_data.findAll({
    where: {
      weight: {
        [Op.gt]: weight_start,
        [Op.lt]: weight_stop,
      },
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoGetCovidDataByDate = async (date_In, date_Out) =>
  await db.Covid_data.findAll({
    where: {
      date: {
        [Op.gt]: date_In,
        [Op.lt]: date_Out,
      },
    },
    attributes: ["id", "fname", "lname", "age", "height", "weight", "sub_district", "district", "country", "postal", "date",],
  });


exports.repoAddCovidData = async (data1) => {
  await db.Covid_data.create(data1);
}

exports.repoUpdateCovidData = async (data, id) =>
  await db.Covid_data.update(data, {
    where: {
      id: id,
    },
  });


exports.repoDeleteCovidData = async (id) =>
  await db.Covid_data.destroy({
    where: {
      id: id,
    },
  });