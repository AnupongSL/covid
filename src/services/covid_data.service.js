const covidDataRepository = require("../repositories/covid_data.repository");
const moment = require("moment");
const bcrypt = require("bcryptjs");

exports.servGetCovidDataAll = async () => await covidDataRepository.repoGetCovidDataAll();


exports.servGetCovidDataByID = async (id) => await covidDataRepository.repoGetCovidDataByID(id);


exports.servGetCovidDataByFirstName = async (fname) =>
  await covidDataRepository.repoGetCovidDataByFirstName(fname);


exports.servGetCovidDataByLastName = async (lname) =>
  await covidDataRepository.repoGetCovidDataByLastName(lname);


exports.servGetCovidDataByIDcard = async (id_card) => {
  const result = await covidDataRepository.repoGetCovidDataAllSearch();
  const length = result.length
  let checkIDcard = [];
  let isMatch = [];
  let search = -1;
  for(let i = 0; i < length; i++){
    checkIDcard[i] = result[i].id_card
    isMatch = await bcrypt.compare(id_card, checkIDcard[i]);
    if(isMatch === true){
      search = result[i].id
      break;
    }
  }
  if(search !== -1){
    return await covidDataRepository.repoGetCovidDataByIDcard(search);
  } else {
    return "";
  }
}


exports.servGetCovidDataBySubDistrict = async (sub_district) =>
  await covidDataRepository.repoGetCovidDataBySubDistrict(sub_district);


exports.servGetCovidDataByDistrict = async (district) =>
  await covidDataRepository.repoGetCovidDataByDistrict(district);


exports.servGetCovidDataByCountry = async (country) =>
  await covidDataRepository.repoGetCovidDataByCountry(country);


exports.servGetCovidDataByPostal = async (postal) =>
  await covidDataRepository.repoGetCovidDataByPostal(postal);


exports.servGetCovidDataByAge = async (age) =>
  await covidDataRepository.repoGetCovidDataByAge(age);


exports.servGetCovidDataByBetweenAge = async (age_start, age_stop) =>
  await covidDataRepository.repoGetCovidDataByBetweenAge(age_start, age_stop);


exports.servGetCovidDataByHeight = async (height) =>
  await covidDataRepository.repoGetCovidDataByHeight(height);


exports.servGetCovidDataByBetweenHeight = async (height_start, height_stop) =>
  await covidDataRepository.repoGetCovidDataByBetweenHeight(height_start, height_stop);


exports.servGetCovidDataByWeight = async (weight) =>
  await covidDataRepository.repoGetCovidDataByWeight(weight);


exports.servGetCovidDataByBetweenWeight = async (weight_start, weight_stop) =>
  await covidDataRepository.repoGetCovidDataByBetweenWeight(weight_start, weight_stop);


exports.servGetCovidDataByDate = async (date) =>{
    const time = moment(date);
    const time2 = moment(date);
    const date_In = time.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    const date_Out = time2.set({
      hour: 23,
      minute: 59,
      second: 59,
      millisecond: 0,
    });
    return await covidDataRepository.repoGetCovidDataByDate(date_In, date_Out);
}


exports.servGetCovidDataByBetweenDate = async (date_start, date_stop) => {
    const time_In = moment(date_start);
    const time_Out = moment(date_stop);
    const date_In = time_In.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    const date_Out = time_Out.set({
      hour: 23,
      minute: 59,
      second: 59,
      millisecond: 0,
    }); 
    return await covidDataRepository.repoGetCovidDataByDate(date_In, date_Out);
}


exports.servAddCovidData = async (data1, id_card) => {
  const id_cardHash = await bcrypt.hash(id_card, 10);
  const newDate = new Date();
  const createat = newDate.setHours(newDate.getHours());
  return await covidDataRepository.repoAddCovidData({
    ...data1,
    id_card: id_cardHash,
    date: createat,
  });
};


exports.servUpdateCovidData = async (data, id) => {
  await covidDataRepository.repoUpdateCovidData(id, {
    ...data,
  });
};


exports.servDeleteCovidData = async (id) =>
  await covidDataRepository.repoDeleteCovidData(id);