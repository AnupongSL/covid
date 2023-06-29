const router = require('express').Router();
const covidDataController = require('../controllers/covid_data.controller')

router.get('/getdataall', covidDataController.getCovidDataAll);                          //ดึงข้อมูลทั้งหมด
router.get('/getdata/:id',covidDataController.getCovidDataByID);                         //ดึงข้อมูลตามไอดี
router.post('/getdatabyfname',covidDataController.getCovidDataByFirstName);              //ดึงข้อมูลตามชื่อ
router.post('/getdatabylname',covidDataController.getCovidDataByLastName);               //ดึงข้อมูลตามนามสกุล
router.post('/getdatabyidcard',covidDataController.getCovidDataByIDcard);                //ดึงข้อมูลตามบัตรประชาชน
router.post('/getdatabysubdistrict',covidDataController.getCovidDataBySubDistrict);      //ดึงข้อมูลตาม แขวง/ตำบล
router.post('/getdatabydistrict',covidDataController.getCovidDataByDistrict);            //ดึงข้อมูลตาม เขต/อำเภอ
router.post('/getdatabycounty',covidDataController.getCovidDataByCountry);               //ดึงข้อมูลตามจังหวัด
router.post('/getdatabypostal',covidDataController.getCovidDataByPostal);                //ดึงข้อมูลตามเลขไปรษณีย์
router.post('/getdatabyage',covidDataController.getCovidDataByAge);                      //ดึงข้อมูลตามอายุ
router.post('/getdatabybetweenage',covidDataController.getCovidDataByBetweenAge);        //ดึงข้อมูลตามระหว่างอายุ
router.post('/getdatabyheight',covidDataController.getCovidDataByHeight);                //ดึงข้อมูลตามส่วนสูง
router.post('/getdatabybetweenheight',covidDataController.getCovidDataByBetweenHeight);  //ดึงข้อมูลตามระหว่างส่วนสูง
router.post('/getdatabyweight',covidDataController.getCovidDataByWeight);                //ดึงข้อมูลตามน้ำหนัก
router.post('/getdatabybetweenweight',covidDataController.getCovidDataByBetweenWeight);  //ดึงข้อมูลตามระหว่างน้ำหนัก
router.post('/getdatabydate',covidDataController.getCovidDataByDate);                    //ดึงข้อมูลตามวันที่
router.post('/getdatabybetweendate',covidDataController.getCovidDataByBetweenDate);      //ดึงข้อมูลตามระหว่างวันที่
router.post('/addcoviddata',covidDataController.addCovidData);                           //เพิ่มข้อมูลผู้ลงทะเบียน covid
router.put('/updatecoviddata/:id',covidDataController.updateCovidData);                  //แก้ไขข้อมูลผู้ลงทะเบียน covid
router.delete('/delete/:id',covidDataController.deleteCovidData);                        //ลบข้อมูลผู้ลงทะเบียน covid

module.exports = router